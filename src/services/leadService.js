// =============================================
// Lead Service — Singular Marketplace
// Full CRUD and funnel management for leads
// =============================================

import { trackEvent, EVENT_NAMES } from './eventTracker'
import { generateLeadId } from './sessionManager'
import { sendLeadConfirmation, sendProviderRouting } from './notificationService'

const STORAGE_KEY = 'sg_leads'

// Funnel statuses in order
export const FUNNEL_STATUSES = [
    { key: 'novo', label: 'Novo', color: '#3b82f6' },
    { key: 'contato_em_andamento', label: 'Contato em Andamento', color: '#f59e0b' },
    { key: 'triagem', label: 'Triagem', color: '#8b5cf6' },
    { key: 'encaminhado_fornecedor', label: 'Encaminhado → Fornecedor', color: '#E64E10' },
    { key: 'encaminhado_consultorio', label: 'Encaminhado → Consultório', color: '#E64E10' },
    { key: 'encaminhado_nutricao', label: 'Encaminhado → Nutrição', color: '#E64E10' },
    { key: 'agendado', label: 'Agendado', color: '#06b6d4' },
    { key: 'reuniao_realizada', label: 'Reunião Realizada', color: '#10b981' },
    { key: 'proposta_enviada', label: 'Proposta Enviada', color: '#f97316' },
    { key: 'fechado', label: 'Fechado', color: '#22c55e' },
    { key: 'perdido', label: 'Perdido', color: '#ef4444' },
]

function getStoredLeads() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

function saveLeads(leads) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads))
}

function updateLead(leadId, updates) {
    const leads = getStoredLeads()
    const idx = leads.findIndex((l) => l.leadId === leadId)
    if (idx === -1) return null
    leads[idx] = { ...leads[idx], ...updates, updatedAt: new Date().toISOString() }
    saveLeads(leads)
    return leads[idx]
}

// ---- Public API ----

export function createLead(data) {
    const lead = {
        leadId: generateLeadId(),
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        empresa: data.empresa,
        dorSelecionada: data.dorSelecionada,
        descricaoProblema: data.descricaoProblema,
        urgencia: data.urgencia,
        orcamento: data.orcamento,
        providerId: data.providerId || null,
        origem: 'marketplace',
        status: 'novo',
        tentativaContato: 0,
        notas: [],
        reunioes: [],
        propostas: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
    }

    const leads = getStoredLeads()
    leads.push(lead)
    saveLeads(leads)

    // Fire event
    trackEvent(EVENT_NAMES.LEAD_CREATED, {
        leadId: lead.leadId,
        nome: lead.nome,
        email: lead.email,
        dorSelecionada: lead.dorSelecionada,
        origem: lead.origem,
    })

    // Send notifications
    sendLeadConfirmation(lead)

    return lead
}

export function getLeads() {
    return getStoredLeads()
}

export function getLeadById(leadId) {
    return getStoredLeads().find((l) => l.leadId === leadId) || null
}

export function getLeadsByStatus(status) {
    return getStoredLeads().filter((l) => l.status === status)
}

export function updateLeadStatus(leadId, status) {
    return updateLead(leadId, { status })
}

export function incrementContactAttempt(leadId) {
    const lead = getLeadById(leadId)
    if (!lead) return null

    const updated = updateLead(leadId, {
        tentativaContato: lead.tentativaContato + 1,
        status: 'contato_em_andamento',
    })

    trackEvent(EVENT_NAMES.CONTACT_ATTEMPTED, {
        leadId,
        tentativaContato: updated.tentativaContato,
    })

    return updated
}

export function registerContact(leadId, notas, diagnosticoInicial) {
    const lead = getLeadById(leadId)
    if (!lead) return null

    const newNote = {
        id: Date.now(),
        tipo: 'contato',
        texto: notas,
        diagnosticoInicial,
        createdAt: new Date().toISOString(),
    }

    const updated = updateLead(leadId, {
        status: 'triagem',
        notas: [...lead.notas, newNote],
    })

    trackEvent(EVENT_NAMES.LEAD_CONTACTED, {
        leadId,
        diagnosticoInicial,
    })

    return updated
}

