import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollRevealAll } from './src/hooks/useScrollReveal'
import { useCounter } from './src/hooks/useCounter'
import { useToast } from './src/components/Toast'
import { phoneMask } from './src/hooks/utils'
import AnimatedShaderBackground from './src/components/AnimatedShaderBackground'

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
                <AnimatedShaderBackground />
                <div className="hero-glow" aria-hidden="true"></div>
                <div className="hero-glow-bottom" aria-hidden="true"></div>

                <div className="hero-content">
                    <div className="hero-eyebrow" data-reveal>
                        <div className="hero-eyebrow-line"></div>
                        <span className="hero-eyebrow-text">Consultório Empresarial</span>
                    </div>

                    <h1 data-reveal data-reveal-delay="1">
                        Clareza, estratégia<br />
                        e <em>estrutura.</em>
                    </h1>

                    <p className="hero-sub" data-reveal data-reveal-delay="2">
                        O Consultório Empresarial é onde o caos vira previsibilidade. Uma consulta presencial aplicada ao seu negócio — <strong>diagnóstico real, ombro a ombro com o empresário.</strong>
                    </p>

                    <div className="hero-actions" data-reveal data-reveal-delay="3">
                        <a href="#triagem" className="btn btn-primary btn-lg">
                            <i className="fas fa-stethoscope"></i>
                            Agendar Triagem Gratuita
                        </a>
                        <Link to="/ecossistema" className="btn btn-outline btn-lg">
                            <i className="fas fa-cubes"></i>
                            Explorar o Ecossistema
                        </Link>
                    </div>

                    <div className="hero-stats" data-reveal data-reveal-delay="4">
                        <HeroStat target={60} suffix="%" label="das empresas que quebram não planejaram suas finanças" />
                        <HeroStat target={90} suffix=" dias" label="para transformar caos em clareza e controle" />
                        <div className="hero-stat-item">
                            <span className="hero-stat-number">R$1.500</span>
                            <span className="hero-stat-label">/mês — investimento acessível + taxa de êxito</span>
                        </div>
                        <div className="hero-stat-item">
                            <span className="hero-stat-number">Brasil</span>
                            <span className="hero-stat-label">rede nacional de coworkings + hub ARCO em Brasília</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* PROBLEMA / DOR */}
            <section className="problem-section">
                <div className="container">
                    <div className="sg-tag sg-tag-outline" data-reveal>O Diagnóstico</div>

                    <div className="problem-grid">
                        <div data-reveal data-reveal-delay="1">
                            <p className="problem-quote">
                                "Negócios não quebram<br />
                                por falta de <span>venda</span>,<br />
                                quebram por falta de <span>governança.</span>"
                            </p>
                            <p className="problem-desc">
                                Muitas empresas vendem bastante mas perdem dinheiro por gestão ruim. Crescer não é só vender mais — é <strong>saber quanto sobra</strong>. O Consultório Empresarial é o check-up integral do seu negócio: diagnóstico visual, raio-X financeiro e plano de ação em 90 dias.
                            </p>
                            <Link to="/consultorio-empresarial" className="btn btn-primary">
                                Ver Como Atuamos <i className="fas fa-arrow-right"></i>
                            </Link>
                        </div>

                        <div data-reveal data-reveal-delay="2">
                            <div className="stat-cards">
                                <div className="stat-card">
                                    <span className="stat-card-number">60%</span>
                                    <p className="stat-card-text">das empresas que quebram não planejaram suas finanças</p>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-card-number">90%</span>
                                    <p className="stat-card-text">do tempo do dono é gasto apagando incêndios no operacional</p>
                                </div>
                                <div className="stat-card">
                                    <span className="stat-card-number">72%</span>
                                    <p className="stat-card-text">não têm clareza sobre o custo real dos seus produtos</p>
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
                        <h2>O Check-up do Seu <span>Negócio</span></h2>
                        <p>Assim como um médico primeiro faz exames antes de receitar remédio, nós primeiro diagnosticamos seu negócio. Sessões semanais presenciais no coworking mais próximo da sua empresa, com metodologia própria e transformação real em 90 dias.</p>
                    </div>

                    <div className="triage-card" data-reveal data-reveal-delay="1">
                        <div className="triage-card-inner">
                            <div>
                                <div className="sg-tag" style={{ background: 'rgba(247,238,235,0.2)', color: 'var(--off-white)' }}>Sessão 0 — Anamnese</div>
                                <h3 className="triage-card-title">Triagem Empresarial — Gratuita</h3>
                                <p className="triage-card-desc">
                                    Acolhemos o empresário, entendemos profundamente sua situação — números e percepção pessoal — e definimos se o consultório faz sentido agora. É o diagnóstico inicial 360° do seu negócio.
                                </p>
                            </div>
                            <div className="triage-card-cta">
                                <div className="triage-card-price">
                                    <span className="triage-price-value">GRÁTIS</span>
                                    <span className="triage-price-label">Sem custo inicial</span>
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
                            <h4>Raio-X Financeiro</h4>
                            <p>Dissecamos custos e margens do seu negócio. Calculamos CMV, CSV e a margem real de cada produto — para você saber quanto de fato sobra de cada venda. Muitos descobrem que o produto "carro-chefe" quase não dá lucro.</p>
                            <div className="proximity-badge">
                                <i className="fas fa-chart-pie"></i>
                                Sessões 1-2
                            </div>
                        </div>

                        <div className="consulta-card">
                            <span className="consulta-num">02</span>
                            <h4>Quick Wins de Caixa</h4>
                            <p>Executamos campanhas de venda rápidas, reativação de clientes VIP e ajustes de precificação. Ações práticas que geram entrada de dinheiro imediato e corrigem fatores que estão sangrando seu caixa.</p>
                            <div className="proximity-badge">
                                <i className="fas fa-bolt"></i>
                                Sessões 3-8
                            </div>
                        </div>

                        <div className="consulta-card">
                            <span className="consulta-num">03</span>
                            <h4>Gestão Integrada</h4>
                            <p>Montamos organograma, rituais de gestão e painel de indicadores. Definimos metas SMART e um plano de 90 dias para você crescer com método — não mais apagando incêndios.</p>
                            <div className="proximity-badge">
                                <i className="fas fa-map-marked-alt"></i>
                                Sessões 9-12
                            </div>
                        </div>
                    </div>

                    <div className="proximity-bar" data-reveal data-reveal-delay="3">
                        <div className="proximity-bar-icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="proximity-bar-text">
                            <h4>Nos coworkings do Brasil, encontre o consultório mais próximo de você</h4>
                            <p>Não enviamos relatórios por e-mail. Seu consultor te encontra no coworking parceiro mais próximo da sua empresa — com infraestrutura, café e privacidade pra uma sessão real. Hub ARCO em Brasília como flagship + rede nacional em expansão.</p>
                        </div>
                        <div className="proximity-bar-cta">
                            <a href="#triagem" className="btn btn-primary">Encontrar Coworking Próximo</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ECOSSISTEMA PREVIEW */}
            <section className="ecosystem-section">
                <div className="container">
                    <div className="section-header" data-reveal>
                        <div className="sg-tag">Ecossistema Singular</div>
                        <h2>Rede de Especialistas<br /><span>Credenciados</span></h2>
                        <p>Se surgir uma necessidade fora da alçada do consultor — contábil, jurídica, marketing, tecnologia — fazemos a ponte imediata com um parceiro de confiança. Você tem um time completo à disposição.</p>
                    </div>

                    <h4 className="section-subtitle" data-reveal>Módulos de Especialistas</h4>
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

                    <div className="solutions-block" data-reveal>
                        <h4 className="section-subtitle">Soluções em Destaque</h4>
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

                    <div className="section-cta-center" data-reveal>
                        <Link to="/ecossistema" className="btn btn-outline btn-lg">
                            Ver Todo o Ecossistema <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                </div>
            </section>

            {/* VENTURE BUILDER PREVIEW */}
            <section className="vb-section sg-pattern-bg">
                <div className="container">
                    <div className="vb-grid">
                        <div data-reveal>
                            <div className="sg-tag">Próximo Nível</div>
                            <h2 className="vb-title">Do Consultório ao<br /><span>Sócio de Aluguel.</span></h2>
                            <p className="vb-desc">
                                Após o Consultório, empresas prontas podem evoluir para a co-gestão. A Singular atua como sócio temporário por 90 dias — implementando melhorias financeiras, comerciais e operacionais a fundo. R$12.000 por 3 meses + êxito.
                            </p>
                            <div className="vb-pillars-list">
                                {[
                                    { icon: 'fa-bullseye', title: 'Ser Diretivo', desc: 'Correção imediata, sem eufemismos.' },
                                    { icon: 'fa-handshake', title: 'Sócio Operacional', desc: 'Não somos investidores passivos — atuamos mão na massa.' },
                                    { icon: 'fa-bolt', title: 'Resultado em Caixa', desc: 'Nosso custo vem depois do seu crescimento.' },
                                ].map((pillar, i) => (
                                    <div className="vb-pillar-item" key={i}>
                                        <div className="vb-pillar-icon">
                                            <i className={`fas ${pillar.icon}`}></i>
                                        </div>
                                        <div>
                                            <strong className="vb-pillar-title">{pillar.title}</strong>
                                            <p className="vb-pillar-desc">{pillar.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <a href="#triagem" className="btn btn-primary">Começar pelo Consultório <i className="fas fa-arrow-right"></i></a>
                        </div>

                        <div data-reveal data-reveal-delay="2">
                            <div className="vb-form-card">
                                <div className="sg-tag">Escada de Valor</div>
                                <h4 className="vb-form-title">Pronto para o próximo nível?</h4>
                                <p className="vb-form-desc">Preencha o formulário e a equipe da Singular avalia se o seu negócio se encaixa no modelo de co-gestão (Sócio de Aluguel).</p>
                                <form id="venture-quick-form" className="vb-form" onSubmit={handleVentureSubmit}>
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
                                    <button type="submit" className="btn btn-primary btn-full" disabled={ventureLoading}>
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
                        <div className="sg-tag sg-tag-outline">Cases Reais</div>
                        <h2>Resultados em <span style={{ color: 'var(--cobre)' }}>90 Dias</span></h2>
                        <p>Quick wins reais de clientes que passaram pelo Consultório Empresarial. Não teoria — resultados financeiros concretos.</p>
                    </div>

                    <div className="areas-grid">
                        {[
                            { icon: '🐾', title: 'Pet Shop Online', desc: 'Parceria com veterinários locais e repacotamento de serviços.', items: ['Ticket médio subiu para R$1.300', 'Parceria com microinfluenciadores', 'Reativação de clientes inativos', 'Campanha de indicação estruturada'] },
                            { icon: '💆', title: 'Clínica de Estética', desc: 'Reativação de ex-clientes VIP com script de ligação do Playbook.', items: ['+R$2.000 em vendas em 3 dias', 'Open house com indicação de amigos', 'Ticket médio subiu para R$1.500', 'Base de clientes segmentada'] },
                            { icon: '📊', title: 'Empresa de Serviços', desc: 'Raio-X financeiro revelou serviço subprecificado em 20%.', items: ['Ajuste de preço sem perda de vendas', '+R$5k no caixa mensal', 'Renegociação com fornecedores -10%', 'Economia de R$3k/mês em insumos'] },
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

                    <div className="section-cta-center" data-reveal>
                        <a href="#triagem" className="btn btn-dark btn-lg">
                            Quero Resultados Assim <i className="fas fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* PLANOS */}
            <section className="planos-section" id="planos">
                <div className="container">
                    <div className="section-header" data-reveal>
                        <div className="sg-tag">Modalidades</div>
                        <h2>As 5 Modalidades de <span>Acompanhamento</span> da Singular</h2>
                        <p className="planos-subtitle"><strong>Escolha o nível de profundidade.</strong> Cada modalidade foi desenhada para atender empresários em diferentes momentos de maturidade e prontidão para transformação. A escolha correta respeita o ritmo real de cada negócio.</p>
                    </div>

                    <div className="planos-grid">
                        {[
                            {
                                tag: null,
                                name: 'Quinzenal',
                                contrato: 'Contrato semestral',
                                bullets: [
                                    'Encontros quinzenais estruturados',
                                    '15% de desconto em todos os serviços complementares (MKT, GST, FIN, ADV, VND)',
                                    'Acesso ao calendário exclusivo de eventos (apenas convidados)',
                                ],
                                highlight: false,
                            },
                            {
                                tag: null,
                                name: 'Semanal Nível 1',
                                contrato: 'Contrato semestral',
                                bullets: [
                                    'Todos os benefícios da modalidade anterior',
                                    'Encontros semanais para aceleração do desenvolvimento',
                                    'Acesso completo ao FridAI (inteligência artificial proprietária)',
                                ],
                                highlight: false,
                            },
                            {
                                tag: null,
                                name: 'Semanal Nível 2',
                                contrato: 'Contrato semestral',
                                bullets: [
                                    'Todos os benefícios anteriores',
                                    'Sessão semanal feita na sua empresa',
                                    'Specialist In Company: 1 dia por mês de imersão presencial com especialista dedicado',
                                    'Suporte 24/7 de todos nossos agentes de IA',
                                ],
                                highlight: false,
                            },
                            {
                                tag: null,
                                name: 'Full Access',
                                contrato: 'Grupo de 6 empresas simultaneamente',
                                bullets: [
                                    'Cessão de Gerência: profissional experiente atuando dentro da empresa',
                                    'Comunidade Nexialista: rede fechada de empresários de alto nível',
                                    'Avaliação direta dos dealers para preparação e captação de recursos',
                                ],
                                highlight: false,
                            },
                            {
                                tag: 'FLAGSHIP',
                                name: 'SINGULARIDADE',
                                contrato: 'Dedicação exclusiva para 1 empresa',
                                bullets: [
                                    'Cessão por 6 meses em regime intensivo de um Empresário',
                                    'Acesso total à experiente Comunidade Nexialista',
                                    'Empresário tem acesso à infraestrutura da incubadora do grupo',
                                    'Avaliação dos investidores para escalar a empresa',
                                ],
                                highlight: true,
                            },
                        ].map((plan, i) => (
                            <div className={`plano-card${plan.highlight ? ' is-highlighted' : ''}`} data-reveal data-reveal-delay={`${(i % 3) + 1}`} key={plan.name}>
                                {plan.tag && <span className="plano-tag">{plan.tag}</span>}
                                <h3 className="plano-name">{plan.name}</h3>
                                <div className="plano-investimento">
                                    <span className="plano-investimento-label">Investimento</span>
                                    <span className="plano-investimento-value">Sob consulta</span>
                                </div>
                                <div className="plano-contrato">{plan.contrato}</div>
                                <ul className="plano-bullets">
                                    {plan.bullets.map((b, j) => (
                                        <li key={j}><i className="fas fa-check"></i> {b}</li>
                                    ))}
                                </ul>
                                <a href="#triagem" className={`btn ${plan.highlight ? 'btn-primary' : 'btn-outline'} btn-full`}>
                                    Falar com Especialista
                                </a>
                            </div>
                        ))}
                    </div>

                    <p className="planos-disclaimer" data-reveal>
                        <strong>Não vendemos pacote pronto.</strong> Após a triagem gratuita, nosso especialista monta a oferta sob medida pro seu momento. Garantia: 60 dias para clareza do caixa + plano de metas — ou estendemos por mais 1 mês sem cobrar.
                    </p>
                </div>
            </section>

            {/* TRIAGEM */}
            <section id="triagem" className="triagem-section">
                <div className="container">
                    <div className="triagem-grid">
                        <div data-reveal>
                            <div className="sg-tag">Sessão 0 — Anamnese</div>
                            <h2 className="triagem-title">Agende Sua<br /><span>Triagem Gratuita</span></h2>
                            <p className="triagem-subtitle">
                                Em menos de 90 minutos, um consultor sênior da Singular faz a anamnese do seu negócio no coworking mais próximo de você. Sem venda disfarçada — é uma consulta real para entender onde o caos começa.
                            </p>
                            <div className="triagem-steps">
                                {[
                                    { num: '1', title: 'Preencha o formulário', desc: 'Dados básicos do seu negócio e o principal desafio que te trouxe aqui.' },
                                    { num: '2', title: 'Agende no coworking mais próximo', desc: 'Nossa equipe identifica o coworking parceiro mais próximo da sua empresa e confirma a sessão em até 24h.' },
                                    { num: '3', title: 'Receba o diagnóstico 360°', desc: 'Saiba exatamente onde estão os gargalos do seu negócio e o caminho para resolvê-los.' },
                                ].map((step, i) => (
                                    <div className="triagem-step" key={i}>
                                        <div className="triagem-step-num">
                                            <span>{step.num}</span>
                                        </div>
                                        <div>
                                            <strong className="triagem-step-title">{step.title}</strong>
                                            <p className="triagem-step-desc">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div data-reveal data-reveal-delay="2">
                            <div className="triagem-form-card">
                                <h4 className="triagem-form-title">Formulário de Triagem</h4>
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
                                    <button type="submit" className="btn btn-primary btn-lg btn-full" disabled={triagemLoading}>
                                        {triagemLoading ? <><i className="fas fa-spinner fa-spin"></i> Enviando...</> : <><i className="fas fa-calendar-check"></i> Agendar Minha Triagem Gratuita</>}
                                    </button>
                                    <p className="triagem-form-disclaimer">
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
                <div className="container cta-banner-content">
                    <h2 data-reveal>"Antes de falar de valores,<br />precisamos falar de <em>crescimento real.</em>"</h2>
                    <p data-reveal data-reveal-delay="1">Garantia: se em 60 dias você não tiver clareza do caixa + plano de metas executável, estendemos o consultório por mais 1 mês sem cobrar nada.</p>
                    <div className="cta-banner-actions" data-reveal data-reveal-delay="2">
                        <a href="#triagem" className="btn btn-dark btn-lg"><i className="fas fa-calendar-check"></i> Agendar Triagem Gratuita</a>
                        <Link to="/ecossistema" className="btn btn-outline btn-lg" style={{ borderColor: 'rgba(247,238,235,0.4)', color: 'var(--off-white)' }}>Ver o Ecossistema</Link>
                    </div>
                </div>
            </div>
        </>
    )
}
