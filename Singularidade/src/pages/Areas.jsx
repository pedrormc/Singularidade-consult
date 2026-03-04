import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import './Areas.css'

const AREAS = [
    {
        id: 'juridico',
        num: '01',
        icon: '⚖️',
        title: 'Jurídico',
        navIcon: 'fa-balance-scale',
        intro: 'Empresas quebram por dentro antes de quebrarem financeiramente. Conflitos societários, contratos mal estruturados e patrimônio exposto são riscos silenciosos que a Singular identifica e neutraliza antes que causem dano irreparável.',
        body: 'Nossa equipe jurídica atua de forma preventiva — não esperamos o problema explodir para agir. Estruturamos a governança societária, protegemos o patrimônio e garantimos que os relacionamentos comerciais estejam blindados.',
        cta: 'Falar com Especialista Jurídico',
        services: [
            { icon: 'fa-file-contract', name: 'Acordo de Sócios', desc: 'Estruturação completa das regras da sociedade: funções, tomada de decisão, saída de sócios e distribuição de lucros.' },
            { icon: 'fa-shield-alt', name: 'Proteção Patrimonial', desc: 'Separação legal do patrimônio pessoal do empresarial. Holding, planejamento sucessório e blindagem de ativos.' },
            { icon: 'fa-handshake', name: 'Contratos Empresariais', desc: 'Revisão e estruturação de contratos com clientes, fornecedores e prestadores de serviço. Sem cláusulas que te deixam exposto.' },
            { icon: 'fa-clipboard-check', name: 'Compliance e Governança', desc: 'Implantação de estrutura de governança corporativa adequada ao porte do negócio, com políticas internas e alçadas de decisão.' },
        ],
        layout: 'left',
    },
    {
        id: 'tecnologia',
        num: '02',
        icon: '💻',
        title: 'Tecnologia',
        navIcon: 'fa-microchip',
        intro: 'Tecnologia sem implementação é só ferramenta parada. A Singular não entrega um manual de uso — entrega a ferramenta funcionando dentro do seu processo, gerando resultado desde o primeiro dia.',
        body: 'Trabalhamos com IA generativa, automações de fluxo (n8n), infraestrutura em nuvem (AWS, Docker) e integrações entre sistemas. Não vendemos software — entregamos capacidade operacional.',
        cta: 'Falar com Especialista Tech',
        stats: [
            { num: '1.200+', label: 'Atendimentos automatizados/mês' },
            { num: '70%', label: 'Redução de tarefas manuais' },
        ],
        services: [
            { icon: 'fa-robot', name: 'Implementação de IA', desc: 'Agentes de IA para atendimento, triagem, análise de dados e automação de respostas contextuais.' },
            { icon: 'fa-sitemap', name: 'Automações n8n', desc: 'Integração de sistemas e automação de fluxos operacionais. Elimine trabalho manual repetitivo.' },
            { icon: 'fab fa-aws', name: 'Infraestrutura AWS / Docker', desc: 'Deploy de soluções em nuvem com segurança, escalabilidade e custo otimizado.' },
            { icon: 'fa-plug', name: 'Integração de Sistemas', desc: 'Conexão entre ERP, CRM, plataformas de e-commerce e ferramentas financeiras. Dados fluindo onde precisam.' },
        ],
        layout: 'right',
    },
    {
        id: 'financeiro',
        num: '03',
        icon: '📊',
        title: 'Financeiro',
        navIcon: 'fa-chart-pie',
        intro: '89% dos empresários nunca fizeram gestão de fluxo de caixa real. Tomam decisões de R$ 500 mil com base no saldo da conta. A Singular resolve isso na raiz, com clareza e ferramentas que o empresário realmente usa.',
        body: 'Não entregamos um Excel bonito que ninguém abre. Estruturamos processos financeiros que o próprio empresário consegue operar — com alertas, projeções e visibilidade real sobre o caixa.',
        cta: 'Falar com Especialista Financeiro',
        quote: '"72% dos empresários não sabem o custo real dos seus produtos. Estão precificando no escuro — e perdendo margem todo mês sem saber."',
        services: [
            { icon: 'fa-money-bill-wave', name: 'Gestão de Fluxo de Caixa', desc: 'Estruturação do controle diário de entrada e saída. Projeções de 30/60/90 dias. Nunca mais ser pego de surpresa.' },
            { icon: 'fa-tags', name: 'Precificação Estratégica', desc: 'Cálculo real de custo, margem e preço competitivo. Chega de vender por menos do que custa produzir.' },
            { icon: 'fa-chart-bar', name: 'DRE e Indicadores', desc: 'Demonstração de resultado simples e acionável. Saiba se seu negócio está lucrando de verdade.' },
            { icon: 'fa-hand-holding-usd', name: 'Recuperação de Crédito', desc: 'Estratégia e automações para recuperar inadimplência com inteligência, sem destruir o relacionamento com o cliente.' },
        ],
        layout: 'left',
    },
    {
        id: 'marketing',
        num: '04',
        icon: '📣',
        title: 'Marketing',
        navIcon: 'fa-bullhorn',
        intro: 'Marketing não é sobre curtidas. É sobre transformar desconhecidos em clientes pagantes com o menor custo possível. A Singular estrutura o marketing como máquina de aquisição — não como departamento de postagem.',
        body: 'Cada ação de marketing tem dono, prazo e métrica de resultado. Integramos posicionamento, conteúdo, tráfego pago e CRM para criar um sistema de geração de demanda que funciona 24h por dia.',
        cta: 'Falar com Especialista de Marketing',
        services: [
            { icon: 'fa-compass', name: 'Posicionamento de Marca', desc: 'Diagnóstico do posicionamento atual e construção de identidade de marca que gera diferenciação real no mercado.' },
            { icon: 'fa-ad', name: 'Tráfego Pago', desc: 'Campanhas Meta Ads e Google Ads com foco em CAC baixo e qualidade de lead. Resultado, não volume de cliques.' },
            { icon: 'fa-pen-nib', name: 'Conteúdo Estratégico', desc: 'Estratégia de conteúdo orgânico que constrói autoridade e gera demanda qualificada — não só seguidores.' },
            { icon: 'fa-chart-line', name: 'Métricas de Marketing', desc: 'CAC, LTV, ROAS e taxa de conversão por canal. Decisões de marketing baseadas em dados, não em intuição.' },
        ],
        layout: 'right',
    },
    {
        id: 'rh',
        num: '05',
        icon: '👥',
        title: 'Recursos Humanos',
        navIcon: 'fa-users',
        intro: 'Uma equipe errada é mais cara do que uma equipe cara. O custo de uma contratação equivocada vai muito além do salário — envolve tempo, retrabalho, cultura destruída e cliente perdido.',
        body: 'A Singular estrutura os processos de RH para que o empresário contrate certo, onboard rápido e retenha os talentos que realmente movem o negócio.',
        cta: 'Falar com Especialista de RH',
        services: [
            { icon: 'fa-user-plus', name: 'Recrutamento e Seleção', desc: 'Processo estruturado de atração e triagem com avaliação técnica e de fit cultural. Contrata uma vez — contrata certo.' },
            { icon: 'fa-door-open', name: 'Onboarding Estruturado', desc: 'Processo de integração que reduz o tempo até a primeira entrega de valor do novo colaborador.' },
            { icon: 'fa-star', name: 'Avaliação de Desempenho', desc: 'Modelo de avaliação simples e consistente que conecta performance individual aos resultados do negócio.' },
            { icon: 'fa-sitemap', name: 'Estrutura Organizacional', desc: 'Definição de cargos, funções e alçadas de decisão. Quem faz o quê fica claro para todo o time.' },
        ],
        layout: 'left',
    },
    {
        id: 'vendas',
        num: '06',
        icon: '📈',
        title: 'Vendas',
        navIcon: 'fa-trophy',
        intro: 'Vendas sem processo é sorte. E sorte não escala. A Singular estrutura o processo comercial do seu negócio para que vendas deixem de depender de uma pessoa carismática e passem a depender de um sistema replicável.',
        body: 'Trabalhamos com a estruturação do funil, CRM, treinamento do time e métricas de conversão. O resultado: previsibilidade de receita e crescimento controlado.',
        cta: 'Falar com Especialista de Vendas',
        stats: [
            { num: '7x', label: 'Mais barato reter que adquirir' },
            { num: '+40%', label: 'Conversão média com processo' },
        ],
        services: [
            { icon: 'fa-funnel-dollar', name: 'Processo Comercial', desc: 'Mapeamento e estruturação do funil de vendas do topo ao fechamento. Cada etapa com critério de saída claro.' },
            { icon: 'fa-graduation-cap', name: 'Treinamento de Equipe', desc: 'Capacitação do time comercial em técnicas de qualificação, apresentação e fechamento adaptadas ao produto.' },
            { icon: 'fa-chart-line', name: 'Previsão de Receita', desc: 'Implantação de pipeline com forecast confiável. Saber quanto vai vender no próximo mês deixa de ser adivinhação.' },
            { icon: 'fa-redo-alt', name: 'Retenção e Expansão', desc: 'Estratégias de upsell, cross-sell e LTV. Vender mais para quem já compra custa 7x menos do que adquirir novo cliente.' },
        ],
        layout: 'right',
    },
]

