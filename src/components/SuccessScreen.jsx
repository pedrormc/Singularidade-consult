import { useState, useEffect } from 'react'

export default function SuccessScreen({ onClose }) {
    const [animate, setAnimate] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 100)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className={`mp-success ${animate ? 'animate' : ''}`}>
            <div className="mp-success-check">
                <svg viewBox="0 0 52 52" className="mp-success-svg">
                    <circle className="mp-success-circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="mp-success-path" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>

            <h2>Solicitação enviada com sucesso</h2>
            <p>
                Recebemos sua solicitação. Um especialista da Singular vai entrar em contato para
                entender melhor sua necessidade e indicar o melhor caminho.
            </p>

            <div className="mp-success-steps">
                <div className="mp-success-step">
                    <span className="mp-success-step-num">1</span>
                    <span>Análise da sua solicitação</span>
                </div>
                <div className="mp-success-step">
                    <span className="mp-success-step-num">2</span>
                    <span>Contato de um especialista</span>
                </div>
                <div className="mp-success-step">
                    <span className="mp-success-step-num">3</span>
                    <span>Indicação do melhor caminho</span>
                </div>
            </div>

            <button className="btn btn-primary" onClick={onClose} style={{ marginTop: '2rem' }}>
                Voltar ao Marketplace
            </button>
        </div>
    )
}
