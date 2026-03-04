import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollRevealAll } from './src/hooks/useScrollReveal'
import { useCounter } from './src/hooks/useCounter'
import { useToast } from './src/components/Toast'
import { phoneMask } from './src/hooks/utils'

function HeroStat({ target, suffix, label }) {
    const { ref, count } = useCounter(target)
    return (
        <div className="hero-stat-item">
            <span className="hero-stat-number" ref={ref}>{count}{suffix}</span>
            <span className="hero-stat-label">{label}</span>
        </div>
    )
}

export default function Home() {
    useScrollRevealAll()
    const showToast = useToast()

    // Triagem form
    const [triagemLoading, setTriagemLoading] = useState(false)
    // Venture quick form
    const [ventureLoading, setVentureLoading] = useState(false)

    function handleTriagemSubmit(e) {
        e.preventDefault()
        setTriagemLoading(true)
        const form = e.target
        setTimeout(() => {
            showToast('Triagem agendada! Entraremos em contato em até 24h. ✅')
            form.reset()
            setTriagemLoading(false)
        }, 800)
    }

    function handleVentureSubmit(e) {
        e.preventDefault()
        setVentureLoading(true)
        const form = e.target
        setTimeout(() => {
            showToast('Candidatura recebida! Avaliaremos em até 3 dias úteis. 🚀')
            form.reset()
            setVentureLoading(false)
        }, 800)
    }

    function handlePhoneMask(e) {
        e.target.value = phoneMask(e.target.value)
    }

    return (
        <>
            {/* HERO */}
            <section className="hero">
                <div className="hero-bg-pattern" aria-hidden="true">
                    <svg viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="diagonal-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
                                <rect width="22" height="120" x="0" fill="#E64E10" opacity="0.7" />
                                <rect width="6" height="20" x="30" y="0" fill="#E64E10" opacity="0.9" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diagonal-pattern)" />
                    </svg>
                </div>
                <div className="hero-glow" aria-hidden="true"></div>
                <div className="hero-glow-bottom" aria-hidden="true"></div>

                <div className="hero-content">
                    <div className="hero-eyebrow" data-reveal>
                        <div className="hero-eyebrow-line"></div>
                        <span className="hero-eyebrow-text">Centro de Apoio ao Empresário</span>
                    </div>

                    <h1 data-reveal data-reveal-delay="1">
                        O fim do<br />
                        <em>improviso.</em>
                    </h1>

                    <p className="hero-sub" data-reveal data-reveal-delay="2">
                        A Singular é o centro de apoio onde o caos vira previsibilidade. Deixamos de lado as teorias vazias para implementar processos, tecnologia e governança <strong>ombro a ombro com o empresário.</strong>
                    </p>

                    <div className="hero-actions" data-reveal data-reveal-delay="3">
                        <a href="#consultorio" className="btn btn-primary btn-lg">
                            <i className="fas fa-stethoscope"></i>
                            Conhecer o Consultório
                        </a>
                        <Link to="/ecossistema" className="btn btn-outline btn-lg">
                            <i className="fas fa-cubes"></i>
                            Explorar o Ecossistema
                        </Link>
                    </div>

                    <div className="hero-stats" data-reveal data-reveal-delay="4">
                        <HeroStat target={67} suffix="%" label="das empresas fecham por conflito entre sócios" />
                        <HeroStat target={34} suffix="%" label="quebram nos primeiros 2 anos" />
                        <div className="hero-stat-item">
                            <span className="hero-stat-number">5km</span>
                            <span className="hero-stat-label">de raio — atuação presencial e próxima</span>
                        </div>
                        <div className="hero-stat-item">
                            <span className="hero-stat-number">3x</span>
                            <span className="hero-stat-label">mais chances com governança estruturada</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEMA / DOR */}
            <section className="problem-section">
                <div className="container">
                    <div className="sg-tag sg-tag-outline" data-reveal>O Diagnóstico</div>

                    <div className="problem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div data-reveal data-reveal-delay="1">
                            <p className="problem-quote">
                                "Empreender sozinho não é<br />
                                <span>medalha de honra</span>,<br />
                                é risco desnecessário."
                            </p>
                            <p style={{ fontSize: '1.05rem', color: 'rgba(28,28,28,0.7)', marginBottom: '1.5rem' }}>
                                A Singular nasceu para ser o <strong>sócio estratégico que falta no seu negócio</strong>. Não consultoria de prateleira. Não teoria. Implementação real, ombro a ombro.
                            </p>
                            <a href="#consultorio" className="btn btn-primary">
                                Ver Como Atuamos <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>

                        <div data-reveal data-reveal-delay="2">
                            <div className="stat-cards">
                                <div className="stat-card">
                                    <span className="stat-card-number">2/3</span>
                                    <p className="stat-card-text">empresas fecham por desacordo entre sócios</p>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-card-number">34%</span>
                                    <p className="stat-card-text">das empresas quebram nos primeiros 2 anos</p>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-card-number">72%</span>
                                    <p className="stat-card-text">não têm clareza sobre o custo real dos produtos</p>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-card-number">89%</span>
                                    <p className="stat-card-text">dos empresários nunca fizeram gestão real de fluxo de caixa</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONSULTÓRIO EMPRESARIAL */}
            <section className="consultorio-section" id="consultorio">
                <div className="container">
                    <div className="section-header" data-reveal>
                        <div className="sg-tag">Consultório Empresarial</div>
                        <h2>A <span>Tríade</span> das Consultas</h2>
                        <p>Não existe diagnóstico sem presença. Por isso nossos gerentes atuam num raio de 5km, criando vínculos reais com o negócio do empresário.</p>
                    </div>

                    <div className="triage-card" data-reveal data-reveal-delay="1">
                        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
                            <div>
                                <div className="sg-tag" style={{ background: 'rgba(247,238,235,0.2)', color: 'var(--off-white)' }}>Ponto de Entrada</div>
                                <h3 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>Triagem — Custo Zero</h3>
                                <p style={{ maxWidth: '520px', fontSize: '1rem' }}>
                                    Antes de qualquer compromisso, fazemos um diagnóstico inicial completo do seu negócio. Entendemos a estrutura, os gargalos e o potencial. Sem enrolação. Sem venda de ilusão.
                                </p>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '1rem', flexShrink: 0 }}>
                                <div style={{ textAlign: 'right' }}>
                                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 900, color: 'rgba(247,238,235,0.9)', display: 'block', lineHeight: 1 }}>GRÁTIS</span>
                                    <span style={{ fontSize: '0.8rem', color: 'rgba(247,238,235,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sem custo inicial</span>
                                </div>
                                <a href="#triagem" className="btn btn-dark btn-lg">
                                    Agendar Triagem <i className="fas fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="consulta-cards" data-reveal data-reveal-delay="2">
                        <div className="consulta-card">
                            <span className="consulta-num">01</span>
                            <h4>Boleto Invisível e Desperdício</h4>
                            <p>Mapeamos todos os custos ocultos que corroem sua margem sem que você perceba. Cada centavo desperdiçado tem nome e endereço — e a gente encontra.</p>
                            <div className="proximity-badge">
                                <i className="fas fa-search-dollar"></i>
                                Diagnóstico Financeiro Profundo
                            </div>
                        </div>

                        <div className="consulta-card">
                            <span className="consulta-num">02</span>
                            <h4>Transparência Financeira e Preço Ideal</h4>
                            <p>Você sabe exatamente quanto custa produzir o que vende? Estruturamos sua precificação com margem real, não com achismo. Preço justo para você e competitivo para o mercado.</p>
                            <div className="proximity-badge">
                                <i className="fas fa-chart-bar"></i>
                                Precificação Estratégica
                            </div>
                        </div>

                        <div className="consulta-card">
                            <span className="consulta-num">03</span>
                            <h4>Plano de Crescimento e Investimento</h4>
                            <p>Com os dados em mãos, construímos um plano de ação com metas tangíveis, alocação de recursos e roteiro de crescimento. Não um PDF bonito — um compromisso executável.</p>
                            <div className="proximity-badge">
                                <i className="fas fa-rocket"></i>
                                Planejamento Executável
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '3rem', padding: '2.5rem', background: 'var(--cinza-escuro)', borderRadius: 'var(--border-radius-lg)', border: '1px solid rgba(247,238,235,0.08)', display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }} data-reveal data-reveal-delay="3">
                        <div style={{ width: '60px', height: '60px', background: 'var(--cobre)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                            <i className="fas fa-map-marker-alt" style={{ color: 'var(--off-white)', fontSize: '1.5rem' }}></i>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--off-white)', marginBottom: '0.4rem', fontSize: '1.2rem' }}>Gerentes capacitados num raio de 5km</h4>
                            <p style={{ fontSize: '0.95rem', margin: 0 }}>Presença física real. Não enviamos relatórios por e-mail. Estamos na sua empresa, entendendo o seu contexto, junto com você.</p>
                        </div>
                        <div style={{ marginLeft: 'auto', flexShrink: 0 }}>
                            <a href="#triagem" className="btn btn-primary">Encontrar Polo Próximo</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ECOSSISTEMA PREVIEW */}
            <section className="ecosystem-section">
                <div className="container">
                    <div className="section-header" data-reveal>
                        <div className="sg-tag">Ecossistema Singular</div>
                        <h2>Mais do que Falar,<br /><span>Entregamos Ferramentas</span></h2>
                        <p>O Marketplace da Singular conecta seu negócio às soluções técnicas que transformam processos em vantagem competitiva real.</p>
                    </div>

                    <h4 style={{ color: 'rgba(247,238,235,0.5)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }} data-reveal>Módulos de Especialistas</h4>
                    <div className="modules-grid" data-reveal data-reveal-delay="1">
                        {[
                            { icon: '👥', label: 'RH' },
                            { icon: '💰', label: 'Financeiro' },
                            { icon: '📣', label: 'Marketing' },
                            { icon: '⚖️', label: 'Jurídico' },
                            { icon: '📈', label: 'Vendas' },
                        ].map((mod, i) => (
                            <div className="module-item" key={i}>
                                <span className="module-icon">{mod.icon}</span>
                                <span className="module-label">{mod.label}</span>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem' }} data-reveal>
                        <h4 style={{ color: 'rgba(247,238,235,0.5)', fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1.25rem' }}>Soluções em Destaque</h4>
                        <div className="solutions-grid">
                            {[
                                { icon: 'fa-robot', title: 'IA de Atendimento', desc: 'Automação inteligente com LLM treinado no contexto do seu negócio. Integração nativa com WhatsApp e CRM.', tag: 'Tecnologia' },
                                { icon: 'fa-chart-line', title: 'Dashboard de BI', desc: 'Painéis de inteligência de negócio com monitoramento em tempo real de KPIs e deals do HubSpot.', tag: 'Financeiro' },
                                { icon: 'fa-sitemap', title: 'Automações n8n', desc: 'Integração de fluxos entre CRM, ERP e comunicação via n8n. Elimine trabalho manual, ganhe escala.', tag: 'Tecnologia' },
                            ].map((sol, i) => (
                                <div className="solution-card" key={i}>
                                    <div className="solution-icon"><i className={`fas ${sol.icon}`}></i></div>
                                    <h4>{sol.title}</h4>
                                    <p>{sol.desc}</p>
                                    <div className="solution-card-footer">
                                        <span className="solution-area-tag">{sol.tag}</span>
                                        <Link to="/ecossistema" className="btn btn-primary btn-sm">Falar com Especialista</Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }} data-reveal>
                        <Link to="/ecossistema" className="btn btn-outline btn-lg">
                            Ver Todo o Ecossistema <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* VENTURE BUILDER PREVIEW */}
            <section className="vb-section sg-pattern-bg">
                <div className="container">
                    <div className="vb-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                        <div data-reveal>
                            <div className="sg-tag">Venture Builder</div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Incubamos Negócios.<br /><span style={{ color: 'var(--cobre)' }}>Aceleramos Crescimento.</span></h2>
                            <p style={{ marginBottom: '1.5rem' }}>
                                A Singular seleciona negócios com potencial e co-cria estrutura, governança e modelo de crescimento. Não somos investidores passivos — somos sócios operacionais.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                {[
                                    { icon: 'fa-bullseye', title: 'Ser Diretivo', desc: 'Correção imediata, sem eufemismos.' },
                                    { icon: 'fa-handshake', title: 'Estar Próximo', desc: 'Atuação em tempo real, não relatório mensal.' },
                                    { icon: 'fa-bolt', title: 'Orientado à Ação', desc: 'Impacto direto nas métricas financeiras.' },
                                ].map((pillar, i) => (
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }} key={i}>
                                        <div style={{ width: '32px', height: '32px', background: 'var(--cobre)', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                            <i className={`fas ${pillar.icon}`} style={{ color: 'var(--off-white)', fontSize: '0.75rem' }}></i>
                                        </div>
                                        <div>
                                            <strong style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.9rem', color: 'var(--off-white)' }}>{pillar.title}</strong>
                                            <p style={{ fontSize: '0.85rem', margin: 0 }}>{pillar.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <Link to="/venture-builder" className="btn btn-primary">Conhecer o Modelo <i className="fas fa-arrow-right"></i></Link>
                        </div>

                        <div data-reveal data-reveal-delay="2">
                            <div style={{ background: 'var(--cinza-escuro)', borderRadius: 'var(--border-radius-lg)', padding: '2.5rem', border: '1px solid rgba(247,238,235,0.08)' }}>
                                <div className="sg-tag">Seja uma Venture</div>
                                <h4 style={{ color: 'var(--off-white)', fontSize: '1.3rem', marginBottom: '1rem' }}>Seu negócio tem potencial para ir além?</h4>
                                <p style={{ fontSize: '0.9rem', marginBottom: '1.5rem' }}>Preencha o formulário e a equipe da Singular avalia se o seu negócio se encaixa no modelo de aceleração.</p>
                                <form id="venture-quick-form" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} onSubmit={handleVentureSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="v-nome">Seu nome</label>
                                        <input type="text" id="v-nome" placeholder="Nome completo" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="v-empresa">Empresa</label>
                                        <input type="text" id="v-empresa" placeholder="Nome da empresa" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="v-setor">Setor</label>
                                        <select id="v-setor">
                                            <option value="">Selecione o setor</option>
                                            <option>Varejo</option><option>Serviços</option><option>Tecnologia</option>
                                            <option>Saúde</option><option>Indústria</option><option>Outro</option>
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="v-faturamento">Faturamento mensal estimado</label>
                                        <select id="v-faturamento">
                                            <option value="">Selecione a faixa</option>
                                            <option>Até R$ 50 mil</option><option>R$ 50k – R$ 200k</option>
                                            <option>R$ 200k – R$ 1M</option><option>Acima de R$ 1M</option>
                                        </select>
                                    </div>
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={ventureLoading}>
                                        {ventureLoading ? <><i className="fas fa-spinner fa-spin"></i> Enviando...</> : <>Quero Ser uma Venture <i className="fas fa-arrow-right"></i></>}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ÁREAS PREVIEW */}
            <section className="areas-section">
                <div className="container">
                    <div className="section-header" data-reveal>
                        <div className="sg-tag sg-tag-outline">Braços Técnicos</div>
                        <h2>Áreas de <span style={{ color: 'var(--cobre)' }}>Atuação</span></h2>
                        <p>A Singular sustenta especialistas em cada frente crítica do negócio. Não generistas — especialistas com foco cirúrgico na sua dor.</p>
                    </div>

                    <div className="areas-grid">
                        {[
                            { icon: '⚖️', title: 'Jurídico', desc: 'Proteção real do patrimônio e das relações societárias.', items: ['Acordos de Sócios', 'Proteção Patrimonial', 'Contratos Empresariais', 'Compliance e Governança'] },
                            { icon: '💻', title: 'Tecnologia', desc: 'Implementação prática de IA e automações que geram resultado.', items: ['Implementação de IA', 'Automações n8n', 'Infraestrutura AWS/Docker', 'Integração de Sistemas'] },
                            { icon: '📊', title: 'Financeiro', desc: 'Clareza total sobre o dinheiro que entra e sai do seu negócio.', items: ['Gestão de Fluxo de Caixa', 'Alocação de Recursos', 'Precificação Estratégica', 'Controle de Custos'] },
                        ].map((area, i) => (
                            <div className="area-card" data-reveal data-reveal-delay={`${i + 1}`} key={i}>
                                <span className="area-icon">{area.icon}</span>
                                <h3>{area.title}</h3>
                                <p>{area.desc}</p>
                                <ul>
                                    {area.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '3rem' }} data-reveal>
                        <Link to="/areas" className="btn btn-dark btn-lg" style={{ borderColor: 'rgba(28,28,28,0.3)' }}>
                            Ver Todas as Áreas <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* TRIAGEM */}
            <section id="triagem" style={{ background: 'var(--preto)', padding: '100px 0' }}>
                <div className="container">
                    <div className="triagem-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                        <div data-reveal>
                            <div className="sg-tag">Primeiro Passo</div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Agende Sua<br /><span style={{ color: 'var(--cobre)' }}>Triagem Gratuita</span></h2>
                            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
                                Em menos de 60 minutos, um gerente capacitado da Singular faz um diagnóstico real do seu negócio. Sem venda disfarçada. Sem proposta genérica.
                            </p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                {[
                                    { num: '1', title: 'Preencha o formulário', desc: 'Dados básicos do seu negócio e o principal desafio atual.' },
                                    { num: '2', title: 'Confirme o horário', desc: 'Nossa equipe entra em contato em até 24h para confirmar.' },
                                    { num: '3', title: 'Receba o diagnóstico', desc: 'Um relatório real com os principais pontos de melhoria do seu negócio.' },
                                ].map((step, i) => (
                                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }} key={i}>
                                        <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--cobre)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                                            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '0.75rem', color: 'var(--off-white)' }}>{step.num}</span>
                                        </div>
                                        <div>
                                            <strong style={{ fontFamily: 'var(--font-display)', textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--off-white)', letterSpacing: '0.06em' }}>{step.title}</strong>
                                            <p style={{ fontSize: '0.875rem', margin: '0.25rem 0 0' }}>{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div data-reveal data-reveal-delay="2">
                            <div style={{ background: 'var(--cinza-escuro)', borderRadius: 'var(--border-radius-lg)', padding: '2.5rem', border: '1px solid rgba(247,238,235,0.08)' }}>
                                <h4 style={{ color: 'var(--off-white)', fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Formulário de Triagem</h4>
                                <form id="triagem-form" onSubmit={handleTriagemSubmit}>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label htmlFor="t-nome">Nome Completo *</label>
                                            <input type="text" id="t-nome" required placeholder="Seu nome" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="t-tel">WhatsApp *</label>
                                            <input type="tel" id="t-tel" required placeholder="(11) 99999-9999" onInput={handlePhoneMask} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="t-empresa">Empresa *</label>
                                            <input type="text" id="t-empresa" required placeholder="Nome da empresa" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="t-setor">Setor</label>
                                            <select id="t-setor">
                                                <option value="">Selecione</option>
                                                <option>Varejo</option><option>Serviços</option><option>Tecnologia</option>
                                                <option>Saúde</option><option>Educação</option><option>Indústria</option><option>Outro</option>
                                            </select>
                                        </div>
                                        <div className="form-group full-width">
                                            <label htmlFor="t-desafio">Principal Desafio Hoje</label>
                                            <textarea id="t-desafio" placeholder="Descreva brevemente o maior gargalo do seu negócio..."></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem' }} disabled={triagemLoading}>
                                        {triagemLoading ? <><i className="fas fa-spinner fa-spin"></i> Enviando...</> : <><i className="fas fa-calendar-check"></i> Agendar Minha Triagem Gratuita</>}
                                    </button>
                                    <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem', color: 'rgba(247,238,235,0.3)' }}>
                                        Sem spam. Seus dados são tratados com sigilo total.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA BANNER */}
            <div className="cta-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 data-reveal>"Negócios não quebram por falta de venda,<br />quebram por falta de <em style={{ fontStyle: 'normal', color: 'var(--preto)' }}>governança.</em>"</h2>
                    <p data-reveal data-reveal-delay="1" style={{ color: 'rgba(247,238,235,0.85)' }}>A Singular está pronta para ser o pilar de governança que seu negócio precisa.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }} data-reveal data-reveal-delay="2">
                        <a href="#triagem" className="btn btn-dark btn-lg"><i className="fas fa-calendar-check"></i> Agendar Triagem Gratuita</a>
                        <Link to="/ecossistema" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(247,238,235,0.4)', color: 'var(--off-white)' }}>Ver o Ecossistema</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
