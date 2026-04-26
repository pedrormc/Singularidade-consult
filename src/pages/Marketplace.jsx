import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { trackEvent, EVENT_NAMES } from '../services/eventTracker'
import { getSession, updateSession } from '../services/sessionManager'
import { PROVIDERS, PAIN_CATEGORIES } from '../data/mockData'
import LeadFormModal from '../components/LeadFormModal'
import './Marketplace.css'

export default function Marketplace() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeFilter, setActiveFilter] = useState('todos')
    const [showLeadForm, setShowLeadForm] = useState(false)
    const [filteredProviders, setFilteredProviders] = useState(PROVIDERS)

    // Event 1 — marketplace_viewed
    useEffect(() => {
        getSession()
        trackEvent(EVENT_NAMES.MARKETPLACE_VIEWED, {
            origem: document.referrer || 'direct',
            timestamp: new Date().toISOString(),
        })
    }, [])

    // Filter providers
    useEffect(() => {
        let result = PROVIDERS

        if (activeFilter !== 'todos') {
            result = result.filter((p) => p.pains.includes(activeFilter))
        }

        if (searchTerm.trim()) {
            const term = searchTerm.toLowerCase()
            result = result.filter(
                (p) =>
                    p.name.toLowerCase().includes(term) ||
                    p.specialty.toLowerCase().includes(term) ||
                    p.shortDesc.toLowerCase().includes(term) ||
                    p.pains.some((pain) => pain.includes(term))
            )
        }

        setFilteredProviders(result)
    }, [searchTerm, activeFilter])

    // Event 2 — marketplace_search
    function handleSearch(e) {
        const value = e.target.value
        setSearchTerm(value)

        if (value.trim().length > 2) {
            trackEvent(EVENT_NAMES.MARKETPLACE_SEARCH, {
                termo: value,
                resultados: filteredProviders.length,
            })
            updateSession({ searchTerm: value })
        }
    }

    function handleFilterClick(filterId) {
        setActiveFilter(filterId)
        trackEvent(EVENT_NAMES.MARKETPLACE_SEARCH, {
            filtro: filterId,
            tipo: 'filter_click',
        })
        updateSession({ filterApplied: filterId })
    }

    // Event 4 — analysis_requested_click
    function handleRequestAnalysis() {
        trackEvent(EVENT_NAMES.ANALYSIS_REQUESTED_CLICK, {
            searchTerm,
            activeFilter,
        })
        setShowLeadForm(true)
    }

    return (
        <div className="marketplace-page">
            {/* Hero */}
            <section className="mp-hero">
                <div className="mp-hero-bg"></div>
                <div className="container mp-hero-content">
                    <div className="mp-hero-eyebrow">
                        <span className="mp-hero-eyebrow-line"></span>
                        <span>Marketplace Singular</span>
                    </div>
                    <h1>
                        Encontre o <em>especialista</em> certo para sua dor
                    </h1>
                    <p className="mp-hero-sub">
                        Fornecedores validados pela Singular, prontos para resolver seus desafios de negócio.
                    </p>

                    <div className="mp-search-wrapper">
                        <div className="mp-search-icon">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <circle cx="11" cy="11" r="8" />
                                <path d="m21 21-4.35-4.35" />
                            </svg>
                        </div>
                        <input
                            type="text"
                            className="mp-search-input"
                            placeholder="Buscar por especialidade, dor ou fornecedor..."
                            value={searchTerm}
                            onChange={handleSearch}
                            id="marketplace-search"
                        />
                    </div>
                </div>
            </section>

            {/* Filters + Grid */}
            <section className="mp-content section-pad">
                <div className="container">
                    {/* Pain filters */}
                    <div className="mp-filters">
                        <button
                            className={`mp-filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
                            onClick={() => handleFilterClick('todos')}
                        >
                            Todos
                        </button>
                        {PAIN_CATEGORIES.map((cat) => (
                            <button
                                key={cat.id}
                                className={`mp-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                                onClick={() => handleFilterClick(cat.id)}
                            >
                                <i className={`fas ${cat.icon} mp-filter-icon`} aria-hidden="true"></i>
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Results count */}
                    <div className="mp-results-info">
                        <span className="mp-results-count">{filteredProviders.length}</span>
                        <span> fornecedor{filteredProviders.length !== 1 ? 'es' : ''} encontrado{filteredProviders.length !== 1 ? 's' : ''}</span>
                    </div>

                    {/* Provider grid */}
                    <div className="mp-grid">
                        {filteredProviders.map((provider) => (
                            <Link
                                to={`/marketplace/fornecedor/${provider.slug}`}
                                key={provider.id}
                                className="mp-card"
                                onClick={() => {
                                    trackEvent(EVENT_NAMES.PROVIDER_PROFILE_VIEWED, {
                                        providerId: provider.id,
                                        providerName: provider.name,
                                        searchTerm,
                                    })
                                    updateSession({ providerViewed: provider.id })
                                }}
                            >
                                <div className="mp-card-header">
                                    <div className="mp-card-avatar">
                                        <i className={`fas ${provider.avatar}`} aria-hidden="true"></i>
                                    </div>
                                    <div className="mp-card-meta">
                                        <h3>{provider.name}</h3>
                                        <span className="mp-card-specialty">{provider.specialty}</span>
                                    </div>
                                </div>

                                <p className="mp-card-desc">{provider.shortDesc}</p>

                                <div className="mp-card-tags">
                                    {provider.pains.map((painId) => {
                                        const cat = PAIN_CATEGORIES.find((c) => c.id === painId)
                                        return cat ? (
                                            <span key={painId} className="mp-card-tag">
                                                <i className={`fas ${cat.icon}`} aria-hidden="true"></i> {cat.label}
                                            </span>
                                        ) : null
                                    })}
                                </div>

                                <div className="mp-card-footer">
                                    <div className="mp-card-stats">
                                        <span className="mp-card-rating">★ {provider.rating}</span>
                                        <span className="mp-card-projects">{provider.projects} projetos</span>
                                    </div>
                                    <span className="mp-card-arrow">→</span>
                                </div>
                            </Link>
                        ))}
                    </div>

                    {filteredProviders.length === 0 && (
                        <div className="mp-empty">
                            <i className="fas fa-magnifying-glass mp-empty-icon" aria-hidden="true"></i>
                            <h3>Nenhum fornecedor encontrado</h3>
                            <p>Tente ajustar seus filtros ou termos de busca.</p>
                        </div>
                    )}

                    {/* CTA */}
                    <div className="mp-cta-section">
                        <div className="mp-cta-card">
                            <div className="mp-cta-content">
                                <h3>Não encontrou o que procura?</h3>
                                <p>Solicite uma análise da Singular. Nossos especialistas vão entender sua necessidade e indicar o melhor caminho.</p>
                            </div>
                            <button
                                className="btn btn-primary btn-lg"
                                onClick={handleRequestAnalysis}
                                id="btn-request-analysis"
                            >
                                Solicitar análise da Singular
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Lead Form Modal */}
            {showLeadForm && (
                <LeadFormModal
                    onClose={() => setShowLeadForm(false)}
                    prefill={{
                        dorSelecionada: activeFilter !== 'todos' ? PAIN_CATEGORIES.find(c => c.id === activeFilter)?.label : '',
                        termoBuscado: searchTerm,
                    }}
                />
            )}
        </div>
    )
}
