# SINGULAR — Plataforma Web

## Sobre o Projeto

Plataforma web da **Singular**, centro de apoio ao empresário e incubadora no modelo Venture Builder. Inclui site institucional, marketplace de fornecedores com sistema de eventos, captura de leads e CRM interno (backoffice).

**Stack:** React 18 + Vite + React Router DOM + Framer Motion + Three.js

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- **Node.js** 18+ instalado
- **npm** (vem com o Node.js)

### Passo a passo

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/singularidade.git
cd singularidade

# 2. Instale as dependências
npm install

# 3. Rode o servidor de desenvolvimento
npm run dev
```

O site estará disponível em **http://localhost:5173**

### Build de produção

```bash
npm run build    # Gera a pasta /dist
npm run preview  # Preview do build de produção
```

---

## 🆕 Últimas Alterações — Marketplace & Sistema de Eventos

### Marketplace de Fornecedores (`/marketplace`)
- Página completa com **busca por texto** e **filtros por dor** (Gestão, Financeiro, Marketing, Vendas, Operações, Jurídico, Tecnologia, Pessoas)
- **6 fornecedores** cadastrados com perfis detalhados
- Página de perfil individual por fornecedor (`/marketplace/fornecedor/:slug`)
- Formulário de **pré-qualificação de leads** com campos: nome, email, telefone, empresa, dor, descrição do problema, urgência e orçamento
- Tela de sucesso animada pós-envio
- Botão **"Solicitar análise da Singular"** em toda a jornada

### Backoffice CRM (`/backoffice`)
- **Pipeline Kanban** com colunas por status do funil
- Cards de lead expandíveis com detalhes e ações
- Todas as ações do CRM implementadas: registrar contato, triagem, encaminhamento, agendamento, reunião, proposta, fechamento
- **Log de eventos** — visualização de todos os eventos trackados em tempo real
- **Log de notificações** — WhatsApp e Emails simulados com templates da documentação

### Sistema de 14 Eventos (Event Tracking)
Cada ação do usuário e operador gera um evento rastreável:

| # | Evento | Trigger |
|---|--------|---------|
| 1 | `marketplace_viewed` | Acessa `/marketplace` |
| 2 | `marketplace_search` | Busca ou filtra fornecedores |
| 3 | `provider_profile_viewed` | Clica em card do fornecedor |
| 4 | `analysis_requested_click` | Clica "Solicitar análise" |
| 5 | `lead_form_submitted` | Envia formulário de lead |
| 6 | `lead_created` | Lead criado no sistema |
| 7 | `contact_attempted` | Operador registra tentativa de contato |
| 8 | `lead_contacted` | Operador registra contato realizado |
| 9 | `triage_completed` | Triagem concluída |
| 10 | `lead_routed_to_provider` | Lead encaminhado para fornecedor |
| 11 | `meeting_scheduled` | Reunião agendada |
| 12 | `meeting_completed` | Reunião realizada |
| 13 | `proposal_created` | Proposta criada |
| 14 | `deal_closed` | Negócio fechado |

### Funil Completo
```
Visitante → Lead capturado → Contato em andamento → Triagem
→ Encaminhado (Fornecedor / Consultório / Nutrição)
→ Agendado → Reunião realizada → Proposta enviada → Fechado / Perdido
```

### Navbar
- Adicionado link **"Marketplace"** na navegação desktop e mobile

---

## 📁 Estrutura de Arquivos

```
src/
├── App.jsx                          # Rotas da aplicação
├── main.jsx                         # Entry point (React + BrowserRouter)
├── index.css                        # Design system global
│
├── components/
│   ├── Navbar.jsx                   # Navegação com menu mobile
│   ├── Footer.jsx                   # Footer global
│   ├── LeadFormModal.jsx            # Modal de captura de lead
│   ├── SuccessScreen.jsx            # Tela de sucesso pós-envio
│   ├── Toast.jsx                    # Notificações toast
│   ├── LogoSVG.jsx                  # Logo SVG inline
│   ├── BlackHole3D.jsx              # Efeito visual 3D
│   ├── SingularSingularity.jsx      # Partículas animadas
│   └── SingularityBetaTest3d.jsx    # Shader de teste
│
├── pages/
│   ├── Marketplace.jsx + .css       # Marketplace de fornecedores
│   ├── ProviderProfile.jsx          # Perfil do fornecedor
│   ├── Backoffice.jsx + .css        # CRM Pipeline (Kanban)
│   ├── Ecossistema.jsx + .css       # Ecossistema Singular
│   ├── VentureBuilder.jsx + .css    # Venture Builder
│   └── Areas.jsx + .css             # Áreas de atuação
│
├── services/
│   ├── eventTracker.js              # Tracking dos 14 eventos
│   ├── sessionManager.js            # Sessão anônima + UTM
│   ├── leadService.js               # CRUD de leads + funil
│   └── notificationService.js       # WhatsApp + Email (simulado)
│
├── data/
│   └── mockData.js                  # Fornecedores e categorias mock
│
└── hooks/
    ├── useCounter.js                # Animação de contadores
    ├── useScrollReveal.js           # Scroll reveal
    └── utils.js                     # Utilitários
```

---

## 🔗 Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Home / Landing page |
| `/ecossistema` | Ecossistema Singular |
| `/venture-builder` | Venture Builder |
| `/areas` | Áreas de atuação |
| `/marketplace` | **Marketplace de fornecedores** |
| `/marketplace/fornecedor/:slug` | **Perfil do fornecedor** |
| `/backoffice` | **CRM Backoffice (Pipeline)** |

---

## 📐 Design System

### Cores
| Nome | Hex | Uso |
|------|-----|-----|
| Cobre | `#E64E10` | Destaque, CTAs, ícones |
| Preto Profundo | `#1C1C1C` | Background principal |
| Off-White | `#F7EEEB` | Texto principal |
| Aço Quente | `#5B4B48` | Cinza quente complementar |

### Tipografia
- **Display / Títulos:** Barlow Condensed (700–900) — Uppercase
- **Corpo / UI:** Inter (400–700)

---

## 💾 Persistência

Todos os dados são armazenados em **localStorage** para funcionar como demo:
- `sg_events` — Log de todos os eventos trackados
- `sg_leads` — Leads capturados com status do funil
- `sg_notifications` — Notificações enviadas (WhatsApp/Email)
- `sg_session_id` / `sg_session_data` — Sessão anônima do visitante

---

## 📌 Informações do Projeto

- **Cliente:** Singular — Centro de Apoio ao Empresário
- **Stack:** React 18, Vite 6, React Router DOM 6, Framer Motion, Three.js
- **Data:** Março 2026
