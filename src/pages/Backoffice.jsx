import { useState, useEffect, useCallback } from 'react'
import {
    getLeads,
    FUNNEL_STATUSES,
    incrementContactAttempt,
    registerContact,
    completeTriage,
    scheduleMeeting,
    completeMeeting,
    createProposal,
    closeDeal,
    loseDeal,
    updateLeadStatus,
} from '../services/leadService'
import { getRecentEvents, clearEvents } from '../services/eventTracker'
import { getNotifications, clearNotifications } from '../services/notificationService'
import { PROVIDERS } from '../data/mockData'
import './Backoffice.css'

export default function Backoffice() {
    const [leads, setLeads] = useState([])
    const [events, setEvents] = useState([])
    const [notifications, setNotifications] = useState([])
    const [selectedLead, setSelectedLead] = useState(null)
    const [activePanel, setActivePanel] = useState('pipeline') // pipeline | events | notifications
    const [actionModal, setActionModal] = useState(null) // { type, leadId }

    const refreshData = useCallback(() => {
        setLeads(getLeads())
        setEvents(getRecentEvents(50))
        setNotifications(getNotifications())
    }, [])

    useEffect(() => {
        refreshData()
        const interval = setInterval(refreshData, 3000)
        return () => clearInterval(interval)
    }, [refreshData])

    // Group leads by status for kanban
    const kanbanColumns = FUNNEL_STATUSES.filter(s =>
        !['encaminhado_consultorio', 'encaminhado_nutricao', 'perdido'].includes(s.key)
    )

    function getLeadsByStatus(status) {
        if (status === 'encaminhado_fornecedor') {
            return leads.filter(l =>
                l.status === 'encaminhado_fornecedor' ||
                l.status === 'encaminhado_consultorio' ||
                l.status === 'encaminhado_nutricao'
            )
        }
        return leads.filter(l => l.status === status)
    }

    // --- Action handlers ---
    function handleContactAttempt(leadId) {
        incrementContactAttempt(leadId)
        refreshData()
    }

    function handleRegisterContact(leadId, notas, diagnostico) {
        registerContact(leadId, notas, diagnostico)
        refreshData()
        setActionModal(null)
    }

    function handleTriage(leadId, destination, providerName) {
        completeTriage(leadId, destination, providerName)
        refreshData()
        setActionModal(null)
    }

    function handleScheduleMeeting(leadId, data, horario) {
        scheduleMeeting(leadId, { data, horario })
        refreshData()
        setActionModal(null)
    }

    function handleCompleteMeeting(leadId, resumo, proximosPassos) {
        completeMeeting(leadId, resumo, proximosPassos)
        refreshData()
        setActionModal(null)
    }

    function handleCreateProposal(leadId, valor, descricao, fornecedor) {
        createProposal(leadId, { valor, descricao, fornecedor })
        refreshData()
        setActionModal(null)
    }

    function handleCloseDeal(leadId, valor, fornecedor, comissao) {
        closeDeal(leadId, { valor, fornecedor, comissao })
        refreshData()
        setActionModal(null)
    }

    function handleLoseDeal(leadId, motivo) {
        loseDeal(leadId, motivo)
        refreshData()
        setActionModal(null)
    }

    // Available actions per status
    function getActionsForLead(lead) {
        const actions = []
        switch (lead.status) {
            case 'novo':
                actions.push({ label: 'Registrar tentativa de contato', action: () => handleContactAttempt(lead.leadId), icon: '📞' })
                actions.push({ label: 'Perder lead', action: () => setActionModal({ type: 'lose', leadId: lead.leadId }), icon: '❌' })
                break
            case 'contato_em_andamento':
                actions.push({ label: 'Nova tentativa', action: () => handleContactAttempt(lead.leadId), icon: '📞' })
                actions.push({ label: 'Registrar contato', action: () => setActionModal({ type: 'contact', leadId: lead.leadId }), icon: '✅' })
                actions.push({ label: 'Perder lead', action: () => setActionModal({ type: 'lose', leadId: lead.leadId }), icon: '❌' })
                break
            case 'triagem':
                actions.push({ label: 'Encaminhar fornecedor', action: () => setActionModal({ type: 'triage_fornecedor', leadId: lead.leadId }), icon: '🏢' })
                actions.push({ label: 'Encaminhar consultório', action: () => { completeTriage(lead.leadId, 'consultorio'); refreshData() }, icon: '🏥' })
                actions.push({ label: 'Encaminhar nutrição', action: () => { completeTriage(lead.leadId, 'nutricao'); refreshData() }, icon: '🥗' })
                actions.push({ label: 'Perder lead', action: () => setActionModal({ type: 'lose', leadId: lead.leadId }), icon: '❌' })
                break
            case 'encaminhado_fornecedor':
            case 'encaminhado_consultorio':
            case 'encaminhado_nutricao':
                actions.push({ label: 'Agendar reunião', action: () => setActionModal({ type: 'schedule', leadId: lead.leadId }), icon: '📅' })
                actions.push({ label: 'Perder lead', action: () => setActionModal({ type: 'lose', leadId: lead.leadId }), icon: '❌' })
                break
            case 'agendado':
                actions.push({ label: 'Registrar reunião realizada', action: () => setActionModal({ type: 'meeting_done', leadId: lead.leadId }), icon: '🤝' })
                actions.push({ label: 'Perder lead', action: () => setActionModal({ type: 'lose', leadId: lead.leadId }), icon: '❌' })
                break
            case 'reuniao_realizada':
                actions.push({ label: 'Criar proposta', action: () => setActionModal({ type: 'proposal', leadId: lead.leadId }), icon: '📄' })
                actions.push({ label: 'Perder lead', action: () => setActionModal({ type: 'lose', leadId: lead.leadId }), icon: '❌' })
                break
            case 'proposta_enviada':
                actions.push({ label: 'Fechar negócio', action: () => setActionModal({ type: 'close_deal', leadId: lead.leadId }), icon: '🎉' })
                actions.push({ label: 'Perder lead', action: () => setActionModal({ type: 'lose', leadId: lead.leadId }), icon: '❌' })
                break
            default:
                break
        }
        return actions
    }

    return (
        <div className="bo-page">
            {/* Header */}
            <div className="bo-header">
                <div className="container bo-header-inner">
                    <div>
                        <h1>Backoffice <span className="text-cobre">CRM</span></h1>
                        <p className="bo-subtitle">Pipeline de leads — Marketplace Singular</p>
                    </div>
                    <div className="bo-header-stats">
                        <div className="bo-stat">
                            <span className="bo-stat-num">{leads.length}</span>
                            <span className="bo-stat-label">Leads</span>
                        </div>
                        <div className="bo-stat">
                            <span className="bo-stat-num">{events.length}</span>
                            <span className="bo-stat-label">Eventos</span>
                        </div>
                        <div className="bo-stat">
                            <span className="bo-stat-num">{leads.filter(l => l.status === 'fechado').length}</span>
                            <span className="bo-stat-label">Fechados</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="container">
                <div className="bo-tabs">
                    <button className={`bo-tab ${activePanel === 'pipeline' ? 'active' : ''}`} onClick={() => setActivePanel('pipeline')}>
                        📊 Pipeline
                    </button>
                    <button className={`bo-tab ${activePanel === 'events' ? 'active' : ''}`} onClick={() => setActivePanel('events')}>
                        📡 Eventos ({events.length})
                    </button>
                    <button className={`bo-tab ${activePanel === 'notifications' ? 'active' : ''}`} onClick={() => setActivePanel('notifications')}>
                        💬 Notificações ({notifications.length})
                    </button>
                </div>
            </div>

            {/* Pipeline */}
            {activePanel === 'pipeline' && (
                <div className="bo-kanban-wrapper">
                    <div className="bo-kanban">
                        {kanbanColumns.map(col => {
                            const colLeads = getLeadsByStatus(col.key)
                            return (
                                <div key={col.key} className="bo-column">
                                    <div className="bo-column-header" style={{ borderTopColor: col.color }}>
                                        <span className="bo-column-dot" style={{ background: col.color }}></span>
                                        <span className="bo-column-title">{col.label}</span>
                                        <span className="bo-column-count">{colLeads.length}</span>
                                    </div>
                                    <div className="bo-column-body">
                                        {colLeads.map(lead => (
                                            <div
                                                key={lead.leadId}
                                                className={`bo-lead-card ${selectedLead === lead.leadId ? 'selected' : ''}`}
                                                onClick={() => setSelectedLead(selectedLead === lead.leadId ? null : lead.leadId)}
                                            >
                                                <div className="bo-lead-name">{lead.nome}</div>
                                                <div className="bo-lead-company">{lead.empresa}</div>
                                                <div className="bo-lead-pain">{lead.dorSelecionada}</div>

                                                {lead.tentativaContato > 0 && (
                                                    <div className="bo-lead-attempts">
                                                        📞 {lead.tentativaContato} tentativa{lead.tentativaContato > 1 ? 's' : ''}
                                                    </div>
                                                )}

                                                {selectedLead === lead.leadId && (
                                                    <div className="bo-lead-expanded">
                                                        <div className="bo-lead-detail">
                                                            <span>Email:</span> {lead.email}
                                                        </div>
                                                        <div className="bo-lead-detail">
                                                            <span>Tel:</span> {lead.telefone}
                                                        </div>
                                                        <div className="bo-lead-detail">
                                                            <span>Urgência:</span> {lead.urgencia}
                                                        </div>
                                                        <div className="bo-lead-detail">
                                                            <span>Orçamento:</span> {lead.orcamento}
                                                        </div>
                                                        {lead.descricaoProblema && (
                                                            <div className="bo-lead-detail bo-lead-desc">
                                                                <span>Problema:</span> {lead.descricaoProblema}
                                                            </div>
                                                        )}
                                                        {lead.notas.length > 0 && (
                                                            <div className="bo-lead-notes">
                                                                <span>Notas:</span>
                                                                {lead.notas.map((n, i) => (
                                                                    <div key={i} className="bo-note">{n.texto}</div>
                                                                ))}
                                                            </div>
                                                        )}

                                                        <div className="bo-lead-actions">
                                                            {getActionsForLead(lead).map((a, i) => (
                                                                <button
                                                                    key={i}
                                                                    className="bo-action-btn"
                                                                    onClick={(e) => { e.stopPropagation(); a.action() }}
                                                                >
                                                                    {a.icon} {a.label}
                                                                </button>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                <div className="bo-lead-time">
                                                    {new Date(lead.createdAt).toLocaleDateString('pt-BR')}
                                                </div>
                                            </div>
                                        ))}

                                        {colLeads.length === 0 && (
                                            <div className="bo-empty-col">Nenhum lead</div>
                                        )}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            {/* Events log */}
            {activePanel === 'events' && (
                <div className="container">
                    <div className="bo-events-panel">
                        <div className="bo-panel-header">
                            <h3>Log de Eventos</h3>
                            <button className="bo-clear-btn" onClick={() => { clearEvents(); refreshData() }}>Limpar</button>
                        </div>
                        {events.length === 0 ? (
                            <div className="bo-empty-panel">Nenhum evento registrado ainda. Navegue pelo Marketplace para gerar eventos.</div>
                        ) : (
                            <div className="bo-events-list">
                                {events.map(ev => (
                                    <div key={ev.id} className="bo-event-item">
                                        <div className="bo-event-name">{ev.eventName}</div>
                                        <div className="bo-event-time">{new Date(ev.timestamp).toLocaleString('pt-BR')}</div>
                                        <div className="bo-event-payload">
                                            {Object.entries(ev.payload || {}).map(([k, v]) => (
                                                <span key={k} className="bo-event-tag">{k}: {String(v)}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Notifications log */}
            {activePanel === 'notifications' && (
                <div className="container">
                    <div className="bo-events-panel">
                        <div className="bo-panel-header">
                            <h3>Notificações Enviadas</h3>
                            <button className="bo-clear-btn" onClick={() => { clearNotifications(); refreshData() }}>Limpar</button>
                        </div>
                        {notifications.length === 0 ? (
                            <div className="bo-empty-panel">Nenhuma notificação enviada ainda.</div>
                        ) : (
                            <div className="bo-events-list">
                                {notifications.map((notif, i) => (
                                    <div key={i} className="bo-event-item">
                                        <div className="bo-event-name">
                                            {notif.channel === 'whatsapp' ? '💬 WhatsApp' : '📧 Email'}
                                            {notif.subject && ` — ${notif.subject}`}
                                        </div>
                                        <div className="bo-event-time">
                                            Para: {notif.to} • {new Date(notif.sentAt).toLocaleString('pt-BR')}
                                        </div>
                                        <div className="bo-notif-message">{notif.message}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Action Modals */}
            {actionModal && (
                <ActionModal
                    type={actionModal.type}
                    leadId={actionModal.leadId}
                    onClose={() => setActionModal(null)}
                    onRegisterContact={handleRegisterContact}
                    onTriage={handleTriage}
                    onSchedule={handleScheduleMeeting}
                    onMeetingDone={handleCompleteMeeting}
                    onProposal={handleCreateProposal}
                    onCloseDeal={handleCloseDeal}
                    onLoseDeal={handleLoseDeal}
                />
            )}
        </div>
    )
}

// --- Action Modal Component ---
function ActionModal({ type, leadId, onClose, onRegisterContact, onTriage, onSchedule, onMeetingDone, onProposal, onCloseDeal, onLoseDeal }) {
    const [field1, setField1] = useState('')
    const [field2, setField2] = useState('')
    const [field3, setField3] = useState('')
    const [selectedProvider, setSelectedProvider] = useState(PROVIDERS[0]?.name || '')

    function handleSubmit(e) {
        e.preventDefault()
        switch (type) {
            case 'contact':
                onRegisterContact(leadId, field1, field2)
                break
            case 'triage_fornecedor':
                onTriage(leadId, 'fornecedor', selectedProvider)
                break
            case 'schedule':
                onSchedule(leadId, field1, field2)
                break
            case 'meeting_done':
                onMeetingDone(leadId, field1, field2)
                break
            case 'proposal':
                onProposal(leadId, field1, field2, field3)
                break
            case 'close_deal':
                onCloseDeal(leadId, field1, field2, field3)
                break
            case 'lose':
                onLoseDeal(leadId, field1)
                break
            default:
                break
        }
    }

    const configs = {
        contact: {
            title: 'Registrar Contato',
            fields: [
                { label: 'Notas da ligação', value: field1, onChange: setField1, type: 'textarea' },
                { label: 'Diagnóstico inicial', value: field2, onChange: setField2, type: 'text' },
            ],
        },
        triage_fornecedor: {
            title: 'Encaminhar para Fornecedor',
            fields: [
                { label: 'Fornecedor', value: selectedProvider, onChange: setSelectedProvider, type: 'select', options: PROVIDERS.map(p => p.name) },
            ],
        },
        schedule: {
            title: 'Agendar Reunião',
            fields: [
                { label: 'Data', value: field1, onChange: setField1, type: 'date' },
                { label: 'Horário', value: field2, onChange: setField2, type: 'time' },
            ],
        },
        meeting_done: {
            title: 'Registrar Reunião Realizada',
            fields: [
                { label: 'Resumo', value: field1, onChange: setField1, type: 'textarea' },
                { label: 'Próximos passos', value: field2, onChange: setField2, type: 'textarea' },
            ],
        },
        proposal: {
            title: 'Criar Proposta',
            fields: [
                { label: 'Valor (R$)', value: field1, onChange: setField1, type: 'text' },
                { label: 'Descrição', value: field2, onChange: setField2, type: 'textarea' },
                { label: 'Fornecedor', value: field3, onChange: setField3, type: 'text' },
            ],
        },
        close_deal: {
            title: 'Fechar Negócio 🎉',
            fields: [
                { label: 'Valor fechado (R$)', value: field1, onChange: setField1, type: 'text' },
                { label: 'Fornecedor', value: field2, onChange: setField2, type: 'text' },
                { label: 'Comissão Singular (R$)', value: field3, onChange: setField3, type: 'text' },
            ],
        },
        lose: {
            title: 'Registrar Perda',
            fields: [
                { label: 'Motivo da perda', value: field1, onChange: setField1, type: 'textarea' },
            ],
        },
    }

    const cfg = configs[type]
    if (!cfg) return null

    return (
        <div className="mp-modal-overlay" onClick={onClose}>
            <div className="mp-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '480px' }}>
                <button className="mp-modal-close" onClick={onClose}>✕</button>
                <h2 style={{ marginBottom: '1.5rem', fontSize: '1.3rem' }}>{cfg.title}</h2>
                <form onSubmit={handleSubmit} className="mp-form">
                    {cfg.fields.map((f, i) => (
                        <div key={i} className="mp-form-group">
                            <label>{f.label}</label>
                            {f.type === 'textarea' ? (
                                <textarea value={f.value} onChange={e => f.onChange(e.target.value)} rows="3" required />
                            ) : f.type === 'select' ? (
                                <select value={f.value} onChange={e => f.onChange(e.target.value)}>
                                    {f.options.map((opt, j) => (
                                        <option key={j} value={opt}>{opt}</option>
                                    ))}
                                </select>
                            ) : (
                                <input type={f.type} value={f.value} onChange={e => f.onChange(e.target.value)} required />
                            )}
                        </div>
                    ))}
                    <button type="submit" className="btn btn-primary mp-form-submit">Confirmar</button>
                </form>
            </div>
        </div>
    )
}
