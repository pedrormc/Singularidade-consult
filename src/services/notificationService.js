// =============================================
// Notification Service — Singular Marketplace
// Simulated WhatsApp + Email notifications
// Logs to localStorage for backoffice visibility
// =============================================

const STORAGE_KEY = 'sg_notifications'

function getStoredNotifications() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

function saveNotification(notification) {
    const notifications = getStoredNotifications()
    notifications.push(notification)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications))
    console.log(`[SG Notification] ${notification.channel}:`, notification.message)
}

export function sendLeadConfirmation(lead) {
    // WhatsApp simulation
    saveNotification({
        id: Date.now().toString(36) + '_wa',
        channel: 'whatsapp',
        leadId: lead.leadId,
        to: lead.telefone,
        message: `Olá! Recebemos sua solicitação na Singular sobre ${lead.dorSelecionada}. Um especialista entrará em contato para entender melhor sua necessidade e indicar o melhor caminho.`,
        sentAt: new Date().toISOString(),
    })

    // Email simulation
    saveNotification({
        id: Date.now().toString(36) + '_em',
        channel: 'email',
        leadId: lead.leadId,
        to: lead.email,
        subject: 'Recebemos sua solicitação — Singular',
        message: `Olá ${lead.nome},\n\nRecebemos sua solicitação sobre "${lead.dorSelecionada}".\n\nResumo do problema:\n${lead.descricaoProblema}\n\nPróximos passos:\n• Um especialista da Singular entrará em contato em até 24h\n• Vamos entender melhor sua necessidade\n• Indicaremos o melhor caminho para resolver seu problema\n\nEquipe Singular`,
        sentAt: new Date().toISOString(),
    })
}

export function sendProviderRouting(lead, providerName) {
    saveNotification({
        id: Date.now().toString(36) + '_rt',
        channel: 'whatsapp',
        leadId: lead.leadId,
        to: lead.telefone,
        message: `Pelo que entendemos, a melhor solução para sua necessidade é conversar com ${providerName}. Segue o link para escolher o melhor horário: [link de agendamento]`,
        sentAt: new Date().toISOString(),
    })
}

export function sendMeetingConfirmation(lead, meetingData) {
    saveNotification({
        id: Date.now().toString(36) + '_mt',
        channel: 'email',
        leadId: lead.leadId,
        to: lead.email,
        subject: 'Reunião agendada — Singular',
        message: `Olá ${lead.nome},\n\nSua reunião foi agendada para ${meetingData.data} às ${meetingData.horario}.\n\nEquipe Singular`,
        sentAt: new Date().toISOString(),
    })
}

export function getNotifications() {
    return getStoredNotifications()
}

export function getNotificationsByLead(leadId) {
    return getStoredNotifications().filter((n) => n.leadId === leadId)
}

export function clearNotifications() {
    localStorage.removeItem(STORAGE_KEY)
}
