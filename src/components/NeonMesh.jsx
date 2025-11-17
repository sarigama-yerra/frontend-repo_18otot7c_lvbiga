import { useEffect, useRef } from 'react';

// Canvas-based animated mesh gradient for extra aggression
export default function NeonMesh({ hue = 45 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = (canvas.width = canvas.offsetWidth);
    let h = (canvas.height = canvas.offsetHeight);

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    let t = 0;
    const centers = [
      { x: w * 0.25, y: h * 0.3, r: 180 },
      { x: w * 0.7, y: h * 0.6, r: 220 },
    ];

    const draw = () => {
      t += 0.008;
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      centers.forEach((c, i) => {
        const off = Math.sin(t + i) * 40;
        const x = c.x + Math.cos(t * 0.6 + i) * 20;
        const y = c.y + Math.sin(t * 0.5 + i) * 20;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, c.r + off);
        grad.addColorStop(0, `hsla(${hue + i * 10}, 100%, 60%, 0.25)`);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, c.r + off, 0, Math.PI * 2);
        ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.scale(dpr, dpr);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [hue]);

  return <canvas ref={ref} className="absolute inset-0 w-full h-full opacity-[0.35]" />;
}