export default function Areas() {
    useScrollRevealAll()
    const [activeArea, setActiveArea] = useState('')

    useEffect(() => {
        function updateActiveArea() {
            const scrollY = window.scrollY + 200
            let current = ''
            AREAS.forEach(area => {
                const el = document.getElementById(area.id)
                if (el && el.offsetTop <= scrollY) {
                    current = area.id
                }
            })
            setActiveArea(current)
        }
        window.addEventListener('scroll', updateActiveArea, { passive: true })
        updateActiveArea()
        return () => window.removeEventListener('scroll', updateActiveArea)
    }, [])

    function scrollToArea(e, id) {
        e.preventDefault()
        const el = document.getElementById(id)
        if (el) {
            const offset = 180
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <>
            {/* PAGE HERO */}
            <section className="page-hero">
                <div className="page-hero-bg" aria-hidden="true"></div>
                <div className="page-hero-glow" aria-hidden="true"></div>
                <div className="container">
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="breadcrumb-sep">/</span>
                        <span className="breadcrumb-current">Áreas de Atuação</span>
                    </div>
                    <div className="sg-tag" data-reveal>Braços Técnicos</div>
                    <h1 data-reveal data-reveal-delay="1">
                        Especialistas para<br />
                        <span style={{ color: 'var(--cobre)' }}>cada frente crítica</span>
                    </h1>
                    <p data-reveal data-reveal-delay="2">
                        A Singular não tem generalistas. Cada área conta com profissionais focados em resolver o problema certo, do jeito certo — integrados ao diagnóstico do Consultório.
                    </p>
                </div>
            </section>

            {/* STICKY AREA NAV */}
            <div className="areas-nav">
                <div className="container">
                    <div className="areas-nav-inner">
                        {AREAS.map(area => (
                            <a
                                key={area.id}
                                href={`#${area.id}`}
                                className={`area-nav-btn${activeArea === area.id ? ' active' : ''}`}
                                onClick={(e) => scrollToArea(e, area.id)}
                            >
                                <i className={`fas ${area.navIcon}`}></i> {area.title === 'Recursos Humanos' ? 'RH' : area.title}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* AREA SECTIONS */}
            {AREAS.map((area, idx) => (
                <section key={area.id} id={area.id} className="area-section-anchor">
                    <div className="container">
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }} className="area-grid-two">
                            {area.layout === 'left' ? (
                                <>
                                    <div data-reveal>
                                        <div className="sg-tag">Área {area.num}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                            <div style={{ width: '64px', height: '64px', background: 'var(--cobre)', borderRadius: 'var(--border-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0 }}>{area.icon}</div>
                                            <h2 style={{ margin: 0 }}>{area.title}</h2>
                                        </div>
                                        <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>{area.intro}</p>
                                        <p style={{ marginBottom: '2rem' }}>{area.body}</p>
                                        {area.quote && (
                                            <div style={{ background: 'var(--cinza-escuro)', borderRadius: 'var(--border-radius-lg)', padding: '1.5rem', border: '1px solid rgba(247,238,235,0.08)', marginBottom: '2rem' }}>
                                                <p style={{ fontSize: '0.9rem', color: 'var(--cobre)', fontWeight: 600, marginBottom: '0.5rem' }}>
                                                    <i className="fas fa-quote-left"></i> Dado real:
                                                </p>
                                                <p style={{ fontSize: '0.95rem', fontStyle: 'italic' }}>{area.quote}</p>
                                            </div>
                                        )}
                                        <Link to="/#triagem" className="btn btn-primary">
                                            {area.cta} <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                    <div data-reveal data-reveal-delay="2">
                                        <div className="area-services-grid" style={{ gridTemplateColumns: '1fr' }}>
                                            {area.services.map((s, i) => (
                                                <div className="area-service-item" key={i}>
                                                    <div className="area-service-icon"><i className={`${s.icon.startsWith('fab') ? '' : 'fas '}${s.icon}`}></i></div>
                                                    <div>
                                                        <p className="area-service-name">{s.name}</p>
                                                        <p className="area-service-desc">{s.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div data-reveal data-reveal-delay="1">
                                        <div className="area-services-grid" style={{ gridTemplateColumns: '1fr' }}>
                                            {area.services.map((s, i) => (
                                                <div className="area-service-item" key={i}>
                                                    <div className="area-service-icon"><i className={`${s.icon.startsWith('fab') ? '' : 'fas '}${s.icon}`}></i></div>
                                                    <div>
                                                        <p className="area-service-name">{s.name}</p>
                                                        <p className="area-service-desc">{s.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <div data-reveal>
                                        <div className="sg-tag">Área {area.num}</div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                            <div style={{ width: '64px', height: '64px', background: 'var(--cobre)', borderRadius: 'var(--border-radius-lg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', flexShrink: 0 }}>{area.icon}</div>
                                            <h2 style={{ margin: 0 }}>{area.title}</h2>
                                        </div>
                                        <p style={{ fontSize: '1.05rem', marginBottom: '1.5rem' }}>{area.intro}</p>
                                        <p style={{ marginBottom: '2rem' }}>{area.body}</p>
                                        {area.stats && (
                                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                                                {area.stats.map((s, i) => (
                                                    <div key={i} style={{ padding: '1.5rem', background: 'rgba(230,78,16,0.08)', border: '1px solid rgba(230,78,16,0.2)', borderRadius: 'var(--border-radius-lg)', textAlign: 'center' }}>
                                                        <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 900, color: 'var(--cobre)', display: 'block', lineHeight: 1 }}>{s.num}</span>
                                                        <span style={{ fontSize: '0.75rem', color: 'rgba(247,238,235,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{s.label}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                        <Link to="/#triagem" className="btn btn-primary">
                                            {area.cta} <i className="fas fa-arrow-right"></i>
                                        </Link>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            ))}

            {/* CTA */}
            <div className="cta-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 data-reveal>Não sabe qual área<br /><em style={{ fontStyle: 'normal', color: 'var(--preto)' }}>priorizar agora?</em></h2>
                    <p data-reveal data-reveal-delay="1" style={{ color: 'rgba(247,238,235,0.85)' }}>A Triagem Gratuita identifica qual frente resolver primeiro para gerar o maior impacto no menor tempo.</p>
                    <Link to="/#triagem" className="btn btn-dark btn-lg" data-reveal data-reveal-delay="2">
                        <i className="fas fa-stethoscope"></i> Fazer Triagem Gratuita
                    </Link>
                </div>
            </div>
        </>
    )
}
