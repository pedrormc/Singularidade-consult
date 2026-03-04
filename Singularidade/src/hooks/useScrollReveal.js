import { useEffect, useRef } from 'react'

export function useScrollReveal() {
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        )

        // Observe the element itself and all children with data-reveal
        const revealEls = el.querySelectorAll('[data-reveal]')
        revealEls.forEach(child => observer.observe(child))

        // Also observe the element if it has data-reveal
        if (el.hasAttribute('data-reveal')) {
            observer.observe(el)
        }

        return () => observer.disconnect()
    }, [])

    return ref
}

export function useScrollRevealAll() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('revealed')
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
        )

        const els = document.querySelectorAll('[data-reveal]')
        els.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])
}
