import { forwardRef, useEffect, useRef } from 'react'

/*  ───────────────────────────────────────────────────────────────
 *  SingularityBetaTest3d – WebGL Shader Black Hole
 *
 *  Buraco negro com disco de acreção via fragment shader puro.
 *  Implementação direta com WebGL (sem dependência de react-shaders).
 *  ─────────────────────────────────────────────────────────────── */

const VERTEX_SHADER = `
attribute vec2 a_position;
void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
}
`

const FRAGMENT_SHADER = `
precision highp float;

uniform vec2 iResolution;
uniform float iTime;
uniform float u_speed;
uniform float u_intensity;
uniform float u_size;
uniform float u_waveStrength;
uniform float u_colorShift;

void main() {
    vec2 F = gl_FragCoord.xy;

    // ═══════════════════════════════════════════════════════════
    // 🎯 CENTRO DA SINGULARIDADE (posição na tela)
    // ═══════════════════════════════════════════════════════════
    // A fórmula (F + F - r) / r.y centraliza no meio da tela.
    // ➜ Pra mover pra DIREITA: subtraia do p.x (ex: p.x -= 0.5)
    // ➜ Pra mover pra ESQUERDA: some ao p.x (ex: p.x += 0.5)
    // ➜ Pra mover pra CIMA: subtraia do p.y (ex: p.y -= 0.3)
    // ➜ Pra mover pra BAIXO: some ao p.y (ex: p.y += 0.3)
    // O u_size controla o ZOOM: maior = mais perto / menor = mais longe
    float i = 0.2 * u_speed;
    float a;
    vec2 r = iResolution.xy;
    vec2 p = (F + F - r) / r.y / (0.7 * u_size);

    // ➜ DESCOMENTE e ajuste para mover o centro:
     p.x -= 0.6;   // move o centro pra direita
     p.y -= 0.3;   // move o centro pra cima

    // ═══════════════════════════════════════════════════════════
    // 🌀 DISTORÇÃO GRAVITACIONAL (lente do buraco negro)
    // ═══════════════════════════════════════════════════════════
    // Cria o efeito de curvatura do espaço.
    // ➜ d = vec2(-1,1) define a direção da distorção diagonal.
    //   Mudar pra vec2(-0.5, 1.5) inclina a distorção.
    // ➜ O 0.1 na divisão controla a FORÇA da lente gravitacional.
    //   Menor = distorção mais forte. Maior = mais suave.
    vec2 d = vec2(-1.0, 1.0);
    vec2 b = p - i * d;
    float dotbb = dot(b, b);
    vec2 dterm = d / (0.1 + i / dotbb);
    vec2 c = p * mat2(1.0, dterm.x, 1.0, dterm.y);

    // ═══════════════════════════════════════════════════════════
    // 🔄 ROTAÇÃO DO DISCO DE ACREÇÃO
    // ═══════════════════════════════════════════════════════════
    // a0, a1, a2 criam ângulos de rotação animados.
    // ➜ Os valores 33.0 e 11.0 definem o OFFSET angular.
    //   Mudar esses valores altera o padrão visual do disco.
    // ➜ iTime * i * u_speed controla a VELOCIDADE de rotação.
    a = dot(c, c);
    float la = 0.5 * log(a);
    float t = iTime * i * u_speed;
    float a0 = la + t;
    float a1 = la + t + 33.0;  // ➜ mude pra alterar o padrão do disco
    float a2 = la + t + 11.0;  // ➜ mude pra alterar o padrão do disco

    mat2 rm = mat2(cos(a0), cos(a2), cos(a1), cos(a0));
    vec2 v = (c * rm) / i;
    vec2 w = vec2(0.0);

    // ═══════════════════════════════════════════════════════════
    // 🌊 TURBULÊNCIA (ondulação do disco de acreção)
    // ═══════════════════════════════════════════════════════════
    // Loop que cria as ondas e estrutura do disco.
    // ➜ u_waveStrength: INTENSIDADE das ondas (1.0=suave, 7.0=turbulento)
    // ➜ O 9.0 no loop define QUANTAS camadas de detalhe.
    //   Mais iterações = mais complexidade visual (mas mais pesado).
    // ➜ O 0.7 controla a AMPLITUDE de cada onda.
    // ➜ O 0.5 no final é o OFFSET — muda o padrão geral.
    for (float j = 0.0; j < 9.0; j++) {
        i += 1.0;
        w += 1.0 + sin(v * u_waveStrength);
        v += 0.7 * sin(v.yx * i + iTime * u_speed) / i + 0.5;
    }

    // ═══════════════════════════════════════════════════════════
    // ⭕ FORMA DO ANEL (contorno da singularidade)
    // ═══════════════════════════════════════════════════════════
    // ➜ O 0.3 define a ESPESSURA do anel (menor = mais fino)
    // ➜ O 0.4 define o CONTRASTE do anel
    // ➜ O 3.0 define o TAMANHO/RAIO do anel
    i = length(sin(v / 0.3) * 0.4 + c * (3.0 + d));

    // ═══════════════════════════════════════════════════════════
    // 🎨 CORES (paleta de cores do shader)
    // ═══════════════════════════════════════════════════════════
    // vec4(R, G, B, A) — cada canal de 0.0 a ~2.0
    // ➜ R (vermelho): quanto maior, mais vermelho/laranja
    // ➜ G (verde): valores baixos (~0.4) criam laranja, altos criam amarelo
    // ➜ B (azul): 0.0 = sem azul (quente), negativo = mais quente, positivo = frio
    // ➜ u_colorShift multiplica tudo (1.0 = normal, 2.0 = cores mais vivas)
    //
    // EXEMPLOS:
    // Laranja/Vermelho: vec4(1.5, 0.4, 0.0, 0.0)  ← ATUAL
    // Azul cósmico:     vec4(0.2, 0.4, 1.5, 0.0)
    // Roxo:             vec4(0.8, 0.0, 1.2, 0.0)
    // Dourado:          vec4(1.0, 0.8, 0.0, 0.0)
    // Verde matrix:     vec4(0.0, 1.5, 0.2, 0.0)
    vec4 colorGrad = vec4(1.5, 0.4, 0.0, 0.0) * u_colorShift;
    
    // Envolvemos o c.x em abs() para espelhar o brilho. 
    // Como tiramos o valor negativo do azul, o lado esquerdo ficaria preto sem o abs().
    vec4 expTerm = exp(abs(c.x) * colorGrad);

    // ═══════════════════════════════════════════════════════════
    // 💡 BRILHO E CONTRASTE
    // ═══════════════════════════════════════════════════════════
    // ➜ d1: contraste geral. O /3.0 suaviza (aumentar = mais escuro)
    // ➜ d2: brilho próximo ao centro (0.5 = padrão, menor = mais brilhante)
    // ➜ d3: ESPESSURA DO ANEL CENTRAL. O 0.7 é o RAIO do anel.
    //   Mudar 0.7 pra 0.5 = anel menor. Mudar pra 1.0 = anel maior.
    //   O 0.03 controla o quão SHARP é a borda (menor = mais fino e nítido)
    float d1 = 2.0 + i * i / 3.0 - i;
    float d2 = 0.5 + 1.0 / a;
    float d3 = 0.03 + abs(length(p) - 0.7);

    // ═══════════════════════════════════════════════════════════
    // 🖼️ COR FINAL DO PIXEL
    // ═══════════════════════════════════════════════════════════
    // ➜ u_intensity: multiplicador geral de brilho (1.0 = normal, 2.0 = mais brilhante)
    // ➜ w.xyyx mistura os canais de onda — muda a distribuição de cor
    gl_FragColor = 1.0 - exp(
        -expTerm
        / vec4(w.x, w.y, w.y, w.x)
        / d1
        / d2
        / d3
        * u_intensity
    );
}
`

