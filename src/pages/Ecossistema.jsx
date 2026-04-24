import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import SingularSingularity from '../components/SingularSingularity'
import SingularityBetaTest3d from '../components/SingularityBetaTest3d'
import './Ecossistema.css'

const SOLUTIONS = [
    {
        id: 'ia',
        categories: ['vender', 'automatizar'],
        icon: 'fa-robot',
        badge: 'Tecnologia',
        title: 'IA de Atendimento',
        desc: 'Automação inteligente de atendimento ao cliente com LLM treinado no contexto do seu negócio. Integração nativa com WhatsApp, Instagram e CRM.',
        features: ['Respostas 24/7 com precisão contextual', 'Integração WhatsApp Business API', 'Treinamento com dados do seu negócio', 'Escalada inteligente para humano'],
        areaTag: 'IA & Automação',
    },
    {
        id: 'bi',
        categories: ['financeiro', 'vender'],
        icon: 'fa-chart-line',
        badge: 'Business Intelligence',
        title: 'Dashboard de BI',
        desc: 'Painéis de inteligência de negócio com monitoramento em tempo real de KPIs críticos, deals do HubSpot e indicadores financeiros.',
        features: ['KPIs de vendas e marketing em tempo real', 'Monitoramento de deals HubSpot', 'Alertas automáticos de metas', 'Relatórios executivos automatizados'],
        areaTag: 'Financeiro & Vendas',
    },
    {
        id: 'n8n',
        categories: ['automatizar'],
        icon: 'fa-sitemap',
        badge: 'Automação',
        title: 'Automações n8n',
        desc: 'Integração e automação de fluxos entre CRM, ERP, financeiro e comunicação usando n8n. Elimine trabalho manual e ganhe escala sem contratar.',
        features: ['Integração multi-plataforma (500+ apps)', 'Fluxos de aprovação automáticos', 'Notificações inteligentes por canal', 'Deploy em infraestrutura própria'],
        areaTag: 'Tecnologia',
    },
    {
        id: 'crm',
        categories: ['vender', 'automatizar'],
        icon: 'fa-funnel-dollar',
        badge: 'CRM & Vendas',
        title: 'CRM HubSpot',
        desc: 'Implementação e configuração completa do HubSpot adaptada ao processo de vendas do seu negócio. Pipeline organizado, previsão de receita real.',
        features: ['Pipeline personalizado para seu processo', 'Automações de follow-up e nutrição', 'Integração com canais de atendimento', 'Treinamento da equipe comercial'],
        areaTag: 'Vendas',
    },
    {
        id: 'credito',
        categories: ['financeiro'],
        icon: 'fa-hand-holding-usd',
        badge: 'Financeiro',
        title: 'Recuperação de Crédito',
        desc: 'Estratégia estruturada de cobrança e recuperação de inadimplência com automações de comunicação e negociação segmentada por perfil de devedor.',
        features: ['Mapeamento da carteira de devedores', 'Régua de cobrança automatizada', 'Segmentação por perfil e ticket', 'Indicadores de recuperação em tempo real'],
        areaTag: 'Financeiro',
    },
    {
        id: 'caixa',
        categories: ['financeiro'],
        icon: 'fa-money-bill-wave',
        badge: 'Gestão Financeira',
        title: 'Gestão de Fluxo de Caixa',
        desc: 'Estruturação completa do controle financeiro, com projeções de caixa, DRE simplificada e visibilidade sobre saúde financeira do negócio.',
        features: ['Projeção de caixa 30/60/90 dias', 'DRE simplificada automatizada', 'Alertas de saldo crítico', 'Separação pessoal x empresarial'],
        areaTag: 'Financeiro',
    },
    {
        id: 'socios',
        categories: ['juridico'],
        icon: 'fa-file-contract',
        badge: 'Jurídico',
        title: 'Acordo de Sócios',
        desc: 'Estruturação do acordo societário que previne conflitos e garante continuidade do negócio independente de crises entre sócios.',
        features: ['Mapeamento de funções e responsabilidades', 'Cláusulas de saída e sucessão', 'Resolução de conflitos societários', 'Proteção patrimonial pessoal'],
        areaTag: 'Jurídico',
    },
    {
        id: 'rh',
        categories: ['rh'],
        icon: 'fa-user-plus',
        badge: 'Recursos Humanos',
        title: 'Recrutamento e Seleção',
        desc: 'Processo estruturado de atração e seleção de talentos alinhados à cultura e às metas do negócio. Menos tempo, mais assertividade.',
        features: ['Mapeamento do perfil ideal', 'Triagem com IA comportamental', 'Integração (onboarding) estruturado', 'Avaliação de fit cultural'],
        areaTag: 'RH',
    },
    {
        id: 'marketing',
        categories: ['vender'],
        icon: 'fa-bullhorn',
        badge: 'Marketing',
        title: 'Estratégia de Marketing',
        desc: 'Posicionamento de marca e estratégia de aquisição de clientes com métricas reais de retorno. Sem ação por achismo — tudo orientado a dados.',
        features: ['Diagnóstico de posicionamento atual', 'Estratégia de canais e conteúdo', 'Campanhas de tráfego pago (Meta, Google)', 'Mensuração de CAC e LTV'],
        areaTag: 'Marketing',
    },
]

