import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import LogoSVG from './LogoSVG'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const location = useLocation()

    useEffect(() => {
        function handleScroll() {
            setScrolled(window.scrollY > 60)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMenuOpen(false)
        document.body.style.overflow = ''
    }, [location])

    function toggleMenu() {
        setMenuOpen(prev => {
            document.body.style.overflow = !prev ? 'hidden' : ''
            return !prev
        })
    }

    function closeMenu() {
        setMenuOpen(false)
        document.body.style.overflow = ''
    }

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/'
        return location.pathname.startsWith(path)
    }

    function handleAnchorClick(e, hash) {
        if (location.pathname === '/' || location.pathname === '') {
            e.preventDefault()
            const target = document.getElementById(hash)
            if (target) {
                const offset = 88
                const top = target.getBoundingClientRect().top + window.scrollY - offset
                window.scrollTo({ top, behavior: 'smooth' })
            }
        }
        closeMenu()
    }

    return (
        <>
            <nav className={`navbar${scrolled ? ' scrolled' : ''}`} id="navbar">
                <div className="navbar-inner">
                    <Link to="/" className="navbar-logo">
                        <div className="logo-symbol">
                            <LogoSVG />
                        </div>
                        <span className="logo-text">SINGULAR</span>
                    </Link>

                    <div className="navbar-links">
                        <Link to="/ecossistema" className={isActive('/ecossistema') ? 'active' : ''}>Ecossistema</Link>
                        <Link to="/#consultorio" onClick={(e) => handleAnchorClick(e, 'consultorio')}>Consultório</Link>
                        <Link to="/venture-builder" className={isActive('/venture-builder') ? 'active' : ''}>Venture Builder</Link>
                        <Link to="/areas" className={isActive('/areas') ? 'active' : ''}>Áreas de Atuação</Link>
                    </div>

                    <div className="navbar-cta">
                        <Link to="/#triagem" className="btn btn-primary btn-sm" onClick={(e) => handleAnchorClick(e, 'triagem')}>
                            <i className="fas fa-calendar-check"></i>
                            Triagem Gratuita
                        </Link>
                    </div>

                    <button
                        className={`navbar-hamburger${menuOpen ? ' open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <span></span><span></span><span></span>
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
                <Link to="/ecossistema" onClick={closeMenu}>Ecossistema</Link>
                <Link to="/#consultorio" onClick={(e) => handleAnchorClick(e, 'consultorio')}>Consultório Empresarial</Link>
                <Link to="/venture-builder" onClick={closeMenu}>Venture Builder</Link>
                <Link to="/areas" onClick={closeMenu}>Áreas de Atuação</Link>
                <Link to="/#triagem" className="btn btn-primary" style={{ marginTop: '1rem', justifyContent: 'center' }} onClick={(e) => handleAnchorClick(e, 'triagem')}>
                    <i className="fas fa-calendar-check"></i> Agendar Triagem Gratuita
                </Link>
            </div>
        </>
    )
}
