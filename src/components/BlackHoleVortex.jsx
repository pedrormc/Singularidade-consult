import { useMemo } from 'react'
import { motion } from 'framer-motion'

function BlackHoleVortex() {
    const paths = useMemo(() => Array.from({ length: 150 }, (_, i) => {
        const startAngle = Math.random() * Math.PI * 2
        const startRadius = 250 + Math.random() * 250

        const startX = 348 + startRadius * Math.cos(startAngle)
        const startY = 158 + startRadius * Math.sin(startAngle) * 0.5

        const endX = 348
        const endY = 158

        const twist = Math.PI / 2 + (Math.random() - 0.5) * Math.PI / 2
        const cp1Angle = startAngle - twist
        const cp1Radius = startRadius * 0.7
        const cp1x = 348 + cp1Radius * Math.cos(cp1Angle)
        const cp1y = 158 + cp1Radius * Math.sin(cp1Angle) * 0.6

        const cp2Angle = startAngle - twist / 2
        const cp2Radius = startRadius * 0.3
        const cp2x = 348 + cp2Radius * Math.cos(cp2Angle)
        const cp2y = 158 + cp2Radius * Math.sin(cp2Angle) * 0.8

        return {
            id: i,
            d: `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`,
            width: 0.25 + Math.random() * 0.5,
            opacity: 0.1 + Math.random() * 0.4,
            duration: 6 + Math.random() * 8,
            delay: Math.random() * 10,
        }
    }), [])

    return (
        <div
            aria-hidden="true"
            style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                pointerEvents: 'none',
            }}
        >
            <svg
                style={{ width: '100%', height: '100%' }}
                viewBox="0 0 696 316"
                fill="none"
                preserveAspectRatio="xMidYMid slice"
            >
                <title>Singularity Vortex</title>
                <defs>
                    {/* Orange radial glow for the black hole center */}
                    <radialGradient id="bhGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="rgba(0,0,0,1)" />
                        <stop offset="30%" stopColor="rgba(0,0,0,0.95)" />
                        <stop offset="55%" stopColor="rgba(230,78,16,0.25)" />
                        <stop offset="75%" stopColor="rgba(255,106,0,0.1)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                    </radialGradient>
                    {/* Subtle orange ring glow */}
                    <radialGradient id="bhRingGlow" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="rgba(255,69,0,0)" />
                        <stop offset="60%" stopColor="rgba(255,69,0,0)" />
                        <stop offset="78%" stopColor="rgba(255,106,0,0.3)" />
                        <stop offset="88%" stopColor="rgba(230,78,16,0.15)" />
                        <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                    </radialGradient>
                </defs>

                {/* Outer glow ring */}
                <circle cx="348" cy="158" r="55" fill="url(#bhRingGlow)" />
                {/* Central black hole with gradient */}
                <circle cx="348" cy="158" r="40" fill="url(#bhGradient)" />
                {/* Inner void */}
                <circle cx="348" cy="158" r="5" fill="black" />

                {/* Animated particle paths spiraling into the singularity */}
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="#FF6A00"
                        strokeWidth={path.width}
                        strokeOpacity={path.opacity}
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: path.duration,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: path.delay,
                        }}
                    />
                ))}
            </svg>
        </div>
    )
}

export default BlackHoleVortex
