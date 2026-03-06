import { useEffect, useRef } from 'react'
import * as THREE from 'three'

/*
 * BlackHole3D — Componente 3D standalone de buraco negro
 *
 * Renderiza um buraco negro com:
 *   - Esfera do horizonte de eventos (preto absoluto)
 *   - Disco de acreção (anel inclinado com gradiente laranja brilhante)
 *   - Campo de estrelas orbitando
 *   - Efeito de zoom in/out controlado pelo scroll da página
 *
 * Uso: <BlackHole3D /> como background fixo na tela
 */

// Shader para o disco de acreção — brilho laranja com variação radial
const DISK_VERTEX = `
  varying vec2 vUv;
  varying float vDist;
  void main() {
    vUv = uv;
    vDist = length(position.xz);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`

const DISK_FRAGMENT = `
  uniform float uTime;
  varying vec2 vUv;
  varying float vDist;

  void main() {
    // Gradiente radial: brilhante no meio do anel, escurece nas bordas
    float ring = 1.0 - abs(vUv.y - 0.5) * 2.0;
    ring = pow(ring, 1.5);

    // Cor base: gradiente laranja → amarelo
    vec3 innerColor = vec3(1.0, 0.85, 0.3);  // Amarelo quente
    vec3 outerColor = vec3(0.9, 0.25, 0.0);  // Laranja profundo
    float t = smoothstep(1.2, 2.8, vDist);
    vec3 col = mix(innerColor, outerColor, t);

    // Turbulência rotacional
    float angle = atan(vUv.y - 0.5, vUv.x - 0.5);
    float swirl = sin(angle * 8.0 + uTime * 2.0 + vDist * 3.0) * 0.15 + 0.85;

    // Intensidade final
    float alpha = ring * swirl;
    alpha *= smoothstep(0.0, 0.3, ring); // Suaviza bordas

    gl_FragColor = vec4(col * (1.0 + ring * 0.5), alpha * 0.9);
  }
`

