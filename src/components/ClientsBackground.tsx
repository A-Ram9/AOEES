import { useEffect, useRef } from 'react';

/**
 * Electric, cursor-reactive background for the Clients page.
 *
 * - A static, dark-ultramarine glow washes the whole section (fixed, does
 *   not move) so the page always reads as gently "powered on".
 * - A slightly brighter glow follows the cursor with minimal lag, and
 *   occasional, understated lightning sparks flick outward from the
 *   pointer - fitting the electrical-contracting theme without
 *   overwhelming the page.
 *
 * Colors match the page's own ultramarine text/brand color (see the
 * --color-ultramarine tokens in src/index.css) rather than a generic
 * light blue, so the effect reads as part of the same design language.
 */

const AMBIENT_RGB = '18, 10, 143'; // --color-ultramarine - static background wash
const CURSOR_GLOW_RGB = '30, 20, 179'; // --color-ultramarine-light - glow under the cursor
const BOLT_GLOW_RGB = '30, 20, 179'; // --color-ultramarine-light - outer glow of each bolt
const BOLT_CORE_RGB = '143, 138, 217'; // ultramarine tinted toward white - hot bolt core

interface Point {
  x: number;
  y: number;
}

interface Bolt {
  points: Point[];
  life: number;
  maxLife: number;
  width: number;
}

/** Procedurally builds a jagged lightning path via midpoint displacement. */
function buildBoltPath(x1: number, y1: number, x2: number, y2: number, displace: number): Point[] {
  const points: Point[] = [{ x: x1, y: y1 }];

  function subdivide(ax: number, ay: number, bx: number, by: number, offset: number) {
    if (offset < 5) {
      points.push({ x: bx, y: by });
      return;
    }
    const midX = (ax + bx) / 2 + (Math.random() - 0.5) * offset;
    const midY = (ay + by) / 2 + (Math.random() - 0.5) * offset;
    subdivide(ax, ay, midX, midY, offset * 0.55);
    subdivide(midX, midY, bx, by, offset * 0.55);
  }

  subdivide(x1, y1, x2, y2, displace);
  return points;
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
    let bolts: Bolt[] = [];
    let lastSparkAt = 0;
    let lastStrikeAt = 0;

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

    /** Spawns a short, faint spark radiating out from the live cursor position. */
    function spawnSparks(count: number) {
      for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 80;
        const endX = mouse.targetX + Math.cos(angle) * distance;
        const endY = mouse.targetY + Math.sin(angle) * distance;
        bolts.push({
          points: buildBoltPath(mouse.targetX, mouse.targetY, endX, endY, distance * 0.6),
          life: 140,
          maxLife: 140,
          width: 1 + Math.random() * 0.8,
        });
      }
    }

    /** Rarely fires one longer, slightly more dramatic strike from the cursor. */
    function spawnStrike() {
      const angle = Math.random() * Math.PI * 2;
      const distance = 130 + Math.random() * 110;
      const endX = mouse.targetX + Math.cos(angle) * distance;
      const endY = mouse.targetY + Math.sin(angle) * distance;
      bolts.push({
        points: buildBoltPath(mouse.targetX, mouse.targetY, endX, endY, distance * 0.7),
        life: 200,
        maxLife: 200,
        width: 1.8,
      });
    }

    function drawAmbientGlow() {
      const spots = [
        { x: width * 0.15, y: height * 0.2, r: Math.max(width, height) * 0.45 },
        { x: width * 0.85, y: height * 0.75, r: Math.max(width, height) * 0.4 },
      ];
      for (const spot of spots) {
        const glow = ctx!.createRadialGradient(spot.x, spot.y, 0, spot.x, spot.y, spot.r);
        glow.addColorStop(0, `rgba(${AMBIENT_RGB}, 0.07)`);
        glow.addColorStop(1, `rgba(${AMBIENT_RGB}, 0)`);
        ctx!.fillStyle = glow;
        ctx!.fillRect(0, 0, width, height);
      }
    }

    function drawCursorGlow() {
      if (!mouse.active) return;
      const glow = ctx!.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
      glow.addColorStop(0, `rgba(${CURSOR_GLOW_RGB}, 0.16)`);
      glow.addColorStop(0.5, `rgba(${CURSOR_GLOW_RGB}, 0.05)`);
      glow.addColorStop(1, `rgba(${CURSOR_GLOW_RGB}, 0)`);
      ctx!.fillStyle = glow;
      ctx!.fillRect(0, 0, width, height);
    }

    function drawBolts() {
      ctx!.lineJoin = 'round';
      ctx!.lineCap = 'round';

      for (const bolt of bolts) {
        const alpha = Math.max(bolt.life / bolt.maxLife, 0);
        ctx!.beginPath();
        bolt.points.forEach((p, i) => (i === 0 ? ctx!.moveTo(p.x, p.y) : ctx!.lineTo(p.x, p.y)));

        // Outer glow pass.
        ctx!.strokeStyle = `rgba(${BOLT_GLOW_RGB}, ${0.4 * alpha})`;
        ctx!.lineWidth = bolt.width * 3;
        ctx!.shadowColor = `rgba(${BOLT_GLOW_RGB}, ${0.6 * alpha})`;
        ctx!.shadowBlur = 12;
        ctx!.stroke();

        // Hot core pass.
        ctx!.shadowBlur = 0;
        ctx!.strokeStyle = `rgba(${BOLT_CORE_RGB}, ${0.75 * alpha})`;
        ctx!.lineWidth = bolt.width;
        ctx!.stroke();
      }

      ctx!.shadowBlur = 0;
    }

    function draw(now: number) {
      ctx!.clearRect(0, 0, width, height);

      // Static ambient wash - fixed, does not move with the cursor or scroll.
      drawAmbientGlow();

      // Fast-follow the pointer so the reaction reads as near-instant.
      mouse.x += (mouse.targetX - mouse.x) * 0.4;
      mouse.y += (mouse.targetY - mouse.y) * 0.4;

      drawCursorGlow();

      if (!prefersReducedMotion && mouse.active) {
        if (now - lastSparkAt > 220) {
          spawnSparks(1);
          lastSparkAt = now;
        }
        if (now - lastStrikeAt > 1400) {
          spawnStrike();
          lastStrikeAt = now;
        }
      }

      if (!prefersReducedMotion) {
        bolts = bolts.filter((bolt) => (bolt.life -= 16) > 0);
        if (bolts.length > 24) bolts = bolts.slice(bolts.length - 24);
      }

      drawBolts();

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
