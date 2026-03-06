import { useState } from 'react'
import { trackEvent, EVENT_NAMES } from '../services/eventTracker'
import { createLead } from '../services/leadService'
import { PAIN_CATEGORIES, URGENCY_OPTIONS, BUDGET_OPTIONS } from '../data/mockData'
import SuccessScreen from './SuccessScreen'

export default function LeadFormModal({ onClose, prefill = {} }) {
    const [submitted, setSubmitted] = useState(false)
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        dorSelecionada: prefill.dorSelecionada || '',
        descricaoProblema: '',
        urgencia: 'media',
        orcamento: 'indefinido',
        providerId: prefill.providerId || null,
    })

    function handleChange(e) {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()

        // Event 5 — lead_form_submitted
        trackEvent(EVENT_NAMES.LEAD_FORM_SUBMITTED, {
            ...formData,
            termoBuscado: prefill.termoBuscado || '',
        })

        // Create lead (also fires lead_created + notifications)
        createLead(formData)

        setSubmitted(true)
    }

    if (submitted) {
        return (
            <div className="mp-modal-overlay" onClick={onClose}>
                <div className="mp-modal" onClick={(e) => e.stopPropagation()}>
                    <SuccessScreen onClose={onClose} />
                </div>
            </div>
        )
    }

    return (
        <div className="mp-modal-overlay" onClick={onClose}>
            <div className="mp-modal mp-modal-form" onClick={(e) => e.stopPropagation()}>
                <button className="mp-modal-close" onClick={onClose}>✕</button>

                <div className="mp-modal-header">
                    <h2>Solicitar análise da <span className="text-cobre">Singular</span></h2>
                    <p>Preencha os dados abaixo e um especialista entrará em contato.</p>
                    {prefill.providerName && (
                        <div className="mp-modal-prefill">
                            Fornecedor selecionado: <strong>{prefill.providerName}</strong>
                        </div>
                    )}
                </div>

                <form onSubmit={handleSubmit} className="mp-form">
                    <div className="mp-form-row">
                        <div className="mp-form-group">
                            <label htmlFor="lead-nome">Nome completo *</label>
                            <input
                                type="text"
                                id="lead-nome"
                                name="nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                placeholder="Seu nome"
                            />
                        </div>
                        <div className="mp-form-group">
                            <label htmlFor="lead-email">E-mail *</label>
                            <input
                                type="email"
                                id="lead-email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="seu@email.com"
                            />
                        </div>
                    </div>

                    <div className="mp-form-row">
                        <div className="mp-form-group">
                            <label htmlFor="lead-telefone">Telefone *</label>
                            <input
                                type="tel"
                                id="lead-telefone"
                                name="telefone"
                                value={formData.telefone}
                                onChange={handleChange}
                                required
                                placeholder="(11) 99999-9999"
                            />
                        </div>
                        <div className="mp-form-group">
                            <label htmlFor="lead-empresa">Empresa *</label>
                            <input
                                type="text"
                                id="lead-empresa"
                                name="empresa"
                                value={formData.empresa}
                                onChange={handleChange}
                                required
                                placeholder="Nome da empresa"
                            />
                        </div>
                    </div>

                    <div className="mp-form-group">
                        <label htmlFor="lead-dor">Qual sua principal dor? *</label>
                        <select
                            id="lead-dor"
                            name="dorSelecionada"
                            value={formData.dorSelecionada}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecione...</option>
                            {PAIN_CATEGORIES.map((cat) => (
                                <option key={cat.id} value={cat.label}>
                                    {cat.icon} {cat.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="mp-form-group">
                        <label htmlFor="lead-descricao">Descreva seu problema *</label>
                        <textarea
                            id="lead-descricao"
                            name="descricaoProblema"
                            value={formData.descricaoProblema}
                            onChange={handleChange}
                            required
                            rows="4"
                            placeholder="Conte-nos mais sobre o desafio que você enfrenta..."
                        />
                    </div>

                    <div className="mp-form-row">
                        <div className="mp-form-group">
                            <label htmlFor="lead-urgencia">Urgência</label>
                            <select
                                id="lead-urgencia"
                                name="urgencia"
                                value={formData.urgencia}
                                onChange={handleChange}
                            >
                                {URGENCY_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mp-form-group">
                            <label htmlFor="lead-orcamento">Orçamento previsto</label>
                            <select
                                id="lead-orcamento"
                                name="orcamento"
                                value={formData.orcamento}
                                onChange={handleChange}
                            >
                                {BUDGET_OPTIONS.map((opt) => (
                                    <option key={opt.value} value={opt.value}>
                                        {opt.label}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-lg mp-form-submit" id="btn-submit-lead">
                        Enviar solicitação
                    </button>
                </form>
            </div>
        </div>
    )
}
