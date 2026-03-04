import { useState, useEffect, createContext, useContext, useCallback } from 'react'

const ToastContext = createContext()

export function useToast() {
    return useContext(ToastContext)
}

export function ToastProvider({ children }) {
    const [toast, setToast] = useState(null)

    const showToast = useCallback((message, type = 'success') => {
        setToast({ message, type })
        setTimeout(() => setToast(null), 4500)
    }, [])

    return (
        <ToastContext.Provider value={showToast}>
            {children}
            {toast && <Toast message={toast.message} type={toast.type} />}
        </ToastContext.Provider>
    )
}

function Toast({ message, type }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
        const timer = setTimeout(() => setVisible(false), 4000)
        return () => clearTimeout(timer)
    }, [])

    return (
        <div
            id="sg-toast"
            style={{
                position: 'fixed',
                bottom: '2rem',
                right: '2rem',
                zIndex: 9999,
                background: type === 'success' ? '#E64E10' : '#c94008',
                color: '#F7EEEB',
                padding: '1rem 1.5rem',
                borderRadius: '6px',
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '1rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                maxWidth: '380px',
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                opacity: visible ? 1 : 0,
                transition: 'all 0.3s ease',
            }}
        >
            <i className={`fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}`}></i>
            {message}
        </div>
    )
}
