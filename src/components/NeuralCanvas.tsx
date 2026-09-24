import { useEffect, useRef } from 'react';
type P = { x: number; y: number; vx: number; vy: number };
/** Background network: nodes drift and link to each other and to the cursor. */
export default function NeuralCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current!, g = c.getContext('2d')!;
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let w = 0, h = 0, raf = 0, p: P[] = [];
    const m = { x: -999, y: -999 };
    const size = () => {
      const d = Math.min(devicePixelRatio, 2); w = innerWidth; h = innerHeight;
      c.width = w * d; c.height = h * d; g.setTransform(d, 0, 0, d, 0, 0);
      p = Array.from({ length: Math.min(70, Math.floor(w / 18)) }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3 }));
    };
    const move = (e: PointerEvent) => { m.x = e.clientX; m.y = e.clientY; };
    const draw = () => {
      g.clearRect(0, 0, w, h);
      p.forEach((a, i) => {
        if (!still) { a.x += a.vx; a.y += a.vy; if (a.x < 0 || a.x > w) a.vx *= -1; if (a.y < 0 || a.y > h) a.vy *= -1; }
        g.fillStyle = 'rgba(138,164,255,.55)'; g.fillRect(a.x - 1, a.y - 1, 2, 2);
        for (let j = i + 1; j < p.length; j++) {
          const b = p[j], d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) { g.strokeStyle = `rgba(138,164,255,${.16 * (1 - d / 120)})`; g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(b.x, b.y); g.stroke(); }
        }
        const dm = Math.hypot(a.x - m.x, a.y - m.y);
        if (dm < 170) { g.strokeStyle = `rgba(94,234,212,${.5 * (1 - dm / 170)})`; g.beginPath(); g.moveTo(a.x, a.y); g.lineTo(m.x, m.y); g.stroke(); }
      });
      raf = requestAnimationFrame(draw);
    };
    size(); draw();
    addEventListener('resize', size); addEventListener('pointermove', move);
    return () => { cancelAnimationFrame(raf); removeEventListener('resize', size); removeEventListener('pointermove', move); };
  }, []);
  return <canvas ref={ref} className="bg-canvas" aria-hidden="true" />;
}
