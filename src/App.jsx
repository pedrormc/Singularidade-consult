import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from '../Home'
import Ecossistema from './pages/Ecossistema'
import VentureBuilder from './pages/VentureBuilder'
import Areas from './pages/Areas'
import Marketplace from './pages/Marketplace'
import ProviderProfile from './pages/ProviderProfile'
import Backoffice from './pages/Backoffice'

function ScrollToTop() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])
    return null
}

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ecossistema" element={<Ecossistema />} />
                <Route path="/venture-builder" element={<VentureBuilder />} />
                <Route path="/areas" element={<Areas />} />
                <Route path="/marketplace" element={<Marketplace />} />
                <Route path="/marketplace/fornecedor/:slug" element={<ProviderProfile />} />
                <Route path="/backoffice" element={<Backoffice />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App
