// =============================================
// Event Tracker — Singular Marketplace
// Central tracking for all 14 marketplace events
// Persists to localStorage for analytics
// =============================================

import { getSessionId } from './sessionManager'

const STORAGE_KEY = 'sg_events'

function getStoredEvents() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        return raw ? JSON.parse(raw) : []
    } catch {
        return []
    }
}

function saveEvents(events) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
}

/**
 * Track a marketplace event
 * @param {string} eventName - One of the 14 defined events
 * @param {object} payload - Event-specific data
 */
export function trackEvent(eventName, payload = {}) {
    const event = {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
        eventName,
        timestamp: new Date().toISOString(),
        sessionId: getSessionId(),
        payload,
    }

    const events = getStoredEvents()
    events.push(event)
    saveEvents(events)

    // Console log for dev visibility
    console.log(`[SG Event] ${eventName}`, payload)

    return event
}

/**
 * Get all tracked events
 */
export function getEvents() {
    return getStoredEvents()
}

/**
 * Get events filtered by event name
 */
export function getEventsByType(eventName) {
    return getStoredEvents().filter((e) => e.eventName === eventName)
}

/**
 * Get recent events (last N)
 */
export function getRecentEvents(count = 20) {
    const events = getStoredEvents()
    return events.slice(-count).reverse()
}

/**
 * Clear all events (for dev/testing)
 */
export function clearEvents() {
    localStorage.removeItem(STORAGE_KEY)
}

// All valid event names
export const EVENT_NAMES = {
    MARKETPLACE_VIEWED: 'marketplace_viewed',
    MARKETPLACE_SEARCH: 'marketplace_search',
    PROVIDER_PROFILE_VIEWED: 'provider_profile_viewed',
    ANALYSIS_REQUESTED_CLICK: 'analysis_requested_click',
    LEAD_FORM_SUBMITTED: 'lead_form_submitted',
    LEAD_CREATED: 'lead_created',
    CONTACT_ATTEMPTED: 'contact_attempted',
    LEAD_CONTACTED: 'lead_contacted',
    TRIAGE_COMPLETED: 'triage_completed',
    LEAD_ROUTED_TO_PROVIDER: 'lead_routed_to_provider',
    MEETING_SCHEDULED: 'meeting_scheduled',
    MEETING_COMPLETED: 'meeting_completed',
    PROPOSAL_CREATED: 'proposal_created',
    DEAL_CLOSED: 'deal_closed',
}
