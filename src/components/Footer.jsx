import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <Link to="/" className="footer-logo">
                            <img src="/logo-full.svg" alt="Singular" className="footer-logo-img" />
                        </Link>
                        <p className="footer-tagline">O centro de apoio ao empresário onde o caos vira previsibilidade. Processos, tecnologia e governança ombro a ombro com quem empreende.</p>
                        <div className="footer-social">
                            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                            <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                            <a href="#" aria-label="WhatsApp"><i className="fab fa-whatsapp"></i></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h5>Navegação</h5>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/ecossistema">Ecossistema</Link></li>
                            <li><Link to="/#consultorio">Consultório</Link></li>
                            <li><Link to="/venture-builder">Venture Builder</Link></li>
                            <li><Link to="/areas">Áreas de Atuação</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h5>Soluções</h5>
                        <ul>
                            <li><Link to="/ecossistema">IA de Atendimento</Link></li>
                            <li><Link to="/ecossistema">Dashboard BI</Link></li>
                            <li><Link to="/ecossistema">Automações n8n</Link></li>
                            <li><Link to="/ecossistema">Recuperação de Crédito</Link></li>
                            <li><Link to="/ecossistema">CRM HubSpot</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h5>Empresa</h5>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Termos de Uso</a></li>
                            <li><a href="#">Política de Privacidade</a></li>
                            <li><a href="#">Polos Empresariais</a></li>
                            <li><Link to="/#triagem">Agendar Triagem</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-quote">"Negócios não quebram por falta de venda, quebram por falta de governança."</p>
                    <p className="footer-copy">© 2025 Singular. Todos os direitos reservados.</p>
                </div>
            </div>
        </footer>
    )
}
