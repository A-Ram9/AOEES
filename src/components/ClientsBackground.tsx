import { useEffect, useRef } from 'react';

/**
 * Subtle, cursor-anchored background for the Clients page.
 *
 * Rather than firing independent random sparks, the "lightning" here is
 * a short trail sampled directly from the cursor's own recent path, so
 * it always reads as attached to the pointer instead of appearing to
 * pop in at arbitrary spots. Each trail segment is smoothed with a
 * quadratic curve and fades in with a smoothstep easing, and its faint
 * jitter scales with how fast the cursor is moving - fast movement
 * reads as a bit more "electric", holding still calms it back down.
 *
 * Colors are the page's own dark ultramarine tokens (see the
 * --color-ultramarine variables in src/index.css), kept at low opacity
 * throughout so the whole effect stays in the background.
 */

const AMBIENT_RGB = '10, 6, 92'; // --color-ultramarine-dark - static background wash
const CURSOR_GLOW_RGB = '18, 10, 143'; // --color-ultramarine - soft glow under the cursor
const TRAIL_GLOW_RGB = '18, 10, 143'; // --color-ultramarine - outer glow of the trail
const TRAIL_CORE_RGB = '30, 20, 179'; // --color-ultramarine-light - trail core

const TRAIL_DURATION = 260; // ms a trail sample stays visible before fading out
const MIN_SAMPLE_DISTANCE = 2; // px the cursor must move before a new sample is recorded

interface TrailPoint {
  x: number;
  y: number;
  t: number;
}

function smoothstep(t: number): number {
  const clamped = Math.min(Math.max(t, 0), 1);
  return clamped * clamped * (3 - 2 * clamped);
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
    let rafId = 0;

    const mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999, active: false };
    let trail: TrailPoint[] = [];

    function resize() {
      width = canvas!.clientWidth;
      height = canvas!.clientHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
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

    function drawAmbientGlow() {
      const spots = [
        { x: width * 0.15, y: height * 0.2, r: Math.max(width, height) * 0.45 },
        { x: width * 0.85, y: height * 0.75, r: Math.max(width, height) * 0.4 },
      ];
      for (const spot of spots) {
        const glow = ctx!.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.r);
        glow.addColorStop(0, `rgba(${AMBIENT_RGB}, 0.06)`);
        glow.addColorStop(1, `rgba(${AMBIENT_RGB}, 0)`);
        ctx!.fillStyle = glow;
        ctx!.fillRect(0, 0, width, height);
      }
    }

    function drawCursorGlow() {
      if (!mouse.active) return;
      const glow = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 200);
      glow.addColorStop(0, `rgba(${CURSOR_GLOW_RGB}, 0.12)`);
      glow.addColorStop(0.5, `rgba(${CURSOR_GLOW_RGB}, 0.04)`);
      glow.addColorStop(1, `rgba(${CURSOR_GLOW_RGB}, 0)`);
      ctx!.fillStyle = glow;
      ctx!.fillRect(0, 0, width, height);
    }

    /** Records a new trail sample at the cursor, with jitter scaled to movement speed. */
    function sampleTrail(now: number) {
      const last = trail[trail.length - 1];
      const dx = mouse.x - (last?.x ?? mouse.x);
      const dy = mouse.y - (last?.y ?? mouse.y);
      const moveDist = Math.hypot(dx, dy);

      if (last && moveDist < MIN_SAMPLE_DISTANCE) return;

      let x = mouse.x;
      let y = mouse.y;

      if (last && moveDist > 0.01) {
        const nx = -dy / moveDist;
        const ny = dx / moveDist;
        const jitterMag = (Math.random() - 0.5) * Math.min(moveDist * 0.35, 7);
        x += nx * jitterMag;
        y += ny * jitterMag;
      }

      trail.push({ x, y, t: now });
    }

    /** Draws the live trail as a smoothed, fading curve behind the cursor. */
    function drawTrail(now: number) {
      trail = trail.filter((p) => now - p.t < TRAIL_DURATION);
      if (trail.length < 2) return;

      ctx!.lineJoin = 'round';
      ctx!.lineCap = 'round';

      for (let i = 0; i < trail.length - 1; i++) {
        const a = trail[i];
        const b = trail[i + 1];
        const age = now - a.t;
        const alpha = smoothstep(1 - age / TRAIL_DURATION);
        if (alpha <= 0.02) continue;

        const prev = trail[i - 1] ?? a;
        const next = trail[i + 2] ?? b;
        const startX = (prev.x + a.x) / 2;
        const startY = (prev.y + a.y) / 2;
        const endX = (b.x + next.x) / 2;
        const endY = (b.y + next.y) / 2;

        ctx!.beginPath();
        ctx!.moveTo(startX, startY);
        ctx!.quadraticCurveTo(a.x, a.y, endX, endY);

        // Outer glow pass.
        ctx!.strokeStyle = `rgba(${TRAIL_GLOW_RGB}, ${0.18 * alpha})`;
        ctx!.lineWidth = 2.4;
        ctx!.shadowColor = `rgba(${TRAIL_GLOW_RGB}, ${0.25 * alpha})`;
        ctx!.shadowBlur = 6;
        ctx!.stroke();

        // Core pass.
        ctx!.shadowBlur = 0;
        ctx!.strokeStyle = `rgba(${TRAIL_CORE_RGB}, ${0.28 * alpha})`;
        ctx!.lineWidth = 1;
        ctx!.stroke();
      }

      ctx!.shadowBlur = 0;
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height);

      // Static ambient wash - fixed, does not move with the cursor or scroll.
      drawAmbientGlow();

      // Ease toward the pointer smoothly rather than snapping to it.
      mouse.x += (mouse.targetX - mouse.x) * 0.35;
      mouse.y += (mouse.targetY - mouse.y) * 0.35;

      drawCursorGlow();

      if (!prefersReducedMotion && mouse.active) {
        sampleTrail(now);
      }
      if (!prefersReducedMotion) {
        drawTrail(now);
      }

      rafId = requestAnimationFrame(draw);
    }

    resize();
    rafId = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
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
