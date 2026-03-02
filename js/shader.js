/**
 * shader.js — WebGL 3D Text Shader for Hero Section
 *
 * Technique:
 *  1. Draw text onto an offscreen 2D canvas → use as a WebGL texture
 *  2. Vertex shader: full-screen quad
 *  3. Fragment shader: metallic chrome effect, animated light sweep,
 *     3D depth (multi-layer offset shadows), neon glow, wave distortion
 */

export class HeroShader {
  /**
   * @param {HTMLCanvasElement} canvas  - The target WebGL canvas
   * @param {string}            text    - The text to render in 3D
   */
  constructor(canvas, text = 'Family Dental Care') {
    this.canvas  = canvas;
    this.text    = text;
    this.gl      = null;
    this.program = null;
    this.startTime = performance.now();
    this._raf = null;
    this._textTexture    = null;
    this._glowTexture    = null;
    this._uniTime        = null;
    this._uniRes         = null;
    this._uniText        = null;
    this._uniGlow        = null;
  }

  init() {
    const gl = this.canvas.getContext('webgl', {
      antialias: true,
      alpha: true,
      premultipliedAlpha: false,
    });
    if (!gl) {
      console.warn('WebGL not supported — hero shader disabled.');
      return false;
    }
    this.gl = gl;

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

    if (!this._buildProgram()) return false;
    this._buildGeometry();
    this._buildTextTexture();
    this._bindUniforms();
    this._resize();
    window.addEventListener('resize', () => this._resize());
    return true;
  }

  start() {
    const loop = () => {
      this._draw();
      this._raf = requestAnimationFrame(loop);
    };
    loop();
  }

  stop() {
    if (this._raf) cancelAnimationFrame(this._raf);
  }

  // ── Private ──────────────────────────────

  _buildProgram() {
    const gl = this.gl;
    const vert = this._compile(gl.VERTEX_SHADER, VERT_SRC);
    const frag = this._compile(gl.FRAGMENT_SHADER, FRAG_SRC);
    if (!vert || !frag) return false;

    const prog = gl.createProgram();
    gl.attachShader(prog, vert);
    gl.attachShader(prog, frag);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      console.error('Shader link error:', gl.getProgramInfoLog(prog));
      return false;
    }
    this.program = prog;
    return true;
  }

  _compile(type, src) {
    const gl = this.gl;
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      console.error('Shader compile error:', gl.getShaderInfoLog(sh));
      return null;
    }
    return sh;
  }

  _buildGeometry() {
    const gl = this.gl;
    // Full-screen triangle strip (two triangles)
    const verts = new Float32Array([
      -1, -1,   1, -1,   -1,  1,   1,  1,
    ]);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, verts, gl.STATIC_DRAW);

    gl.useProgram(this.program);
    const aPos = gl.getAttribLocation(this.program, 'aPosition');
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);
  }

  _buildTextTexture() {
    const gl  = this.gl;
    const W   = 1024;
    const H   = 256;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // ── Text texture ───────────────────────
    const offscreen  = document.createElement('canvas');
    offscreen.width  = W * dpr;
    offscreen.height = H * dpr;
    const ctx  = offscreen.getContext('2d');
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, W, H);

    // Multi-line layout
    const lines = this._wrapText(this.text, W - 40);
    const totalLines = lines.length;
    const baseFontSize = totalLines <= 1 ? 88 : totalLines === 2 ? 66 : 52;

    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `700 ${baseFontSize}px "Playfair Display", Georgia, serif`;

    const lineHeight = baseFontSize * 1.15;
    const startY = H / 2 - ((totalLines - 1) * lineHeight) / 2;
    lines.forEach((line, i) => {
      ctx.fillText(line, W / 2, startY + i * lineHeight);
    });

    this._textTexture = this._uploadTexture(offscreen);

    // ── Glow texture (blurred copy) ────────
    const glow  = document.createElement('canvas');
    glow.width  = W * dpr;
    glow.height = H * dpr;
    const gctx  = glow.getContext('2d');
    gctx.filter = `blur(${dpr * 12}px)`;
    gctx.drawImage(offscreen, 0, 0);

    this._glowTexture = this._uploadTexture(glow);
  }

  _wrapText(text, maxWidth) {
    // Simple word-wrap on a hidden canvas
    const tmp = document.createElement('canvas');
    const ctx = tmp.getContext('2d');
    ctx.font = '700 88px "Playfair Display", Georgia, serif';
    const words = text.split(' ');
    const lines = [];
    let current = '';
    for (const w of words) {
      const test = current ? `${current} ${w}` : w;
      if (ctx.measureText(test).width > maxWidth && current) {
        lines.push(current);
        current = w;
      } else {
        current = test;
      }
    }
    if (current) lines.push(current);
    return lines;
  }

  _uploadTexture(source) {
    const gl  = this.gl;
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return tex;
  }

  _bindUniforms() {
    const gl   = this.gl;
    const prog = this.program;
    gl.useProgram(prog);
    this._uniTime = gl.getUniformLocation(prog, 'uTime');
    this._uniRes  = gl.getUniformLocation(prog, 'uRes');
    this._uniText = gl.getUniformLocation(prog, 'uText');
    this._uniGlow = gl.getUniformLocation(prog, 'uGlow');

    gl.uniform1i(this._uniText, 0);
    gl.uniform1i(this._uniGlow, 1);
  }

  _resize() {
    const gl   = this.gl;
    const dpr  = Math.min(window.devicePixelRatio || 1, 2);
    const w    = this.canvas.clientWidth;
    const h    = this.canvas.clientHeight;
    this.canvas.width  = w * dpr;
    this.canvas.height = h * dpr;
    gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    if (this._uniRes) gl.uniform2f(this._uniRes, this.canvas.width, this.canvas.height);
  }

  _draw() {
    const gl = this.gl;
    const t  = (performance.now() - this.startTime) / 1000;

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    gl.useProgram(this.program);
    gl.uniform1f(this._uniTime, t);

    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, this._textTexture);

    gl.activeTexture(gl.TEXTURE1);
    gl.bindTexture(gl.TEXTURE_2D, this._glowTexture);

    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  }
}

