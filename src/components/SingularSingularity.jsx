import { useEffect, useRef } from 'react'

/*  ───────────────────────────────────────────────────────────────
 *  SingularSingularity – Canvas 2D Black Hole Accretion Disk
 *
 *  Renderiza um buraco negro estilo Interstellar com:
 *  - Disco de acreção elíptico com brilho laranja/âmbar
 *  - Linha de acreção cruzando na frente do buraco negro
 *  - Partículas orbitando em espiral
 *  - Centro escuro com horizonte de eventos
 *  ─────────────────────────────────────────────────────────────── */

const PARTICLE_COUNT = 140
const RING_PARTICLE_COUNT = 250

const COLORS = [
    'rgba(255, 140, 20, ',    // laranja vivo
    'rgba(255, 100, 10, ',    // laranja escuro
    'rgba(255, 180, 50, ',    // âmbar dourado
    'rgba(255, 200, 80, ',    // amarelo quente
    'rgba(255, 120, 0, ',     // laranja intenso
    'rgba(220, 80, 0, ',      // vermelho-laranja
    'rgba(255, 160, 30, ',    // laranja médio
    'rgba(255, 220, 120, ',   // amarelo claro
]

function createParticle(w, h, centerX, centerY) {
    const angle = Math.random() * Math.PI * 2
    const radius = 100 + Math.random() * Math.max(w, h) * 0.5
    return {
        angle,
        radius,
        baseRadius: radius,
        speed: 0.002 + Math.random() * 0.005,
        drift: 0.015 + Math.random() * 0.12,
        size: 0.5 + Math.random() * 2,
        opacity: 0.15 + Math.random() * 0.55,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        trail: [],
        trailMax: 4 + Math.floor(Math.random() * 10),
        centerX,
        centerY,
        ellipseRatio: 0.28 + Math.random() * 0.2,
        orbitTilt: -0.25 + Math.random() * 0.1,
    }
}

function createRingParticle(centerX, centerY, ehR) {
    const angle = Math.random() * Math.PI * 2
    const band = ehR * (1.05 + Math.random() * 1.2)
    return {
        angle,
        radius: band,
        speed: 0.006 + Math.random() * 0.014,
        size: 0.3 + Math.random() * 1.4,
        opacity: 0.25 + Math.random() * 0.65,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        ellipseRatio: 0.35,
    }
}