export default function Ecossistema() {
    useScrollRevealAll()
    const [activeFilter, setActiveFilter] = useState('all')
    const [filtersOpen, setFiltersOpen] = useState(false)

    const filteredSolutions = activeFilter === 'all'
        ? SOLUTIONS
        : SOLUTIONS.filter(s => s.categories.includes(activeFilter))

    const filters = [
        { key: 'all', icon: 'fa-th', label: 'Todas as Soluções' },
        { key: 'vender', icon: 'fa-chart-line', label: 'Quero Vender Mais' },
        { key: 'automatizar', icon: 'fa-cogs', label: 'Quero Automatizar' },
        { key: 'financeiro', icon: 'fa-dollar-sign', label: 'Quero Organizar Financeiro' },
        { key: 'juridico', icon: 'fa-balance-scale', label: 'Quero Proteger o Negócio' },
        { key: 'rh', icon: 'fa-users', label: 'Quero Estruturar o RH' },
    ]

    const activeFilterMeta = filters.find(f => f.key === activeFilter) || filters[0]

    return (
        <>
            {/* PAGE HERO */}
            <section className="page-hero eco-hero-shader">
                <SingularityBetaTest3d
                    speed={0.7}
                    intensity={1.0}
                    size={3.50}
                    waveStrength={7.0}
                    colorShift={1.0}
                    style={{
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0,
                        
                    }}

                />
                <div className="container" style={{ position: 'relative', zIndex: 20 }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="breadcrumb-sep">/</span>
                        <span className="breadcrumb-current">Ecossistema</span>
                    </div>
                    <span className="eco-hero-label" data-reveal>
                        <i className="fas fa-cubes"></i>
                        Marketplace de Soluções
                    </span>
                    <h1 data-reveal data-reveal-delay="1">O <span style={{ color: 'var(--cobre)' }}>Ecossistema</span><br />Singular</h1>
                    <p data-reveal data-reveal-delay="2">
                        Ferramentas, tecnologia e especialistas prontos para resolver o problema certo, na hora certa. Filtre pelo que você precisa agora.
                    </p>
                </div>
            </section>

            {/* STICKY FILTERS */}
            <div className="filter-section">
                <div className="container">
                    <button
                        type="button"
                        className="filters-toggle"
                        aria-expanded={filtersOpen}
                        aria-controls="solution-filters-list"
                        onClick={() => setFiltersOpen(o => !o)}
                    >
                        <span className="filters-toggle-label">
                            <i className={`fas ${activeFilterMeta.icon}`}></i>
                            {activeFilterMeta.label}
                        </span>
                        <i className={`fas fa-chevron-${filtersOpen ? 'up' : 'down'} filters-toggle-chevron`}></i>
                    </button>
                    <div
                        id="solution-filters-list"
                        className={`solution-filters${filtersOpen ? ' is-open' : ''}`}
                    >
                        {filters.map(f => (
                            <button
                                key={f.key}
                                className={`filter-btn${activeFilter === f.key ? ' active' : ''}`}
                                onClick={() => {
                                    setActiveFilter(f.key)
                                    setFiltersOpen(false)
                                }}
                            >
                                <i className={`fas ${f.icon}`}></i> {f.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* SOLUTIONS GRID */}
            <section className="solutions-main">
                <div className="container">
                    <div style={{ marginBottom: '1.5rem', fontSize: '0.85rem', color: 'rgba(247,238,235,0.4)', fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                        {filteredSolutions.length} solução{filteredSolutions.length !== 1 ? 'ões' : ''} encontrada{filteredSolutions.length !== 1 ? 's' : ''}
                    </div>
                    <div className="solutions-grid">
                        {filteredSolutions.map(sol => (
                            <div className="solution-card-full" key={sol.id}>
                                <div className="solution-card-header">
                                    <div className="solution-icon" style={{ width: '52px', height: '52px', flexShrink: 0 }}>
                                        <i className={`fas ${sol.icon}`}></i>
                                    </div>
                                    <div>
                                        <span className="solution-badge">{sol.badge}</span>
                                        <h4 style={{ color: 'var(--off-white)', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>{sol.title}</h4>
                                    </div>
                                </div>
                                <div className="solution-card-body">
                                    <p style={{ fontSize: '0.9rem' }}>{sol.desc}</p>
                                    <div className="solution-features">
                                        {sol.features.map((feat, i) => (
                                            <div className="solution-feature" key={i}><i className="fas fa-check"></i> {feat}</div>
                                        ))}
                                    </div>
                                    <div className="solution-cta">
                                        <span className="solution-area-tag">{sol.areaTag}</span>
                                        <Link to="/#triagem" className="btn btn-primary btn-sm">Falar com Especialista</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredSolutions.length === 0 && (
                        <div className="eco-not-found">
                            <i className="fas fa-search"></i>
                            <p>Nenhuma solução encontrada para este filtro.</p>
                            <button className="btn btn-outline" onClick={() => setActiveFilter('all')} style={{ marginTop: '1rem' }}>Ver Todas as Soluções</button>
                        </div>
                    )}
                </div>
            </section>

            {/* PROVA SOCIAL */}
            <section className="proof-section">
                <div className="container">
                    <div className="section-header centered" data-reveal>
                        <div className="sg-tag sg-tag-outline">Prova Social</div>
                        <h2>O que dizem os <span style={{ color: 'var(--cobre)' }}>empresários</span> que já usam</h2>
                    </div>

                    <div className="testimonials-row">
                        {[
                            { text: '"Depois de implementar o Dashboard de BI com a Singular, passei a enxergar em tempo real o que estava drenando minha margem. Em 3 meses, reduzi 18% dos custos operacionais."', initials: 'RM', name: 'Ricardo Moura', role: 'CEO — Distribuidora Moura', delay: '1' },
                            { text: '"A IA de atendimento respondeu mais de 1.200 conversas no primeiro mês sem precisar de uma pessoa. Minha equipe ficou focada no que realmente importa: fechar contratos."', initials: 'CS', name: 'Camila Souza', role: 'Fundadora — CS Imobiliária', delay: '2' },
                            { text: '"O acordo de sócios que a Singular estruturou salvou a empresa quando tivemos um impasse grave. Estava tudo previsto no documento — a empresa continuou."', initials: 'LP', name: 'Leonardo Pires', role: 'Sócio — Tech & Build', delay: '3' },
                        ].map((t, i) => (
                            <div className="proof-testimonial" data-reveal data-reveal-delay={t.delay} key={i}>
                                <p className="testimonial-text" style={{ color: 'rgba(247,238,235,0.8)', marginTop: '2rem' }}>{t.text}</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{t.initials}</div>
                                    <div>
                                        <p className="author-name" style={{ color: 'var(--off-white)' }}>{t.name}</p>
                                        <p className="author-role">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="cta-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 data-reveal>Não sabe por onde <em style={{ fontStyle: 'normal', color: 'var(--preto)' }}>começar?</em></h2>
                    <p data-reveal data-reveal-delay="1" style={{ color: 'rgba(247,238,235,0.85)' }}>A Triagem Gratuita identifica qual solução do ecossistema resolve sua dor mais urgente.</p>
                    <Link to="/#triagem" className="btn btn-dark btn-lg" data-reveal data-reveal-delay="2">
                        <i className="fas fa-calendar-check"></i> Agendar Triagem Gratuita
                    </Link>
                </div>
            </div>
        </>
    )
}
