import { useEffect, useRef, useState } from 'react'

export function useCounter(target, duration = 1800) {
    const [count, setCount] = useState(0)
    const [started, setStarted] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const el = ref.current
        if (!el) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !started) {
                        setStarted(true)
                        observer.unobserve(entry.target)
                    }
                })
            },
            { threshold: 0.5 }
        )

        observer.observe(el)
        return () => observer.disconnect()
    }, [started])

    useEffect(() => {
        if (!started || !target) return

        let start = 0
        const increment = target / (duration / 16)
        let animId

        function update() {
            start += increment
            if (start < target) {
                setCount(Math.floor(start))
                animId = requestAnimationFrame(update)
            } else {
                setCount(target)
            }
        }

        animId = requestAnimationFrame(update)
        return () => cancelAnimationFrame(animId)
    }, [started, target, duration])

    return { ref, count }
}