export function completeTriage(leadId, destination, providerName = null) {
    // destination: 'fornecedor' | 'consultorio' | 'nutricao'
    const statusMap = {
        fornecedor: 'encaminhado_fornecedor',
        consultorio: 'encaminhado_consultorio',
        nutricao: 'encaminhado_nutricao',
    }

    const updated = updateLead(leadId, {
        status: statusMap[destination] || 'encaminhado_fornecedor',
        triageDestination: destination,
        triageProvider: providerName,
    })

    trackEvent(EVENT_NAMES.TRIAGE_COMPLETED, {
        leadId,
        destination,
    })

    if (destination === 'fornecedor' && providerName) {
        trackEvent(EVENT_NAMES.LEAD_ROUTED_TO_PROVIDER, {
            leadId,
            providerName,
        })
        sendProviderRouting(updated, providerName)
    }

    return updated
}

export function scheduleMeeting(leadId, meetingData) {
    const lead = getLeadById(leadId)
    if (!lead) return null

    const meeting = {
        id: Date.now(),
        data: meetingData.data,
        horario: meetingData.horario,
        participantes: meetingData.participantes || [],
        status: 'agendado',
        createdAt: new Date().toISOString(),
    }

    const updated = updateLead(leadId, {
        status: 'agendado',
        reunioes: [...lead.reunioes, meeting],
    })

    trackEvent(EVENT_NAMES.MEETING_SCHEDULED, {
        leadId,
        meetingDate: meeting.data,
    })

    return updated
}

export function completeMeeting(leadId, resumo, proximosPassos) {
    const lead = getLeadById(leadId)
    if (!lead) return null

    const lastMeeting = lead.reunioes[lead.reunioes.length - 1]
    if (lastMeeting) {
        lastMeeting.status = 'realizada'
        lastMeeting.resumo = resumo
        lastMeeting.proximosPassos = proximosPassos
    }

    const updated = updateLead(leadId, {
        status: 'reuniao_realizada',
        reunioes: [...lead.reunioes],
    })

    trackEvent(EVENT_NAMES.MEETING_COMPLETED, {
        leadId,
        resumo,
    })

    return updated
}

export function createProposal(leadId, proposalData) {
    const lead = getLeadById(leadId)
    if (!lead) return null

    const proposal = {
        id: Date.now(),
        valor: proposalData.valor,
        descricao: proposalData.descricao,
        fornecedor: proposalData.fornecedor,
        status: 'enviada',
        createdAt: new Date().toISOString(),
    }

    const updated = updateLead(leadId, {
        status: 'proposta_enviada',
        propostas: [...lead.propostas, proposal],
    })

    trackEvent(EVENT_NAMES.PROPOSAL_CREATED, {
        leadId,
        valor: proposal.valor,
    })

    return updated
}

export function closeDeal(leadId, dealData) {
    const updated = updateLead(leadId, {
        status: 'fechado',
        valorFechado: dealData.valor,
        fornecedorFinal: dealData.fornecedor,
        comissaoSingular: dealData.comissao,
        closedAt: new Date().toISOString(),
    })

    trackEvent(EVENT_NAMES.DEAL_CLOSED, {
        leadId,
        valor: dealData.valor,
        fornecedor: dealData.fornecedor,
        comissao: dealData.comissao,
    })

    return updated
}

export function loseDeal(leadId, motivo) {
    const updated = updateLead(leadId, {
        status: 'perdido',
        motivoPerda: motivo,
        lostAt: new Date().toISOString(),
    })

    return updated
}

export function clearLeads() {
    localStorage.removeItem(STORAGE_KEY)
}
