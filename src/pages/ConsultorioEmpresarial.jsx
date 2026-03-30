import { Link } from 'react-router-dom'
import { useScrollRevealAll } from '../hooks/useScrollReveal'
import './ConsultorioEmpresarial.css'

export default function ConsultorioEmpresarial() {
    useScrollRevealAll()

    return (
        <>
            {/* HERO */}
            <section className="ce-hero">
                <div className="container">
                    <div className="breadcrumb" data-reveal>
                        <Link to="/">Home</Link>
                        <span className="breadcrumb-sep">/</span>
                        <span className="breadcrumb-current">Consultório Empresarial</span>
                    </div>
                    <div className="sg-tag" data-reveal>Consultório Empresarial</div>
                    <h1 className="ce-hero-tagline" data-reveal data-reveal-delay="1">
                        <span className="cobre">Clareza para decidir.</span> Estrutura para crescer.
                    </h1>
                    <p className="ce-hero-sub" data-reveal data-reveal-delay="2">
                        Apoio estratégico para empresários em modo sobrevivência ou organização. Foco em clareza, priorização e tomada de decisão consciente. Não vendemos soluções prontas — ajudamos a enxergar e dimensionar o que resolver.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }} data-reveal data-reveal-delay="3">
                        <Link to="/#triagem" className="btn btn-primary btn-lg">
                            <i className="fas fa-calendar-check"></i> Agendar Triagem Gratuita
                        </Link>
                        <a href="#metodologia" className="btn btn-outline btn-lg">
                            Ver Metodologia <i className="fas fa-arrow-down"></i>
                        </a>
                    </div>
                </div>
            </section>

            {/* COMO FUNCIONA */}
            <section className="ce-steps-section">
                <div className="container">
                    <h2 data-reveal>Como essa conversa vai <span style={{ color: 'var(--cobre)' }}>funcionar</span></h2>
                    <div className="ce-steps-grid">
                        {[
                            { num: '01', text: 'Entender o que você está vivendo hoje no negócio' },
                            { num: '02', text: 'Questionar se o problema é causa ou consequência' },
                            { num: '03', text: 'Decidir se o consultório faz sentido agora' },
                            { num: '04', text: 'Você sai com uma segunda visão' },
                        ].map((step, i) => (
                            <div className="ce-step" data-reveal data-reveal-delay={`${i + 1}`} key={i}>
                                <span className="ce-step-num">{step.num}</span>
                                <h4>{step.text}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SINTOMAS */}
            <section className="ce-sintomas-section">
                <div className="container">
                    <h2 data-reveal>Sintomas que empresários <span style={{ color: 'var(--cobre)' }}>costumam trazer</span></h2>
                    <div className="ce-sintomas-grid" data-reveal data-reveal-delay="1">
                        {[
                            '"Preciso vender mais"',
                            '"Meu financeiro está confuso"',
                            '"Estou sobrecarregado na operação"',
                            '"Contratei serviços e não funcionou"',
                        ].map((s, i) => (
                            <div className="ce-sintoma-bubble" key={i}>{s}</div>
                        ))}
                    </div>
                    <div className="ce-sintomas-grid" data-reveal data-reveal-delay="2" style={{ marginTop: '1rem' }}>
                        <div className="ce-sintoma-bubble full-width">"Tenho dificuldade de crescer sem me envolver em tudo"</div>
                    </div>
                </div>
            </section>

            {/* SINTOMA ≠ CAUSA */}
            <section className="ce-causa-section">
                <div className="container">
                    <h2 data-reveal>Sintoma <span style={{ color: 'var(--cobre)' }}>&ne;</span> Causa</h2>
                    <div className="ce-causa-list">
                        {[
                            'Problema comercial pode ser financeiro',
                            'Problema financeiro pode ser operacional',
                            'Problema operacional pode ser falta de critério',
                        ].map((item, i) => (
                            <div className="ce-causa-item" data-reveal data-reveal-delay={`${i + 1}`} key={i}>
                                <div className="ce-causa-num">{i + 1}</div>
                                <span className="ce-causa-text">{item}</span>
                            </div>
                        ))}
                    </div>
                    <p className="ce-causa-warning" data-reveal data-reveal-delay="4">
                        Resolver o sintoma errado gera mais custo, frustração e retrabalho.
                    </p>
                </div>
            </section>

            {/* 5 ÁREAS DA GESTÃO */}
            <section className="ce-areas-section">
                <div className="container">
                    <h2 data-reveal>As 5 áreas da <span style={{ color: 'var(--cobre)' }}>gestão empresarial</span></h2>
                    <div className="ce-areas-grid" data-reveal data-reveal-delay="1">
                        {['Marketing', 'Comercial', 'Financeiro', 'Operações'].map((area, i) => (
                            <div className="ce-area-pill" key={i}>{area}</div>
                        ))}
                    </div>
                    <div className="ce-areas-grid" data-reveal data-reveal-delay="2" style={{ marginTop: '1rem' }}>
                        <div className="ce-area-pill full-width">Análise de Negócios</div>
                    </div>
                    <p className="ce-areas-note" data-reveal data-reveal-delay="3">Se auto-avalie de 0 a 5 para cada área</p>
                </div>
            </section>

            {/* BOLETOS INVISÍVEIS */}
            <section className="ce-boletos-section">
                <div className="container">
                    <h2 data-reveal>Precisamos nomear e quantificar o <span style={{ color: 'var(--cobre)' }}>desperdício silencioso</span></h2>
                    <p data-reveal data-reveal-delay="1" style={{ fontSize: '1.15rem', marginTop: '0.5rem' }}>
                        Esta é a lista dos <strong style={{ color: 'var(--cobre)' }}>"boletos invisíveis"</strong> que muitos ignoram:
                    </p>
                    <div className="ce-boletos-grid" data-reveal data-reveal-delay="2">
                        {[
                            { title: 'Funcionários demitidos:', desc: 'custos de rescisão + reposição + perda de conhecimento' },
                            { title: 'Multas pagas:', desc: 'atrasos evitáveis que drenam recursos preciosos' },
                            { title: 'Marketing queimado:', desc: 'investimentos sem retorno mensurável ou estratégia clara' },
                            { title: 'Margem baixa:', desc: 'precificação incorreta que sacrifica rentabilidade' },
                            { title: 'Empréstimos ativos:', desc: 'juros compostos desnecessários por má gestão de caixa' },
                            { title: 'Tempo perdido:', desc: 'horas dedicadas a finanças pessoais que deveriam estar na empresa' },
                            { title: 'Descontos não aproveitados:', desc: 'oportunidades fiscais e comerciais desperdiçadas' },
                            { title: 'Desperdício ou ociosidade:', desc: 'quanto tempo a sua praça ficou vazia ou estoque venceu / não foi aproveitado' },
                        ].map((b, i) => (
                            <div className="ce-boleto-item" key={i}>
                                <p className="ce-boleto-title">{b.title}</p>
                                <p className="ce-boleto-desc">{b.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* QUANTO CUSTOU */}
            <section className="ce-custo-section">
                <div className="container">
                    <h2 data-reveal>Quanto isso te <span style={{ color: 'var(--cobre)' }}>custou?</span></h2>
                    <div className="ce-custo-grid" data-reveal data-reveal-delay="1">
                        <div className="ce-custo-card">
                            <h4>Custo Emocional</h4>
                            <p>Noites de insônia, relacionamentos comprometidos, saúde deteriorada, sonhos adiados indefinidamente.</p>
                        </div>
                        <div className="ce-custo-card">
                            <h4>Custo Financeiro</h4>
                            <p>Dinheiro perdido em desperdícios operacionais, oportunidades não capturadas, juros desnecessários pagos.</p>
                        </div>
                        <div className="ce-custo-card">
                            <h4>Custo Operacional</h4>
                            <p>Retrabalho constante, processos ineficientes, equipe desmotivada, clientes insatisfeitos.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* POR QUE EXISTE */}
            <section className="ce-porque-section">
                <div className="container">
                    <h2 data-reveal>Por que o Consultório Empresarial <span style={{ color: 'var(--cobre)' }}>existe</span></h2>
                    <div className="ce-porque-grid" data-reveal data-reveal-delay="1">
                        {[
                            'Para ajudar o empresário a enxergar melhor',
                            'Para priorizar o que realmente importa',
                            'Para tomar decisões com mais segurança',
                            'Para capacitar o empresário à crescer',
                        ].map((text, i) => (
                            <div className="ce-porque-item" key={i}>
                                <div className="ce-porque-icon"></div>
                                <p>{text}</p>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: '4rem', padding: '2.5rem', background: 'var(--cinza-escuro)', borderRadius: 'var(--border-radius-lg)', border: '1px solid rgba(247,238,235,0.08)' }} data-reveal data-reveal-delay="2">
                        <h3 style={{ marginBottom: '1rem' }}>O ponto central desse <span style={{ color: 'var(--cobre)' }}>exercício</span></h3>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                            <div style={{ background: 'var(--cobre)', borderRadius: 'var(--border-radius-lg)', padding: '1.5rem' }}>
                                <p style={{ color: 'var(--off-white)', margin: 0, fontSize: '0.95rem' }}>A maioria dos empresários empreende sozinho por muito tempo</p>
                            </div>
                            <div style={{ background: 'var(--cobre)', borderRadius: 'var(--border-radius-lg)', padding: '1.5rem' }}>
                                <p style={{ color: 'var(--off-white)', margin: 0, fontSize: '0.95rem' }}>Decide sem parâmetro</p>
                            </div>
                            <div style={{ background: 'var(--cobre)', borderRadius: 'var(--border-radius-lg)', padding: '1.5rem' }}>
                                <p style={{ color: 'var(--off-white)', margin: 0, fontSize: '0.95rem' }}>Aprende com os erros das escolhas ruins</p>
                            </div>
                        </div>
                        <p style={{ fontSize: '1rem' }}>
                            Isso não é incompetência — é falta de apoio estruturado. É sinal de uma trajetória longa em um ambiente difícil e hostil.
                        </p>
                    </div>
                </div>
            </section>

            {/* JORNADA */}
            <section className="ce-jornada-section">
                <div className="container">
                    <h2 data-reveal>A Jornada <span style={{ color: 'var(--cobre)' }}>Consultório Empresarial</span></h2>
                    <p className="ce-jornada-sub" data-reveal data-reveal-delay="1">A melhor forma de cuidar de empresas é cuidando do empresário</p>

                    <div className="ce-timeline">
                        {[
                            { num: '1', title: 'Exame do Empresário', desc: 'Verdade emocional e diagnóstico inicial preciso' },
                            { num: '2', title: 'Exame da Empresa', desc: 'Custos invisíveis e avaliação financeira profunda' },
                            { num: '3', title: 'Plano de Direção', desc: 'Plano e rota de desenvolvimento clara' },
                            { num: '4', title: 'Recorrência', desc: 'Acompanhamento estruturado e suporte contínuo' },
                            { num: '5', title: 'Crescimento', desc: 'Transformação sustentável e resultados tangíveis' },
                        ].map((item, i) => (
                            <div className="ce-timeline-item" data-reveal data-reveal-delay={`${i + 1}`} key={i}>
                                <div className="ce-timeline-num">{item.num}</div>
                                <p className="ce-timeline-title">{item.title}</p>
                                <p className="ce-timeline-desc">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* METODOLOGIA */}
            <section className="ce-metodologia-section" id="metodologia">
                <div className="container">
                    <h2 data-reveal>O Plano de Exames <span style={{ color: 'var(--cobre)' }}>(metodologia)</span></h2>

                    <div className="ce-metodologia-flow" data-reveal data-reveal-delay="1">
                        {[
                            { title: 'Triagem', desc: 'Avaliação Geral e sem custo' },
                            { title: 'Consulta 1', desc: 'Avaliação do empresário' },
                            { title: 'Consulta 2', desc: 'Transparência financeira e definir preço ideal' },
                            { title: 'Consulta 3', desc: 'Plano de ação e uso de recursos para crescer' },
                            { title: 'Semanais Executivas', desc: 'Com a disponibilidade de especialistas técnicos*' },
                        ].map((step, i, arr) => (
                            <div className="ce-metodo-step" key={i}>
                                <div className="ce-metodo-circle">
                                    <span className="ce-metodo-circle-inner">{step.title}</span>
                                </div>
                                <p className="ce-metodo-desc">{step.desc}</p>
                                {i < arr.length - 1 && <i className="fas fa-arrow-right ce-metodo-arrow"></i>}
                            </div>
                        ))}
                    </div>

                    <p className="ce-metodo-note" data-reveal data-reveal-delay="2">
                        <strong>* Especialistas em:</strong> RH, Gestão, Finanças, Contabilidade, Tributos, Vendas, Marketing, Processos, Tecnologia, IA
                    </p>
                </div>
            </section>

            {/* DETALHAMENTO DAS 3 CONSULTAS */}
            <section className="ce-detalhe-section">
                <div className="container">
                    <h2 data-reveal>O Plano de Exames — <span style={{ color: 'var(--cobre)' }}>Detalhamento</span></h2>
                    <div className="ce-detalhe-grid" data-reveal data-reveal-delay="1">
                        <div className="ce-detalhe-card">
                            <h4>Consulta 1 — Clareza do Empresário</h4>
                            <ul>
                                <li>Avaliação do nível de consciência do empresário nas áreas-chave da gestão</li>
                                <li>Identificação de incoerências entre percepção e realidade</li>
                                <li>Diagnóstico da forma de pensar, decidir e priorizar</li>
                                <li>Clareza sobre onde estão os principais gargalos do negócio</li>
                                <li>Direcionamento inicial de foco e prioridades</li>
                                <li>(não resolve tudo — organiza o pensamento)</li>
                            </ul>
                        </div>
                        <div className="ce-detalhe-card">
                            <h4>Consulta 2 — Transparência do Negócio</h4>
                            <ul>
                                <li>Abertura dos números essenciais do negócio</li>
                                <li>Identificação de custos invisíveis e perdas não percebidas</li>
                                <li>Avaliação de indicadores financeiros, comerciais e operacionais</li>
                                <li>Compreensão do impacto financeiro das decisões tomadas no passado</li>
                                <li>Base concreta para priorização correta de soluções</li>
                            </ul>
                        </div>
                        <div className="ce-detalhe-card">
                            <h4>Consulta 3 — Plano de Ação Realista</h4>
                            <ul>
                                <li>Definição clara do principal problema a ser resolvido</li>
                                <li>Priorização das frentes com maior impacto no curto e médio prazo</li>
                                <li>Construção de um plano de ação possível para a rotina do empresário</li>
                                <li>Organização de tempo, energia e recursos</li>
                                <li>Clareza sobre próximos passos e necessidades futuras</li>
                                <li>(plano que cabe na realidade, não no papel)</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ENTREGÁVEIS */}
            <section className="ce-entregaveis-section">
                <div className="container">
                    <h2 data-reveal>Os Quatro Entregáveis da <span style={{ color: 'var(--cobre)' }}>Consulta 3</span></h2>
                    <p className="ce-entregaveis-intro" data-reveal data-reveal-delay="1">
                        Ao final do terceiro encontro, você recebe quatro instrumentos estratégicos que o capacitam para decisões conscientes e movimento sustentável.
                    </p>
                    <div className="ce-entregaveis-list">
                        {[
                            { title: 'Mapa de Hipóteses de Tensões', desc: 'Documento visual que identifica precisamente o que está travando o crescimento hoje — não suposições, mas evidências concretas coletadas nos três encontros.' },
                            { title: 'Rota de Desenvolvimento', desc: 'Definição clara da trilha adequada para os próximos ciclos: gestão empresarial, performance comercial, cultura organizacional, estrutura financeira ou capacidade tecnológica.' },
                            { title: 'Plano Dimensionado', desc: 'Ação estruturada e tangível com indicadores simples para acompanhar o objetivo e progresso sem complexidade excessiva. Plano de até 90 dias.' },
                            { title: 'Prontidão para Proposta', desc: 'Avaliação criteriosa: se o empresário executa consistentemente → está pronto para a oferta. Se não executa → a proposta é segurada até que haja maturidade real.' },
                        ].map((item, i) => (
                            <div className="ce-entregavel" data-reveal data-reveal-delay={`${i + 1}`} key={i}>
                                <div className="ce-entregavel-num">{i + 1}</div>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AVALIAÇÃO FINANCEIRA REAL */}
            <section className="ce-financeira-section">
                <div className="container">
                    <h2 data-reveal>A Avaliação Financeira <span style={{ color: 'var(--cobre)' }}>Real</span></h2>
                    <div className="ce-financeira-grid" data-reveal data-reveal-delay="1">
                        {[
                            { title: 'COF — Custo Fixo', desc: 'Despesas que existem independente do volume de vendas' },
                            { title: 'CMV/CSV — Custo Variável', desc: 'Custos diretamente proporcionais à produção/entrega' },
                            { title: 'CRM — Base de Clientes', desc: 'Quem compra, com que frequência, qual ticket médio' },
                            { title: 'Impostos', desc: 'Carga tributária real e oportunidades de otimização' },
                            { title: 'Taxas', desc: 'Custos de transação, operação e intermediação' },
                            { title: 'Comissões', desc: 'Estrutura de remuneração variável da equipe comercial' },
                            { title: 'CAC — Custo de Aquisição', desc: 'Quanto custa trazer um novo cliente para a empresa' },
                            { title: 'Mix de Produtos', desc: 'Composição de vendas e rentabilidade por linha' },
                            { title: 'Retiradas dos Sócios', desc: 'Distribuição de lucros e pró-labore estruturado' },
                        ].map((item, i) => (
                            <div className="ce-fin-card" key={i}>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* O QUE LEVA AO FINAL */}
            <section className="ce-resultado-section">
                <div className="container">
                    <h2 data-reveal>O que você leva ao final do <span style={{ color: 'var(--cobre)' }}>Plano de Exames</span></h2>
                    <div className="ce-resultado-list" data-reveal data-reveal-delay="1">
                        {[
                            'Diagnóstico de maturidade do empresário',
                            'Diagnóstico de maturidade do negócio',
                            'Clareza sobre causas reais dos problemas',
                            'Prioridades bem definidas',
                            'Plano de ação executável',
                            'Mais critério para avaliar fornecedores, serviços e decisões',
                        ].map((item, i) => (
                            <div className="ce-resultado-item" key={i}>
                                <i className="fas fa-check-circle"></i>
                                <span>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INVESTIMENTO */}
            <section className="ce-pricing-section">
                <div className="container">
                    <h2 data-reveal>Investimento | <span style={{ color: 'var(--cobre)' }}>Plano de Exames</span></h2>
                    <div className="ce-pricing-cards" data-reveal data-reveal-delay="1">
                        <div className="ce-pricing-card">
                            <span className="ce-pricing-label">Oferta Mínima</span>
                            <div className="ce-pricing-value">R$ 159,27</div>
                            <span className="ce-pricing-installment">12x no cartão</span>
                            <p className="ce-pricing-desc">3 consultas exame</p>
                            <p style={{ fontSize: '0.8rem', color: 'rgba(247,238,235,0.4)', margin: 0 }}>ou R$ 2.000,00 à vista</p>
                        </div>
                        <div className="ce-pricing-card featured">
                            <span className="ce-pricing-label">Plano Completo</span>
                            <div className="ce-pricing-value">R$ 399,27</div>
                            <span className="ce-pricing-installment">12x no cartão</span>
                            <p className="ce-pricing-desc">3 consultas exame + 4 semanais</p>
                            <p style={{ fontSize: '0.8rem', color: 'rgba(247,238,235,0.4)', margin: 0 }}>ou R$ 5.000,00 à vista</p>
                        </div>
                        <div className="ce-pricing-card">
                            <span className="ce-pricing-label">Plano Avançado</span>
                            <div className="ce-pricing-value">R$ 699,27</div>
                            <span className="ce-pricing-installment">12x no cartão</span>
                            <p className="ce-pricing-desc">3 consultas + 8 semanais</p>
                            <p style={{ fontSize: '0.8rem', color: 'rgba(247,238,235,0.4)', margin: 0 }}>ou R$ 9.000,00 à vista</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CASOS REAIS */}
            <section className="ce-casos-section">
                <div className="container">
                    <h2 data-reveal>Casos <span style={{ color: 'var(--cobre)' }}>Reais</span></h2>
                    <div className="ce-casos-grid" data-reveal data-reveal-delay="1">
                        <div className="ce-caso-card">
                            <h4>Caso real — <span>Crescimento Estruturado</span></h4>
                            <div className="ce-caso-items">
                                <div className="ce-caso-item"><div className="ce-caso-bar"></div><p>Empresária com dificuldades financeiras e sobrecarga</p></div>
                                <div className="ce-caso-item"><div className="ce-caso-bar"></div><p>Organizou gestão e decisões</p></div>
                                <div className="ce-caso-item"><div className="ce-caso-bar"></div><p>Expandiu para mais de 7 unidades</p></div>
                                <div className="ce-caso-item"><div className="ce-caso-bar"></div><p>Hoje opera de forma autônoma e tirou um ano sabático</p></div>
                            </div>
                        </div>
                        <div className="ce-caso-card">
                            <h4>Caso real — <span>Destravamento Rápido</span></h4>
                            <div className="ce-caso-items">
                                <div className="ce-caso-item"><div className="ce-caso-bar"></div><p>Empresa travada após meses com várias empresas de marketing</p></div>
                                <div className="ce-caso-item"><div className="ce-caso-bar"></div><p>Sem agência, apenas com clareza e priorização correta</p></div>
                                <div className="ce-caso-item"><div className="ce-caso-bar"></div><p>Cresceu o faturamento em 30% no pior mês do ano</p></div>
                                <div className="ce-caso-item"><div className="ce-caso-bar"></div><p>Gastando menos do que antes</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* PLANOS DE ACOMPANHAMENTO */}
            <section className="ce-acompanhamento-section">
                <div className="container">
                    <h2 data-reveal>Planos de Acompanhamento <span style={{ color: 'var(--cobre)' }}>Singular</span></h2>
                    <p className="ce-acomp-intro" data-reveal data-reveal-delay="1">Modalidades de apoio contínuo à decisão e execução</p>
                    <ul className="ce-acomp-intro-list" data-reveal data-reveal-delay="1">
                        <li>Indicadas para empresários que não querem voltar ao improviso</li>
                        <li>Apresentadas apenas após o Plano de Exames</li>
                        <li>Aprofundamento proporcional à necessidade do negócio</li>
                    </ul>

                    <div className="ce-acomp-grid" data-reveal data-reveal-delay="2">
                        {[
                            { num: '1', title: 'Acompanhamento Quinzenal', items: ['1 encontro a cada 15 dias', 'Revisão de indicadores e decisões', 'Ajuste de rota do plano de ação', 'Apoio contínuo à tomada de decisão', 'Indicado para negócios em organização'] },
                            { num: '2', title: 'Acompanhamento Semanal', items: ['Encontros semanais', 'Acompanhamento mais próximo da execução', 'Apoio na priorização e resolução de gargalos', 'Desconto em serviços complementares da Singular', 'Indicado para negócios em crescimento acelerado'] },
                            { num: '3', title: 'Semanal com Imersão Mensal', items: ['Encontros regulares + 1 dia de imersão mensal', 'Atuação lado a lado com o empresário', 'Análise profunda da operação e decisões estratégicas', 'Ajustes práticos em processos e rotinas', 'Indicado para empresas mais complexas'] },
                        ].map((plan, i) => (
                            <div className="ce-acomp-card" key={i}>
                                <div className="ce-acomp-num">{plan.num}</div>
                                <h4>{plan.title}</h4>
                                <ul>
                                    {plan.items.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="ce-acomp-grid" data-reveal data-reveal-delay="3" style={{ gridTemplateColumns: '1fr 1fr' }}>
                        <div className="ce-acomp-card">
                            <div className="ce-acomp-num">4</div>
                            <h4>Gestor Cedido / Full Access</h4>
                            <ul>
                                <li>Profissional experiente atuando dentro da empresa</li>
                                <li>Apoio direto na gestão de áreas-chave</li>
                                <li>Redução da dependência do empresário</li>
                                <li>Preparação para escala, investimento ou sucessão</li>
                                <li>Indicado quando falta tempo, não vontade</li>
                            </ul>
                        </div>
                        <div className="ce-acomp-card">
                            <div className="ce-acomp-num">5</div>
                            <h4>Singularidade — Incubação e Escala</h4>
                            <ul>
                                <li>Acesso à infraestrutura do ecossistema Singular</li>
                                <li>Apoio em tecnologia, comercial, marketing e estratégia</li>
                                <li>Estruturação para crescimento, captação ou venda da empresa</li>
                                <li>Atuação como braço estratégico de longo prazo</li>
                                <li>Indicado para empresas com visão de expansão ou exit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* INÍCIO DO PROCESSO */}
            <section className="ce-steps-section" style={{ background: 'var(--preto-puro)' }}>
                <div className="container">
                    <h2 data-reveal>Início do <span style={{ color: 'var(--cobre)' }}>processo</span></h2>
                    <div className="ce-steps-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }} data-reveal data-reveal-delay="1">
                        <div className="ce-step">
                            <span className="ce-step-num">01</span>
                            <h4>Agendamos a próxima consulta</h4>
                        </div>
                        <div className="ce-step">
                            <span className="ce-step-num">02</span>
                            <h4>Realizamos o pagamento</h4>
                        </div>
                        <div className="ce-step">
                            <span className="ce-step-num">03</span>
                            <h4>Começamos a jornada de clareza e decisão</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <div className="cta-banner">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 data-reveal>Não deixe de cuidar da <em style={{ fontStyle: 'normal', color: 'var(--preto)' }}>saúde operacional</em> do seu negócio</h2>
                    <p data-reveal data-reveal-delay="1" style={{ color: 'rgba(247,238,235,0.85)' }}>
                        A Triagem é gratuita. Em menos de 60 minutos, você terá clareza sobre o próximo passo.
                    </p>
                    <Link to="/#triagem" className="btn btn-dark btn-lg" data-reveal data-reveal-delay="2">
                        <i className="fas fa-calendar-check"></i> Agendar Triagem Gratuita
                    </Link>
                </div>
            </div>
        </>
    )
}