export default function BlackHole3D() {
    const containerRef = useRef(null)
    const scrollRef = useRef(0)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        // ===== SCENE SETUP =====
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
            60,
            container.clientWidth / container.clientHeight,
            0.1,
            1000
        )
        camera.position.set(0, 1.5, 8)
        camera.lookAt(0, 0, 0)

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false })
        renderer.setSize(container.clientWidth, container.clientHeight)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        renderer.setClearColor(0x000000, 1)
        container.appendChild(renderer.domElement)

        // ===== HORIZONTE DE EVENTOS (esfera preta) =====
        const bhGeometry = new THREE.SphereGeometry(1, 64, 64)
        const bhMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 })
        const blackHole = new THREE.Mesh(bhGeometry, bhMaterial)
        scene.add(blackHole)

        // ===== GLOW interno (halo laranja em volta da esfera) =====
        const glowGeometry = new THREE.SphereGeometry(1.15, 64, 64)
        const glowMaterial = new THREE.ShaderMaterial({
            transparent: true,
            side: THREE.BackSide,
            uniforms: {
                uColor: { value: new THREE.Color(1.0, 0.35, 0.0) }
            },
            vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
            fragmentShader: `
        uniform vec3 uColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 3.0);
          gl_FragColor = vec4(uColor, intensity * 0.8);
        }
      `
        })
        const glow = new THREE.Mesh(glowGeometry, glowMaterial)
        scene.add(glow)

        // ===== DISCO DE ACREÇÃO (anel inclinado) =====
        const diskGeometry = new THREE.RingGeometry(1.3, 3.2, 128, 8)
        const diskMaterial = new THREE.ShaderMaterial({
            vertexShader: DISK_VERTEX,
            fragmentShader: DISK_FRAGMENT,
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false,
            uniforms: {
                uTime: { value: 0 }
            }
        })
        const disk = new THREE.Mesh(diskGeometry, diskMaterial)
        disk.rotation.x = -Math.PI * 0.42 // Inclinação do disco
        scene.add(disk)

        // Segundo disco mais fraco (lensing effect)
        const disk2Geometry = new THREE.RingGeometry(1.2, 2.8, 128, 4)
        const disk2Material = new THREE.ShaderMaterial({
            vertexShader: DISK_VERTEX,
            fragmentShader: DISK_FRAGMENT,
            transparent: true,
            side: THREE.DoubleSide,
            depthWrite: false,
            uniforms: {
                uTime: { value: 0 }
            }
        })
        const disk2 = new THREE.Mesh(disk2Geometry, disk2Material)
        disk2.rotation.x = Math.PI * 0.42
        disk2.rotation.z = Math.PI * 0.05
        scene.add(disk2)

        // ===== CAMPO DE ESTRELAS (partículas orbitando) =====
        const starCount = 2000
        const starPositions = new Float32Array(starCount * 3)
        const starSizes = new Float32Array(starCount)
        const starSpeeds = new Float32Array(starCount)

        for (let i = 0; i < starCount; i++) {
            const radius = 4 + Math.random() * 40
            const theta = Math.random() * Math.PI * 2
            const phi = (Math.random() - 0.5) * Math.PI * 0.6

            starPositions[i * 3] = radius * Math.cos(theta) * Math.cos(phi)
            starPositions[i * 3 + 1] = radius * Math.sin(phi) * 0.4
            starPositions[i * 3 + 2] = radius * Math.sin(theta) * Math.cos(phi)

            starSizes[i] = 0.5 + Math.random() * 2.0
            starSpeeds[i] = (0.02 + Math.random() * 0.08) / Math.sqrt(radius)
        }

        const starGeometry = new THREE.BufferGeometry()
        starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3))
        starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1))

        const starMaterial = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            uniforms: {
                uTime: { value: 0 },
                uPixelRatio: { value: renderer.getPixelRatio() }
            },
            vertexShader: `
        attribute float size;
        uniform float uTime;
        uniform float uPixelRatio;
        varying float vAlpha;
        void main() {
          vec3 pos = position;
          float dist = length(pos.xz);
          float speed = 0.05 / sqrt(max(dist, 1.0));
          float angle = atan(pos.z, pos.x) + uTime * speed;
          pos.x = dist * cos(angle);
          pos.z = dist * sin(angle);
          
          vAlpha = smoothstep(50.0, 4.0, dist);
          
          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = size * uPixelRatio * (200.0 / -mvPosition.z);
          gl_PointSize = clamp(gl_PointSize, 0.5, 8.0);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,
            fragmentShader: `
        varying float vAlpha;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float glow = exp(-d * 6.0);
          vec3 col = mix(vec3(1.0, 0.6, 0.1), vec3(1.0, 1.0, 0.9), glow);
          gl_FragColor = vec4(col, glow * vAlpha * 0.8);
        }
      `
        })
        const stars = new THREE.Points(starGeometry, starMaterial)
        scene.add(stars)

        // ===== ESTRELAS DISTANTES (fundo estático) =====
        const bgStarCount = 3000
        const bgPositions = new Float32Array(bgStarCount * 3)
        for (let i = 0; i < bgStarCount; i++) {
            const r = 50 + Math.random() * 200
            const theta = Math.random() * Math.PI * 2
            const phi = (Math.random() - 0.5) * Math.PI
            bgPositions[i * 3] = r * Math.cos(theta) * Math.cos(phi)
            bgPositions[i * 3 + 1] = r * Math.sin(phi)
            bgPositions[i * 3 + 2] = r * Math.sin(theta) * Math.cos(phi)
        }
        const bgStarGeo = new THREE.BufferGeometry()
        bgStarGeo.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3))
        const bgStarMat = new THREE.PointsMaterial({
            color: 0xffffff,
            size: 0.15,
            transparent: true,
            opacity: 0.6,
            sizeAttenuation: true
        })
        const bgStars = new THREE.Points(bgStarGeo, bgStarMat)
        scene.add(bgStars)

        // ===== LUZ AMBIENTE =====
        scene.add(new THREE.AmbientLight(0xff6600, 0.3))

        // ===== SCROLL → ZOOM =====
        const baseZ = 8
        const minZ = 3    // Zoom máximo (perto)
        const maxZ = 16   // Zoom mínimo (longe)

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop
            const docHeight = document.documentElement.scrollHeight - window.innerHeight
            const scrollFraction = Math.min(scrollTop / Math.max(docHeight, 1), 1)
            scrollRef.current = scrollFraction
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        // ===== ANIMAÇÃO =====
        let frameId
        const clock = new THREE.Clock()

        const animate = () => {
            const elapsed = clock.getElapsedTime()

            // Zoom baseado no scroll
            const targetZ = baseZ + (minZ - baseZ) * scrollRef.current * 2
            camera.position.z += (Math.max(minZ, Math.min(maxZ, targetZ)) - camera.position.z) * 0.05
            camera.position.y = 1.5 - scrollRef.current * 0.8
            camera.lookAt(0, 0, 0)

            // Rotações
            disk.rotation.z = elapsed * 0.15
            disk2.rotation.z = -elapsed * 0.12

            // Uniforms
            diskMaterial.uniforms.uTime.value = elapsed
            disk2Material.uniforms.uTime.value = elapsed
            starMaterial.uniforms.uTime.value = elapsed

            // Rotação lenta do campo de estrelas de fundo
            bgStars.rotation.y = elapsed * 0.005

            renderer.render(scene, camera)
            frameId = requestAnimationFrame(animate)
        }
        animate()

        // ===== RESIZE =====
        const handleResize = () => {
            const w = container.clientWidth
            const h = container.clientHeight
            camera.aspect = w / h
            camera.updateProjectionMatrix()
            renderer.setSize(w, h)
        }
        window.addEventListener('resize', handleResize)

        // ===== CLEANUP =====
        return () => {
            cancelAnimationFrame(frameId)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleScroll)
            if (container.contains(renderer.domElement)) {
                container.removeChild(renderer.domElement)
            }
            bhGeometry.dispose()
            bhMaterial.dispose()
            glowGeometry.dispose()
            glowMaterial.dispose()
            diskGeometry.dispose()
            diskMaterial.dispose()
            disk2Geometry.dispose()
            disk2Material.dispose()
            starGeometry.dispose()
            starMaterial.dispose()
            bgStarGeo.dispose()
            bgStarMat.dispose()
            renderer.dispose()
        }
    }, [])

    return (
        <div
            ref={containerRef}
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: -1,
                backgroundColor: '#000000',
                overflow: 'hidden'
            }}
        />
    )
}