/* ── GLSL Shaders ──────────────────────────────────────────── */

const VERT_SRC = /* glsl */`
  attribute vec2 aPosition;
  varying   vec2 vUV;

  void main() {
    vUV         = aPosition * 0.5 + 0.5;
    gl_Position = vec4(aPosition, 0.0, 1.0);
  }
`;

const FRAG_SRC = /* glsl */`
  precision mediump float;

  uniform sampler2D uText;
  uniform sampler2D uGlow;
  uniform float     uTime;
  uniform vec2      uRes;
  varying vec2      vUV;

  /* ── Helpers ─────────────────────────────── */

  /* Smooth step between two edges */
  float remap(float v, float lo, float hi) {
    return clamp((v - lo) / (hi - lo), 0.0, 1.0);
  }

  /* Chromatic aberration: sample r/g/b at slightly offset UVs */
  vec4 chromaSample(sampler2D tex, vec2 uv, float str) {
    float r = texture2D(tex, uv + vec2( str, 0.0)).r;
    float g = texture2D(tex, uv                  ).g;
    float b = texture2D(tex, uv - vec2( str, 0.0)).b;
    float a = texture2D(tex, uv                  ).a;
    return vec4(r, g, b, a);
  }

  /* Metallic chrome gradient (dark/light/dark bands) */
  vec3 chrome(float t) {
    vec3 dark  = vec3(0.55, 0.70, 0.95);   /* cool blue-silver */
    vec3 light = vec3(0.95, 0.97, 1.00);   /* near-white specular */
    vec3 gold  = vec3(0.95, 0.82, 0.45);   /* warm gold shimmer */

    /* Animated ripple across Y axis */
    float bands = sin(t * 2.0 + uTime * 0.9) * 0.5 + 0.5;

    vec3 base = mix(dark, light, pow(sin(t * 3.14159), 2.0));
    return mix(base, gold, bands * 0.35);
  }

  void main() {
    vec2 uv = vUV;

    /* ── Subtle wave distortion ─────────────── */
    float wave = sin(uv.x * 12.0 + uTime * 1.4) * 0.004
               + cos(uv.y * 8.0  - uTime * 0.8) * 0.003;
    uv.y += wave;

    /* ── Chromatic aberration on text ────────── */
    float aberr = 0.004 + 0.002 * sin(uTime * 0.7);
    vec4  textSample = chromaSample(uText, uv, aberr);
    float alpha = textSample.a;

    /* ── Glow layer ──────────────────────────── */
    float glow  = texture2D(uGlow, uv).a * 0.85;

    /* ── Chrome colouring ────────────────────── */
    vec3 col = chrome(uv.y + 0.1 * sin(uv.x * 4.0 + uTime));

    /* ── 3D extrusion (stacked shadow layers) ── */
    vec3  shadowCol = vec3(0.04, 0.10, 0.28);
    float depth     = 0.0;
    for (float i = 1.0; i <= 6.0; i++) {
      vec2  offset = vec2(i * 0.0025, i * 0.0030);
      float layer  = texture2D(uText, uv + offset).a;
      depth += layer * (1.0 - i / 7.0) * 0.55;
    }
    /* Front-lit bevel highlight */
    float highlight = texture2D(uText, uv - vec2(0.003, 0.003)).a * 0.5;

    /* ── Animated light sweep ─────────────── */
    float sweepPos  = fract(uTime * 0.22) * 1.4 - 0.2;
    float sweep     = remap(uv.x, sweepPos - 0.08, sweepPos) *
                      remap(uv.x, sweepPos + 0.08, sweepPos);
    sweep = pow(sweep, 2.0) * alpha * 1.6;

    /* ── Gold accent pulse ─────────────────── */
    float pulse = 0.5 + 0.5 * sin(uTime * 1.8);
    vec3  goldAccent = vec3(1.0, 0.85, 0.35) * pulse * 0.4;

    /* ── Compose ────────────────────────────── */
    vec3 final = col;
    final  = mix(final, shadowCol, depth);
    final += vec3(highlight);
    final += vec3(sweep);
    final += goldAccent * glow;

    /* ── Glow halo colour (teal-blue) ─────── */
    vec3 glowCol = vec3(0.15, 0.60, 0.95);
    final += glowCol * glow * 0.55;

    /* ── Edge softness ─────────────────────── */
    float edgeFade = remap(uv.x, 0.0, 0.04) * remap(uv.x, 1.0, 0.96)
                   * remap(uv.y, 0.0, 0.04) * remap(uv.y, 1.0, 0.96);

    float totalAlpha = clamp(alpha + glow * 0.45, 0.0, 1.0) * edgeFade;

    gl_FragColor = vec4(final, totalAlpha);
  }
`;
