// =============================================
// Session Manager — Singular Marketplace
// Manages anonymous sessions with UTM tracking
// =============================================

function generateUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0
        const v = c === 'x' ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

function captureUTMParams() {
    const params = new URLSearchParams(window.location.search)
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']
    const utm = {}
    utmKeys.forEach((key) => {
        const val = params.get(key)
        if (val) utm[key] = val
    })
    return utm
}

export function getSessionId() {
    let sessionId = sessionStorage.getItem('sg_session_id')
    if (!sessionId) {
        sessionId = generateUUID()
        sessionStorage.setItem('sg_session_id', sessionId)
    }
    return sessionId
}

export function getSession() {
    const sessionId = getSessionId()
    const existingRaw = sessionStorage.getItem('sg_session_data')
    if (existingRaw) {
        return JSON.parse(existingRaw)
    }

    const session = {
        sessionId,
        startedAt: new Date().toISOString(),
        referrer: document.referrer || 'direct',
        utm: captureUTMParams(),
        searchTerms: [],
        filtersApplied: [],
        providersViewed: [],
    }
    sessionStorage.setItem('sg_session_data', JSON.stringify(session))
    return session
}

export function updateSession(updates) {
    const session = getSession()
    const updated = { ...session, ...updates }

    if (updates.searchTerm && !session.searchTerms.includes(updates.searchTerm)) {
        updated.searchTerms = [...session.searchTerms, updates.searchTerm]
    }
    if (updates.filterApplied && !session.filtersApplied.includes(updates.filterApplied)) {
        updated.filtersApplied = [...session.filtersApplied, updates.filterApplied]
    }
    if (updates.providerViewed && !session.providersViewed.includes(updates.providerViewed)) {
        updated.providersViewed = [...session.providersViewed, updates.providerViewed]
    }

    sessionStorage.setItem('sg_session_data', JSON.stringify(updated))
    return updated
}

export function generateLeadId() {
    return 'lead_' + generateUUID()
}

export { generateUUID }
