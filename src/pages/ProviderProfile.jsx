import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { trackEvent, EVENT_NAMES } from '../services/eventTracker'
import { updateSession } from '../services/sessionManager'
import { PROVIDERS, PAIN_CATEGORIES } from '../data/mockData'
import LeadFormModal from '../components/LeadFormModal'
import './Marketplace.css'

export default function ProviderProfile() {
    const { slug } = useParams()
    const [showLeadForm, setShowLeadForm] = useState(false)
    const provider = PROVIDERS.find((p) => p.slug === slug)

    // Event 3 — provider_profile_viewed
    useEffect(() => {
        if (provider) {
            trackEvent(EVENT_NAMES.PROVIDER_PROFILE_VIEWED, {
                providerId: provider.id,
                providerName: provider.name,
            })
            updateSession({ providerViewed: provider.id })
        }
    }, [provider])

    if (!provider) {
        return (
            <div className="marketplace-page">
                <section className="mp-profile section-pad" style={{ paddingTop: '160px' }}>
                    <div className="container">
                        <div className="mp-empty">
                            <span className="mp-empty-icon">❌</span>
                            <h3>Fornecedor não encontrado</h3>
                            <p>O fornecedor que você procura não existe ou foi removido.</p>
                            <Link to="/marketplace" className="btn btn-primary" style={{ marginTop: '1.5rem' }}>
                                Voltar ao Marketplace
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

    function handleRequestAnalysis() {
        trackEvent(EVENT_NAMES.ANALYSIS_REQUESTED_CLICK, {
            providerId: provider.id,
            providerName: provider.name,
        })
        setShowLeadForm(true)
    }

    return (
        <div className="marketplace-page">
            <section className="mp-profile-hero">
                <div className="mp-hero-bg"></div>
                <div className="container mp-profile-hero-content">
                    <Link to="/marketplace" className="mp-back-link">
                        ← Voltar ao Marketplace
                    </Link>
                    <div className="mp-profile-header">
                        <div className="mp-profile-avatar">{provider.avatar}</div>
                        <div className="mp-profile-info">
                            <h1>{provider.name}</h1>
                            <span className="mp-profile-specialty">{provider.specialty}</span>
                            <div className="mp-profile-stats">
                                <span className="mp-card-rating">★ {provider.rating}</span>
                                <span className="mp-card-projects">{provider.projects} projetos realizados</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mp-profile-body section-pad">
                <div className="container">
                    <div className="mp-profile-grid">
                        <div className="mp-profile-main">
                            <div className="mp-profile-section">
                                <h2>Sobre</h2>
                                <p>{provider.fullDesc}</p>
                            </div>

                            <div className="mp-profile-section">
                                <h2>Serviços</h2>
                                <ul className="mp-services-list">
                                    {provider.services.map((service, i) => (
                                        <li key={i}>
                                            <span className="mp-service-check">✓</span>
                                            {service}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mp-profile-section">
                                <h2>Áreas de atuação</h2>
                                <div className="mp-card-tags" style={{ marginTop: '1rem' }}>
                                    {provider.pains.map((painId) => {
                                        const cat = PAIN_CATEGORIES.find((c) => c.id === painId)
                                        return cat ? (
                                            <span key={painId} className="mp-card-tag">
                                                {cat.icon} {cat.label}
                                            </span>
                                        ) : null
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="mp-profile-sidebar">
                            <div className="mp-profile-cta-card">
                                <h3>Interessado neste fornecedor?</h3>
                                <p>
                                    Solicite uma análise da Singular. Nossos especialistas vão avaliar sua necessidade e
                                    facilitar o contato.
                                </p>
                                <button
                                    className="btn btn-primary btn-lg"
                                    onClick={handleRequestAnalysis}
                                    id="btn-request-analysis-profile"
                                    style={{ width: '100%', justifyContent: 'center' }}
                                >
                                    Solicitar análise da Singular
                                </button>
                                <div className="mp-profile-trust">
                                    <span>🛡️ Fornecedor validado pela Singular</span>
                                    <span>⚡ Resposta em até 24h</span>
                                    <span>🎯 Matchmaking personalizado</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {showLeadForm && (
                <LeadFormModal
                    onClose={() => setShowLeadForm(false)}
                    prefill={{
                        providerId: provider.id,
                        providerName: provider.name,
                        dorSelecionada: PAIN_CATEGORIES.find(c => provider.pains.includes(c.id))?.label || '',
                    }}
                />
            )}
        </div>
    )
}
