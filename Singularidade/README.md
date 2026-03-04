# SINGULAR — Website Institucional

## Sobre o Projeto

Website institucional completo da **Singular**, centro de apoio ao empresário e incubadora no modelo Venture Builder. O site apresenta todas as frentes de atuação da empresa com foco em conversão de leads qualificados.

---

## ✅ Funcionalidades Implementadas

### Páginas
| Arquivo | Descrição |
|---------|-----------|
| `index.html` | Landing page mestra — hero, problema, consultório, ecossistema (preview), venture builder (preview), áreas (preview), formulário de triagem, CTA banner |
| `ecossistema.html` | Marketplace de soluções com filtros interativos por necessidade e prova social |
| `venture-builder.html` | Página completa do modelo Venture Builder com formulário de candidatura |
| `areas.html` | Detalhamento de todas as 6 áreas de atuação com sticky nav interna |

### Funcionalidades JavaScript
- ✅ Navbar com efeito scroll + scroll indicator
- ✅ Menu mobile com hamburger animado
- ✅ Scroll reveal com Intersection Observer
- ✅ Animação de contadores numéricos (hero stats)
- ✅ Smooth scroll para âncoras internas
- ✅ Filtros dinâmicos do ecossistema (por categoria)
- ✅ Formulários com validação + envio para API (tabela `leads`)
- ✅ Toast de confirmação de envio
- ✅ Máscara de telefone nos inputs WhatsApp
- ✅ Grids responsivos via JS
- ✅ Nav sticky de áreas com highlight por scroll

### Identidade Visual
- ✅ Paleta completa da marca (Cobre #E64E10, Preto Profundo #1C1C1C, Off-white #F7EEEB, Aço Quente #5B4B48)
- ✅ Pattern de diagonais da marca em seções de fundo
- ✅ Logotipo SVG inline com símbolo SI + diagonal laranja
- ✅ Tipografia: Barlow Condensed (display) + Inter (corpo)
- ✅ Elementos gráficos: linhas diagonais, cortes angulares, quadrado característico do símbolo

---

## 📁 Estrutura de Arquivos

```
/
├── index.html              # Landing page principal
├── ecossistema.html        # Marketplace de soluções
├── venture-builder.html    # Venture Builder + formulário
├── areas.html              # Áreas de atuação detalhadas
├── css/
│   └── style.css           # Estilos globais + design system
└── js/
    └── main.js             # Lógica global de interatividade
```

---

## 🔗 URIs Funcionais

| Rota | Descrição |
|------|-----------|
| `index.html` | Home / Landing page |
| `index.html#consultorio` | Seção Consultório Empresarial |
| `index.html#triagem` | Formulário de agendamento de triagem |
| `ecossistema.html` | Marketplace (filtros por necessidade) |
| `venture-builder.html` | Venture Builder |
| `venture-builder.html#seja-venture` | Formulário de candidatura |
| `areas.html` | Áreas de atuação |
| `areas.html#juridico` | Âncora Jurídico |
| `areas.html#tecnologia` | Âncora Tecnologia |
| `areas.html#financeiro` | Âncora Financeiro |
| `areas.html#marketing` | Âncora Marketing |
| `areas.html#rh` | Âncora RH |
| `areas.html#vendas` | Âncora Vendas |

---

## 🗄️ Modelo de Dados

### Tabela: `leads`

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `id` | text | UUID gerado automaticamente |
| `tipo` | text (enum) | `triagem`, `venture_quick`, `venture_builder` |
| `nome` | text | Nome completo do empresário |
| `whatsapp` | text | Telefone com máscara |
| `email` | text | E-mail (opcional) |
| `empresa` | text | Nome da empresa |
| `setor` | text | Setor de atuação |
| `faturamento` | text | Faixa de faturamento mensal |
| `num_socios` | text | Quantidade de sócios |
| `tempo_mercado` | text | Tempo de mercado |
| `desafio` | rich_text | Principal desafio atual |
| `objetivo` | rich_text | Objetivo com a Singular |
| `data_envio` | datetime | Timestamp do envio |
| `status` | text (enum) | `novo`, `em_analise`, `aprovado`, `reprovado`, `em_atendimento` |

**API Endpoint:** `tables/leads`

---

## 📐 Design System

### Cores Primárias
| Nome | Hex | Uso |
|------|-----|-----|
| Cobre | `#E64E10` | Cor de destaque, CTAs, ícones |
| Preto Profundo | `#1C1C1C` | Background principal |
| Off-White | `#F7EEEB` | Texto principal, fundo claro |
| Aço Quente | `#5B4B48` | Cinza quente complementar |

### Cores Secundárias
| Nome | Hex | Uso |
|------|-----|-----|
| Cobre Dessaturado | `#C55A48` | Variações tonais |
| Preto Puro | `#000000` | Footer |
| Cinza Escuro | `#2A2A2A` | Cards de conteúdo |

### Tipografia
- **Display / Títulos:** Barlow Condensed (700–900) — Uppercase
- **Corpo / UI:** Inter (400–700)

---

## 🚧 Funcionalidades Não Implementadas

- [ ] Blog / artigos de conteúdo
- [ ] Área do cliente (dashboard de ventures)
- [ ] Mapa de Polos Empresariais
- [ ] Página de FAQ
- [ ] Termos de Uso / Política de Privacidade
- [ ] Integração real com CRM HubSpot
- [ ] Integração com WhatsApp Business API para confirmação automática
- [ ] Sistema de agendamento com calendário

---

## 🚀 Próximos Passos Recomendados

1. **Integrar CRM:** Conectar formulários ao HubSpot via API para gestão do pipeline de leads
2. **Adicionar Analytics:** Implementar Google Analytics 4 + Meta Pixel para rastreamento de conversões
3. **Blog de Conteúdo:** Seção de artigos para SEO e autoridade de marca
4. **Área do Cliente:** Dashboard para ventures acompanharem KPIs em tempo real
5. **Página de FAQ:** Reduzir objeções comuns antes do contato
6. **Mapa de Polos:** Visualização geográfica dos polos empresariais (raio de 5km)
7. **SEO Técnico:** Implementar schema markup, sitemap XML e meta tags Open Graph completas
8. **Páginas Legais:** Termos de uso e política de privacidade (LGPD)

---

## 📌 Informações do Projeto

- **Cliente:** Singular — Centro de Apoio ao Empresário
- **Tipo:** Website institucional + geração de leads
- **Stack:** HTML5, CSS3, JavaScript Vanilla, Font Awesome 6, Google Fonts
- **Data:** Março 2026
