import { useEffect, useRef } from 'react';

/**
 * Subtle, interactive ultramarine particle field for the Clients page.
 *
 * - A soft glow follows the cursor (eased, so it trails gently).
 * - A sparse network of slow-drifting particles is pulled lightly toward
 *   the cursor and connected by faint lines, evoking a "network of
 *   partners" feel that matches the page's content.
 * - The whole field eases toward a slight vertical parallax offset as the
 *   page is scrolled, so it feels alive rather than pinned in place.
 *
 * Colors are pulled from the site's ultramarine theme (see src/index.css)
 * and kept at low opacity so the effect stays in the background.
 */

const PARTICLE_RGB = '30, 20, 179'; // --color-ultramarine-light
const LINE_RGB = '18, 10, 143'; // --color-ultramarine
const GLOW_RGB = '37, 99, 235'; // accent blue used elsewhere on the site (blue-500)

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

function ClientsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let rafId = 0;

    const mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999, active: false };
    let parallax = 0;
    let parallaxTarget = 0;

    function resize() {
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(50, Math.max(18, Math.floor((width * height) / 26000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        radius: Math.random() * 1.5 + 0.6,
      }));
    }

    function handlePointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    }

    function handlePointerLeave() {
      mouse.active = false;
    }

    function handleScroll() {
      parallaxTarget = window.scrollY * 0.04;
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);

      // Cursor glow (eased so it trails softly rather than snapping).
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      if (mouse.active) {
        const glow = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 280);
        glow.addColorStop(0, `rgba(${GLOW_RGB}, 0.09)`);
        glow.addColorStop(1, `rgba(${GLOW_RGB}, 0)`);
        ctx!.fillStyle = glow;
        ctx!.fillRect(0, 0, width, height);
      }

      // Ease the parallax offset toward the scroll-derived target.
      parallax += (parallaxTarget - parallax) * 0.08;

      ctx!.save();
      ctx!.translate(0, -parallax);

      for (const p of particles) {
        if (!prefersReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          // Wrap around edges for a seamless, endless drift.
          if (p.x < -10) p.x = width + 10;
          if (p.x > width + 10) p.x = -10;
          if (p.y < -10) p.y = height + 10;
          if (p.y > height + 10) p.y = -10;

          if (mouse.active) {
            const dx = mouse.x - p.x;
            const dy = mouse.y - p.y;
            const dist = Math.hypot(dx, dy);
            if (dist < 130 && dist > 0.01) {
              const pull = ((130 - dist) / 130) * 0.5;
              p.x += (dx / dist) * pull;
              p.y += (dy / dist) * pull;
            }
          }
        }

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${PARTICLE_RGB}, 0.35)`;
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < 110) {
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.strokeStyle = `rgba(${LINE_RGB}, ${0.1 * (1 - dist / 110)})`;
            ctx!.lineWidth = 1;
            ctx!.stroke();
          }
        }
      }

      ctx!.restore();
      rafId = requestAnimationFrame(draw);
    }

    resize();
    draw();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 z-0 h-full w-full pointer-events-none"
    />
  );
}

export default ClientsBackground;