export default function SingularSingularity() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext('2d')
        let w, h, centerX, centerY
        let particles = []
        let ringParticles = []
        let frameId
        let EH = 70       // event horizon radius
        let time = 0

        // ── Estrelas estáticas ──────────────────────────────────────
        let stars = []

        const resize = () => {
            const parent = canvas.parentElement
            w = parent.clientWidth
            h = parent.clientHeight
            const dpr = Math.min(window.devicePixelRatio, 2)
            canvas.width = w * dpr
            canvas.height = h * dpr
            canvas.style.width = w + 'px'
            canvas.style.height = h + 'px'
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

            centerX = w * 0.75
            centerY = h * 0.48
            EH = Math.min(w, h) * 0.13
            if (EH < 40) EH = 40

            particles = Array.from({ length: PARTICLE_COUNT }, () =>
                createParticle(w, h, centerX, centerY)
            )
            ringParticles = Array.from({ length: RING_PARTICLE_COUNT }, () =>
                createRingParticle(centerX, centerY, EH)
            )
            stars = Array.from({ length: 250 }, () => ({
                x: Math.random() * w,
                y: Math.random() * h,
                r: Math.random() * 1.1,
                o: 0.15 + Math.random() * 0.55,
                phase: Math.random() * Math.PI * 2,
                freq: 0.008 + Math.random() * 0.025,
            }))
        }

        resize()
        window.addEventListener('resize', resize)

        /* ════════════════════════════════════════════════════════════ */
        /*  DRAW FUNCTIONS                                             */
        /* ════════════════════════════════════════════════════════════ */

        const DISK_TILT = -0.12          // inclinação do plano do disco
        const DISK_ELLIPSE = 0.35        // achatamento vertical

        // ── Estrelas de fundo ────────────────────────────────────────
        const drawStars = () => {
            for (const s of stars) {
                const tw = 0.5 + 0.5 * Math.sin(time * s.freq + s.phase)
                ctx.beginPath()
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(255,240,220,${s.o * tw})`
                ctx.fill()
            }
        }

        // ── Glow ambiental atrás do buraco negro ────────────────────
        const drawBackGlow = () => {
            const g = ctx.createRadialGradient(centerX, centerY, EH * 0.5, centerX, centerY, EH * 4)
            g.addColorStop(0, 'rgba(100, 40, 0, 0.08)')
            g.addColorStop(0.3, 'rgba(180, 80, 0, 0.06)')
            g.addColorStop(0.6, 'rgba(255, 120, 20, 0.03)')
            g.addColorStop(1, 'rgba(0,0,0,0)')
            ctx.beginPath()
            ctx.arc(centerX, centerY, EH * 4, 0, Math.PI * 2)
            ctx.fillStyle = g
            ctx.fill()
        }

        // ── Disco de acreção (arcos elípticos brilhantes) ───────────
        const drawAccretionEllipse = (half) => {
            // half: 'back' = arco traseiro, 'front' = arco frontal
            ctx.save()
            ctx.translate(centerX, centerY)
            ctx.rotate(DISK_TILT)

            const startAngle = half === 'back' ? Math.PI : 0
            const endAngle = half === 'back' ? Math.PI * 2 : Math.PI

            // Múltiplas camadas do disco — de fora pra dentro
            const rings = [
                { rx: EH * 3.0, w: EH * 0.6, colors: ['255,80,0', '255,120,20'], alphaBase: 0.04 },
                { rx: EH * 2.5, w: EH * 0.5, colors: ['255,100,10', '255,140,30'], alphaBase: 0.08 },
                { rx: EH * 2.1, w: EH * 0.45, colors: ['255,130,20', '255,170,50'], alphaBase: 0.14 },
                { rx: EH * 1.7, w: EH * 0.4, colors: ['255,160,40', '255,200,70'], alphaBase: 0.22 },
                { rx: EH * 1.4, w: EH * 0.3, colors: ['255,190,60', '255,220,100'], alphaBase: 0.3 },
                { rx: EH * 1.2, w: EH * 0.15, colors: ['255,210,80', '255,240,160'], alphaBase: 0.45 },
            ]

            for (const ring of rings) {
                const ry = ring.rx * DISK_ELLIPSE

                // Outer glow
                ctx.beginPath()
                ctx.ellipse(0, 0, ring.rx + ring.w, ry + ring.w * DISK_ELLIPSE, 0, startAngle, endAngle)
                ctx.lineWidth = ring.w * 2
                ctx.strokeStyle = `rgba(${ring.colors[0]}, ${ring.alphaBase * 0.4})`
                ctx.stroke()

                // Main ring
                ctx.beginPath()
                ctx.ellipse(0, 0, ring.rx, ry, 0, startAngle, endAngle)
                ctx.lineWidth = ring.w
                ctx.strokeStyle = `rgba(${ring.colors[1]}, ${ring.alphaBase})`
                ctx.stroke()

                // Inner bright edge
                ctx.beginPath()
                ctx.ellipse(0, 0, ring.rx - ring.w * 0.3, ry - ring.w * 0.3 * DISK_ELLIPSE, 0, startAngle, endAngle)
                ctx.lineWidth = ring.w * 0.3
                ctx.strokeStyle = `rgba(${ring.colors[1]}, ${ring.alphaBase * 1.2})`
                ctx.stroke()
            }

            ctx.restore()
        }

        // ── Linha de acreção (banda brilhante diagonal) ──────────────
        const drawAccretionBand = () => {
            ctx.save()
            ctx.translate(centerX, centerY)
            ctx.rotate(DISK_TILT)

            const len = EH * 4
            const bandH = EH * 0.08

            // Camadas de glow
            for (let i = 4; i >= 0; i--) {
                const h = bandH * (1 + i * 1.5)
                const alpha = 0.08 / (i + 1)

                const g = ctx.createLinearGradient(-len, 0, len, 0)
                g.addColorStop(0, `rgba(255,80,0,0)`)
                g.addColorStop(0.1, `rgba(255,100,10,${alpha * 0.3})`)
                g.addColorStop(0.3, `rgba(255,150,30,${alpha})`)
                g.addColorStop(0.5, `rgba(255,200,80,${alpha * 1.5})`)
                g.addColorStop(0.7, `rgba(255,150,30,${alpha})`)
                g.addColorStop(0.9, `rgba(255,100,10,${alpha * 0.3})`)
                g.addColorStop(1, `rgba(255,80,0,0)`)

                ctx.beginPath()
                ctx.ellipse(0, 0, len, h, 0, 0, Math.PI * 2)
                ctx.fillStyle = g
                ctx.fill()
            }

            // Linha central brilhante fina
            const cg = ctx.createLinearGradient(-len, 0, len, 0)
            cg.addColorStop(0, 'rgba(255,100,0,0)')
            cg.addColorStop(0.2, 'rgba(255,170,50,0.2)')
            cg.addColorStop(0.4, 'rgba(255,230,120,0.55)')
            cg.addColorStop(0.5, 'rgba(255,245,180,0.8)')
            cg.addColorStop(0.6, 'rgba(255,230,120,0.55)')
            cg.addColorStop(0.8, 'rgba(255,170,50,0.2)')
            cg.addColorStop(1, 'rgba(255,100,0,0)')

            ctx.beginPath()
            ctx.ellipse(0, 0, len, bandH * 0.4, 0, 0, Math.PI * 2)
            ctx.fillStyle = cg
            ctx.fill()

            ctx.restore()
        }

        // ── Horizonte de Eventos (centro escuro) ─────────────────────
        const drawEventHorizon = () => {
            // Sombra sólida
            const g1 = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, EH * 2)
            g1.addColorStop(0, 'rgba(0,0,0,1)')
            g1.addColorStop(0.45, 'rgba(0,0,0,1)')
            g1.addColorStop(0.65, 'rgba(0,0,0,0.97)')
            g1.addColorStop(0.78, 'rgba(20,10,0,0.5)')
            g1.addColorStop(0.88, 'rgba(255,130,20,0.12)')
            g1.addColorStop(1, 'rgba(255,100,0,0)')

            ctx.beginPath()
            ctx.arc(centerX, centerY, EH * 2, 0, Math.PI * 2)
            ctx.fillStyle = g1
            ctx.fill()

            // Anel de fótons
            ctx.beginPath()
            ctx.arc(centerX, centerY, EH * 0.92, 0, Math.PI * 2)
            ctx.strokeStyle = 'rgba(255,200,80,0.22)'
            ctx.lineWidth = 1.5
            ctx.stroke()

            ctx.beginPath()
            ctx.arc(centerX, centerY, EH, 0, Math.PI * 2)
            ctx.strokeStyle = 'rgba(255,160,40,0.08)'
            ctx.lineWidth = 5
            ctx.stroke()
        }

        // ── Partículas do anel denso ─────────────────────────────────
        const drawRingParts = () => {
            ctx.save()
            ctx.translate(centerX, centerY)
            ctx.rotate(DISK_TILT)

            for (const p of ringParticles) {
                p.angle += p.speed
                const x = Math.cos(p.angle) * p.radius
                const y = Math.sin(p.angle) * p.radius * p.ellipseRatio

                // Não desenha partícula se dentro do horizonte de eventos
                const dist = Math.sqrt(x * x + y * y)
                if (dist < EH * 0.85) continue

                const gr = p.size * 2.2
                const g = ctx.createRadialGradient(x, y, 0, x, y, gr)
                g.addColorStop(0, p.color + p.opacity + ')')
                g.addColorStop(0.5, p.color + (p.opacity * 0.25) + ')')
                g.addColorStop(1, p.color + '0)')

                ctx.beginPath()
                ctx.arc(x, y, gr, 0, Math.PI * 2)
                ctx.fillStyle = g
                ctx.fill()

                ctx.beginPath()
                ctx.arc(x, y, p.size * 0.4, 0, Math.PI * 2)
                ctx.fillStyle = p.color + Math.min(p.opacity + 0.3, 1) + ')'
                ctx.fill()
            }
            ctx.restore()
        }

        // ── Partículas orbitais espalhadas ───────────────────────────
        const drawOrbitalParticles = () => {
            for (const p of particles) {
                p.angle += p.speed
                p.radius -= p.drift

                if (p.radius < EH * 0.6) {
                    Object.assign(p, createParticle(w, h, centerX, centerY))
                    continue
                }

                const x = p.centerX + Math.cos(p.angle) * p.radius
                const y = p.centerY + Math.sin(p.angle) * p.radius * p.ellipseRatio

                p.trail.push({ x, y })
                if (p.trail.length > p.trailMax) p.trail.shift()

                if (p.trail.length > 1) {
                    ctx.beginPath()
                    ctx.moveTo(p.trail[0].x, p.trail[0].y)
                    for (let t = 1; t < p.trail.length; t++) {
                        ctx.lineTo(p.trail[t].x, p.trail[t].y)
                    }
                    ctx.strokeStyle = p.color + (p.opacity * 0.2) + ')'
                    ctx.lineWidth = p.size * 0.35
                    ctx.stroke()
                }

                const gr = p.size * 2.5
                const g = ctx.createRadialGradient(x, y, 0, x, y, gr)
                g.addColorStop(0, p.color + p.opacity + ')')
                g.addColorStop(0.4, p.color + (p.opacity * 0.3) + ')')
                g.addColorStop(1, p.color + '0)')

                ctx.beginPath()
                ctx.arc(x, y, gr, 0, Math.PI * 2)
                ctx.fillStyle = g
                ctx.fill()

                ctx.beginPath()
                ctx.arc(x, y, p.size, 0, Math.PI * 2)
                ctx.fillStyle = p.color + Math.min(p.opacity + 0.15, 1) + ')'
                ctx.fill()
            }
        }

        /* ════════════════════════════════════════════════════════════ */
        /*  FRAME LOOP                                                 */
        /* ════════════════════════════════════════════════════════════ */
        const draw = () => {
            time++

            ctx.clearRect(0, 0, w, h)
            ctx.fillStyle = '#050505'
            ctx.fillRect(0, 0, w, h)

            drawStars()
            drawBackGlow()

            // Disco atrás
            drawAccretionEllipse('back')

            // Partículas do anel (atrás do horizonte)
            drawRingParts()

            // Partículas orbitais espalhadas
            drawOrbitalParticles()

            // Horizonte de eventos
            drawEventHorizon()

            // Linha de acreção na frente
            drawAccretionBand()

            // Disco na frente
            drawAccretionEllipse('front')

            frameId = requestAnimationFrame(draw)
        }

        ctx.fillStyle = '#050505'
        ctx.fillRect(0, 0, w, h)
        draw()

        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('resize', resize)
        }
    }, [])

    return (
        <div
            className="singular-singularity-bg"
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: 0,
                backgroundColor: '#050505',
                overflow: 'hidden'
            }}
        >
            <canvas
                ref={canvasRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    )
}