function createShader(gl, type, source) {
    const shader = gl.createShader(type)
    gl.shaderSource(shader, source)
    gl.compileShader(shader)
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        console.error('Source:', source)
        gl.deleteShader(shader)
        return null
    }
    return shader
}

function createProgram(gl, vsSource, fsSource) {
    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource)
    if (!vs || !fs) return null

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        console.error('Program link error:', gl.getProgramInfoLog(program))
        gl.deleteProgram(program)
        return null
    }
    return program
}

const SingularityBetaTest3d = forwardRef(
    (
        {
            className = '',
            style = {},
            speed = 1.0,
            intensity = 1.0,
            size = 1.0,
            waveStrength = 1.0,
            colorShift = 1.0,
            ...props
        },
        ref,
    ) => {
        const canvasRef = useRef(null)
        const propsRef = useRef({ speed, intensity, size, waveStrength, colorShift })
        propsRef.current = { speed, intensity, size, waveStrength, colorShift }

        useEffect(() => {
            const canvas = canvasRef.current
            if (!canvas) return

            const gl = canvas.getContext('webgl', { alpha: false, antialias: false })
            if (!gl) {
                console.error('WebGL not supported')
                return
            }

            const program = createProgram(gl, VERTEX_SHADER, FRAGMENT_SHADER)
            if (!program) return

            // Fullscreen quad
            const posBuffer = gl.createBuffer()
            gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer)
            gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
                -1, -1, 1, -1, -1, 1,
                -1, 1, 1, -1, 1, 1,
            ]), gl.STATIC_DRAW)

            const posLoc = gl.getAttribLocation(program, 'a_position')
            gl.enableVertexAttribArray(posLoc)
            gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0)

            // Uniform locations
            const uResolution = gl.getUniformLocation(program, 'iResolution')
            const uTime = gl.getUniformLocation(program, 'iTime')
            const uSpeed = gl.getUniformLocation(program, 'u_speed')
            const uIntensity = gl.getUniformLocation(program, 'u_intensity')
            const uSize = gl.getUniformLocation(program, 'u_size')
            const uWaveStrength = gl.getUniformLocation(program, 'u_waveStrength')
            const uColorShift = gl.getUniformLocation(program, 'u_colorShift')

            let animId
            const startTime = performance.now()

            const resize = () => {
                const dpr = Math.min(window.devicePixelRatio, 2)
                const w = canvas.clientWidth
                const h = canvas.clientHeight
                canvas.width = w * dpr
                canvas.height = h * dpr
                gl.viewport(0, 0, canvas.width, canvas.height)
            }

            resize()
            window.addEventListener('resize', resize)

            const render = () => {
                resize()
                const t = (performance.now() - startTime) / 1000
                const p = propsRef.current

                gl.useProgram(program)
                gl.uniform2f(uResolution, canvas.width, canvas.height)
                gl.uniform1f(uTime, t)
                gl.uniform1f(uSpeed, p.speed)
                gl.uniform1f(uIntensity, p.intensity)
                gl.uniform1f(uSize, p.size)
                gl.uniform1f(uWaveStrength, p.waveStrength)
                gl.uniform1f(uColorShift, p.colorShift)

                gl.drawArrays(gl.TRIANGLES, 0, 6)
                animId = requestAnimationFrame(render)
            }

            render()

            return () => {
                cancelAnimationFrame(animId)
                window.removeEventListener('resize', resize)
                gl.deleteProgram(program)
            }
        }, [])

        return (
            <div
                className={className}
                ref={ref}
                style={{
                    width: '100%',
                    height: '100%',
                    background: '#000000',
                    ...style,
                }}
                {...props}
            >
                <canvas
                    ref={canvasRef}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                    }}
                />
            </div>
        )
    },
)

SingularityBetaTest3d.displayName = 'SingularityBetaTest3d'

export default SingularityBetaTest3d
