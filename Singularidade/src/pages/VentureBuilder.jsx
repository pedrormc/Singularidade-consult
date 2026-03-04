import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import { useToast } from '../components/Toast'
import { phoneMask } from '../hooks/utils'
import './VentureBuilder.css'

export default function VentureBuilder() {
    useScrollRevealAll()
    const showToast = useToast()
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()
        setLoading(true)
        const form = e.target
        setTimeout(() => {
            showToast('Candidatura enviada! Retornaremos em até 3 dias úteis. 🚀')
            form.reset()
            setLoading(false)
        }, 800)
    }

    function handlePhoneMask(e) {
        e.target.value = phoneMask(e.target.value)
    }

    return (
        <>
            {/* PAGE HERO */}
            <section className="page-hero" style={{ paddingBottom: 0 }}>
                <div className="page-hero-bg" aria-hidden="true"></div>
                <div className="page-hero-glow" aria-hidden="true"></div>
                <div className="container" style={{ paddingBottom: '80px' }}>
                    <div className="breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="breadcrumb-sep">/</span>
                        <span className="breadcrumb-current">Venture Builder</span>
                    </div>
                    <div className="sg-tag" data-reveal>Incubadora de Negócios</div>
                    <h1 data-reveal data-reveal-delay="1">
                        Não somos investidores.<br />
                        <span style={{ color: 'var(--cobre)' }}>Somos sócios.</span>
                    </h1>
                    <p style={{ maxWidth: '620px', fontSize: '1.1rem' }} data-reveal data-reveal-delay="2">
                        A Singular seleciona negócios com potencial real e co-cria estrutura, governança e modelo de crescimento — atuando como sócio operacional, não como consultor externo.
                    </p>

                    <div className="vb-hero-metrics" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginTop: '3rem' }} data-reveal data-reveal-delay="3">
                        {[
                            { num: '12', label: 'Ventures ativas' },
                            { num: '3x', label: 'Crescimento médio em 12 meses' },
                            { num: 'R$8M+', label: 'Faturamento gerido no ecossistema' },
                            { num: '100%', label: 'Com plano de governança no 1º mês' },
                        ].map((m, i) => (
                            <div className="vb-hero-metric" key={i}>
                                <span className="vb-hero-metric-num">{m.num}</span>
                                <span className="vb-hero-metric-label">{m.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* O MODELO */}
            <section style={{ background: 'var(--cinza-escuro)', padding: '100px 0' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="vb-grid">
                        <div data-reveal>
                            <div className="sg-tag">O Modelo</div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Como a Singular<br /><span style={{ color: 'var(--cobre)' }}>seleciona e acelera</span></h2>
                            <p style={{ marginBottom: '2rem' }}>
                                Não aceitamos todo negócio. Buscamos empresários que estejam dispostos a abrir o jogo, receber feedback direto e executar com velocidade. O modelo só funciona com quem está pronto para agir.
                            </p>

                            <div className="process-timeline">
                                {[
                                    { label: 'Etapa 01', title: 'Candidatura e Triagem', desc: 'O empresário preenche o formulário. Avaliamos fit estratégico, potencial de mercado e abertura para mudança.' },
                                    { label: 'Etapa 02', title: 'Diagnóstico Profundo', desc: 'Imersão de 2 semanas nos bastidores do negócio: financeiro, operação, equipe e mercado. Sem filtro — a verdade na mesa.' },
                                    { label: 'Etapa 03', title: 'Estruturação da Governança', desc: 'Criamos o modelo societário, acordo de sócios, estrutura de cargos, processos e KPIs. A fundação que sustenta o crescimento.' },
                                    { label: 'Etapa 04', title: 'Execução e Aceleração', desc: 'Implantação das soluções do ecossistema: tecnologia, financeiro, marketing e RH. Acompanhamento semanal com metas claras.' },
                                    { label: 'Etapa 05', title: 'Revisão e Escala', desc: 'Avaliação trimestral dos resultados, ajuste de rota e expansão. Preparação para captação externa quando o negócio estiver maduro.' },
                                ].map((step, i) => (
                                    <div className="process-step" data-reveal data-reveal-delay={`${i + 1}`} key={i}>
                                        <div className="process-step-num">{i + 1}</div>
                                        <div className="process-step-label">{step.label}</div>
                                        <h4>{step.title}</h4>
                                        <p style={{ fontSize: '0.9rem' }}>{step.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Critérios de Seleção */}
                        <div data-reveal data-reveal-delay="2">
                            <div className="sg-tag" style={{ background: 'transparent', border: '1px solid var(--cobre)', color: 'var(--cobre)' }}>Critérios de Seleção</div>
                            <h3 style={{ color: 'var(--off-white)', marginBottom: '1rem', fontSize: '1.6rem' }}>O que buscamos em um negócio</h3>
                            <p style={{ marginBottom: '1.5rem', fontSize: '0.95rem' }}>Não temos interesse em reformar negócios quebrados. Queremos empresas com fundação real, que precisam de estrutura para escalar.</p>

                            <div className="criteria-grid">
                                {[
                                    { icon: '💡', label: 'Produto com mercado', desc: 'Vendas acontecendo, demanda comprovada — mesmo que sem escala ainda.' },
                                    { icon: '🏃', label: 'Empresário executivo', desc: 'Fundador disposto a executar, aprender e receber feedback duro.' },
                                    { icon: '🧮', label: 'Margem positiva', desc: 'O negócio precisa ter viabilidade econômica básica comprovada.' },
                                    { icon: '🔍', label: 'Transparência total', desc: 'Abertura completa para diagnóstico financeiro e operacional.' },
                                    { icon: '📐', label: 'Potencial de escala', desc: 'Modelo replicável ou com acesso a mercado maior do que o atual.' },
                                    { icon: '🤝', label: 'Alinhamento cultural', desc: 'Disposição para trabalhar com diretividade e orientação à ação.' },
                                ].map((c, i) => (
                                    <div className="criteria-item" key={i}>
                                        <span className="criteria-icon">{c.icon}</span>
                                        <p className="criteria-label">{c.label}</p>
                                        <p className="criteria-desc">{c.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* OS PILARES */}
            <section className="vb-section sg-pattern-bg" style={{ padding: '100px 0' }}>
                <div className="container">
                    <div className="section-header centered" data-reveal>
                        <div className="sg-tag">Os Pilares</div>
                        <h2>Como Atuamos<br /><span>no Dia a Dia</span></h2>
                        <p>Três princípios inegociáveis que guiam cada interação da Singular com as ventures do ecossistema.</p>
                    </div>

                    <div className="pillars-three" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', marginTop: '3rem' }}>
                        {[
                            { letter: 'D', icon: 'fa-bullseye', num: 'Pilar 01', title: 'Ser Diretivo', desc: 'Não existe espaço para eufemismos. Quando identificamos um problema, apontamos com clareza e exigimos correção imediata. Feedback suave não salva empresa — feedback honesto sim.', quote: '"Não somos terapeutas. Somos sócios que dizem a verdade."' },
                            { letter: 'P', icon: 'fa-handshake', num: 'Pilar 02', title: 'Estar Próximo', desc: 'Problema identificado é problema resolvido na hora, não no relatório do próximo mês. Atuamos em tempo real, dentro da operação, com acesso direto às decisões estratégicas.', quote: '"Gerentes num raio de 5km. Presença real, não reunião por vídeo."' },
                            { letter: 'A', icon: 'fa-bolt', num: 'Pilar 03', title: 'Orientado à Ação', desc: 'Toda intervenção é medida pelo impacto nas métricas financeiras. Não existe ação que não tenha dono, prazo e número. Execução é o produto final — não o plano.', quote: '"Planejamento sem execução é só papel. Nós fazemos acontecer."' },
                        ].map((p, i) => (
                            <div className="pillar-big" data-letter={p.letter} data-reveal data-reveal-delay={`${i + 1}`} key={i}>
                                <div style={{ width: '52px', height: '52px', background: 'var(--cobre)', borderRadius: 'var(--border-radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                                    <i className={`fas ${p.icon}`} style={{ color: 'var(--off-white)', fontSize: '1.25rem' }}></i>
                                </div>
                                <div className="pillar-num-big">{p.num}</div>
                                <h3>{p.title}</h3>
                                <p>{p.desc}</p>
                                <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid rgba(247,238,235,0.08)' }}>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--cobre)', fontStyle: 'italic' }}>{p.quote}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* DIFERENCIAL: NÃO É CONSULTORIA */}
            <section style={{ background: 'var(--off-white)', padding: '100px 0', color: 'var(--preto)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(230,78,16,0.04) 28px, rgba(230,78,16,0.04) 34px)' }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="section-header" data-reveal>
                        <div className="sg-tag sg-tag-outline">Diferencial Singular</div>
                        <h2 style={{ color: 'var(--preto)' }}>A diferença entre<br /><span style={{ color: 'var(--cobre)' }}>Consultoria e Venture Builder</span></h2>
                    </div>

                    <div className="compare-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginTop: '3rem' }}>
                        <div style={{ background: 'rgba(28,28,28,0.05)', borderRadius: 'var(--border-radius-lg)', padding: '2.5rem', border: '1px solid rgba(28,28,28,0.1)' }} data-reveal data-reveal-delay="1">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(28,28,28,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-times" style={{ color: 'rgba(28,28,28,0.4)' }}></i>
                                </div>
                                <h4 style={{ color: 'var(--preto)', fontSize: '1.1rem' }}>Consultoria Tradicional</h4>
                            </div>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['Entrega um relatório e vai embora', 'Cobra por hora, não por resultado', 'Apresenta teoria, não executa', 'Distante da operação real', 'Sem comprometimento com o resultado'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: 'rgba(28,28,28,0.6)', alignItems: 'flex-start' }}>
                                        <i className="fas fa-minus" style={{ color: 'rgba(28,28,28,0.3)', marginTop: '4px', flexShrink: 0 }}></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div style={{ background: 'var(--preto)', borderRadius: 'var(--border-radius-lg)', padding: '2.5rem', border: '2px solid var(--cobre)' }} data-reveal data-reveal-delay="2">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                                <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--cobre)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <i className="fas fa-check" style={{ color: 'var(--off-white)' }}></i>
                                </div>
                                <h4 style={{ color: 'var(--off-white)', fontSize: '1.1rem' }}>Singular Venture Builder</h4>
                            </div>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {['Permanece dentro da operação até o resultado', 'Skin in the game — nosso sucesso é o seu sucesso', 'Implementa as soluções do ecossistema', 'Atuação presencial num raio de 5km', 'Metas financeiras como critério de sucesso'].map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '10px', fontSize: '0.9rem', color: 'rgba(247,238,235,0.8)', alignItems: 'flex-start' }}>
                                        <i className="fas fa-check" style={{ color: 'var(--cobre)', marginTop: '4px', flexShrink: 0 }}></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* FORMULÁRIO SEJA UMA VENTURE */}
            <section className="vb-venture-form-section" id="seja-venture">
                <div className="container">
                    <div className="venture-form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
                        <div data-reveal>
                            <div className="sg-tag">Seja uma Venture</div>
                            <h2 style={{ marginBottom: '1.5rem' }}>Seu negócio está<br /><span style={{ color: 'var(--cobre)' }}>pronto para escalar?</span></h2>
                            <p style={{ marginBottom: '2rem', fontSize: '1.05rem' }}>
                                Preencha o formulário e nossa equipe avalia o encaixe do seu negócio no modelo Venture Builder. O processo é criterioso porque o compromisso é real.
                            </p>

                            <div style={{ background: 'var(--cinza-escuro)', borderRadius: 'var(--border-radius-lg)', padding: '2rem', border: '1px solid rgba(247,238,235,0.08)', marginBottom: '2rem' }}>
                                <h5 style={{ color: 'var(--off-white)', marginBottom: '1rem', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>O que acontece depois do formulário?</h5>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {[
                                        'Nossa equipe analisa o formulário em até 3 dias úteis.',
                                        'Se houver fit, agendamos uma reunião de alinhamento presencial.',
                                        'Iniciamos o diagnóstico profundo de 2 semanas na sua operação.',
                                    ].map((text, i) => (
                                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }} key={i}>
                                            <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(230,78,16,0.2)', border: '1px solid var(--cobre)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                                <span style={{ fontSize: '0.7rem', fontWeight: 900, color: 'var(--cobre)' }}>{i + 1}</span>
                                            </div>
                                            <p style={{ fontSize: '0.875rem', margin: 0 }}>{text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ padding: '1.5rem', background: 'rgba(230,78,16,0.08)', border: '1px solid rgba(230,78,16,0.2)', borderRadius: 'var(--border-radius-lg)' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--cobre)', fontWeight: 600, margin: 0 }}>
                                    <i className="fas fa-info-circle"></i> &nbsp;
                                    Aceitamos apenas negócios com faturamento ativo e disposição real para mudança. Se você busca investidor passivo, não somos o caminho certo.
                                </p>
                            </div>
                        </div>

                        <div data-reveal data-reveal-delay="2">
                            <div style={{ background: 'var(--cinza-escuro)', borderRadius: 'var(--border-radius-lg)', padding: '2.5rem', border: '1px solid rgba(247,238,235,0.08)' }}>
                                <h4 style={{ color: 'var(--off-white)', fontSize: '1.2rem', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Formulário Venture</h4>
                                <form id="venture-form" onSubmit={handleSubmit}>
                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label htmlFor="vf-nome">Nome Completo *</label>
                                            <input type="text" id="vf-nome" required placeholder="Seu nome" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vf-tel">WhatsApp *</label>
                                            <input type="tel" id="vf-tel" required placeholder="(11) 99999-9999" onInput={handlePhoneMask} />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vf-email">E-mail</label>
                                            <input type="email" id="vf-email" placeholder="seu@email.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vf-empresa">Empresa *</label>
                                            <input type="text" id="vf-empresa" required placeholder="Nome da empresa" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vf-setor">Setor *</label>
                                            <select id="vf-setor" required>
                                                <option value="">Selecione</option>
                                                <option>Varejo</option><option>Serviços</option><option>Tecnologia</option>
                                                <option>Saúde</option><option>Educação</option><option>Indústria</option><option>Outro</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vf-faturamento">Faturamento Mensal *</label>
                                            <select id="vf-faturamento" required>
                                                <option value="">Selecione a faixa</option>
                                                <option>Até R$ 50 mil</option>
                                                <option>R$ 50k – R$ 200k</option>
                                                <option>R$ 200k – R$ 1M</option>
                                                <option>Acima de R$ 1M</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vf-socios">Quantos sócios?</label>
                                            <select id="vf-socios">
                                                <option value="">Selecione</option>
                                                <option>Apenas eu</option>
                                                <option>2 sócios</option>
                                                <option>3+ sócios</option>
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="vf-tempo">Tempo de mercado</label>
                                            <select id="vf-tempo">
                                                <option value="">Selecione</option>
                                                <option>Menos de 1 ano</option>
                                                <option>1 a 3 anos</option>
                                                <option>3 a 7 anos</option>
                                                <option>Mais de 7 anos</option>
                                            </select>
                                        </div>
                                        <div className="form-group full-width">
                                            <label htmlFor="vf-desafio">Qual seu maior desafio atual? *</label>
                                            <textarea id="vf-desafio" required placeholder="Descreva honestamente o principal obstáculo que impede o crescimento do seu negócio..."></textarea>
                                        </div>
                                        <div className="form-group full-width">
                                            <label htmlFor="vf-objetivo">O que você espera da Singular?</label>
                                            <textarea id="vf-objetivo" placeholder="Qual o resultado concreto que você busca com a parceria?"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center', marginTop: '1.25rem' }} disabled={loading}>
                                        {loading ? <><i className="fas fa-spinner fa-spin"></i> Enviando candidatura...</> : <><i className="fas fa-paper-plane"></i> Enviar Candidatura</>}
                                    </button>
                                    <p style={{ fontSize: '0.75rem', textAlign: 'center', marginTop: '1rem', color: 'rgba(247,238,235,0.3)' }}>
                                        Respondemos em até 3 dias úteis. Dados tratados com sigilo total.
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="cta-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 data-reveal>Não está pronto para o<br /><em style={{ fontStyle: 'normal', color: 'var(--preto)' }}>Venture Builder?</em></h2>
                    <p data-reveal data-reveal-delay="1" style={{ color: 'rgba(247,238,235,0.85)' }}>Comece pela Triagem Gratuita do Consultório. É o passo certo antes de qualquer decisão maior.</p>
                    <Link to="/#triagem" className="btn btn-dark btn-lg" data-reveal data-reveal-delay="2">
                        <i className="fas fa-stethoscope"></i> Agendar Triagem Gratuita
                    </Link>
                </div>
            </div>
        </>
    )
}
