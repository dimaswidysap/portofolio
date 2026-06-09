"use client";
import { images } from "./illustratorData";
import { useRef, useState, useCallback, useEffect, memo } from "react";

const CARD_ACTIVE = 280;
const CARD_INACTIVE = 240;
const GAP = 12;

// ── Pre-computed static styles (created once, not per-render) ─────────────
const INACTIVE_FIGURE_STYLE: React.CSSProperties = {
  zIndex: 0,
  aspectRatio: "1 / 1",
  width: CARD_INACTIVE,
  opacity: 0.1,
  transform: "scale(0.93) translateY(8px)",
  transition: [
    "width 0.45s cubic-bezier(0.34,1.56,0.64,1)",
    "opacity 0.35s ease",
    "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
  ].join(", "),
};

const ACTIVE_FIGURE_STYLE: React.CSSProperties = {
  zIndex: 2,
  aspectRatio: "1 / 1",
  width: CARD_ACTIVE,
  opacity: 1,
  transform: "scale(1) translateY(0px)",
  transition: [
    "width 0.45s cubic-bezier(0.34,1.56,0.64,1)",
    "opacity 0.35s ease",
    "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
  ].join(", "),
};

const INACTIVE_IMG_STYLE: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: "scale(1.05)",
  transition: "transform 0.5s ease",
  pointerEvents: "none",
  display: "block",
};

const ACTIVE_IMG_STYLE: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transform: "scale(1)",
  transition: "transform 0.5s ease",
  pointerEvents: "none",
  display: "block",
};

// ── Memoized card — only re-renders when isActive changes ─────────────────
const GalleryCard = memo(function GalleryCard({
  img,
  isActive,
}: {
  img: (typeof images)[number];
  isActive: boolean;
}) {
  return (
    <figure
      className="relative flex-shrink-0 scale-125 rounded-2xl overflow-hidden"
      style={isActive ? ACTIVE_FIGURE_STYLE : INACTIVE_FIGURE_STYLE}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={img.src}
        alt={img.alt}
        draggable={false}
        style={isActive ? ACTIVE_IMG_STYLE : INACTIVE_IMG_STYLE}
      />

      {/* Label overlay — uses foreground color from theme */}
      <figcaption
        className="absolute bottom-0 left-0 right-0 text-always-foreground font-semibold uppercase tracking-widest text-[13px]"
        style={{
          padding: "12px 16px",
          opacity: isActive ? 1 : 0,
          transition: "opacity 0.35s ease",
        }}
      >
        {img.label}
      </figcaption>
    </figure>
  );
});

// ── Main component ────────────────────────────────────────────────────────
export default function GallerySwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Drag state — all refs, zero re-renders during drag
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const rafId = useRef<number | null>(null);

  // Track last committed activeIndex in a ref to avoid stale closures
  // and skip setActiveIndex when value hasn't changed
  const activeIndexRef = useRef(0);

  const setActive = useCallback((i: number) => {
    if (activeIndexRef.current !== i) {
      activeIndexRef.current = i;
      setActiveIndex(i);
    }
  }, []);

  // ── Snap offset ───────────────────────────────────────────────
  const getSnapOffset = useCallback((index: number) => {
    return Math.max(0, index * (CARD_INACTIVE + GAP));
  }, []);

  // ── Smooth scroll to target (CSS scroll-behavior would fight drag) ────
  const animateTo = useCallback((target: number) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const track = trackRef.current;
    if (!track) return;

    const step = () => {
      const diff = target - track.scrollLeft;
      if (Math.abs(diff) < 0.5) {
        track.scrollLeft = target;
        return;
      }
      // Stronger lerp factor = fewer frames = less CPU on low devices
      track.scrollLeft += diff * 0.22;
      rafId.current = requestAnimationFrame(step);
    };
    rafId.current = requestAnimationFrame(step);
  }, []);

  // ── Nearest card — O(n) but n is always small ─────────────────
  const getNearestIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const paddingLeft = track.clientWidth / 2 - CARD_ACTIVE / 2;
    const scrollCenter = track.scrollLeft + track.clientWidth / 2;
    let offset = paddingLeft;
    let nearest = 0;
    let minDist = Infinity;
    for (let i = 0; i < images.length; i++) {
      const cardCenter = offset + CARD_INACTIVE / 2;
      const dist = Math.abs(cardCenter - scrollCenter);
      if (dist < minDist) {
        minDist = dist;
        nearest = i;
      }
      offset += CARD_INACTIVE + GAP;
    }
    return nearest;
  }, []);

  // ── Momentum → snap ───────────────────────────────────────────
  // Key fix: setActive is only called when index actually changes,
  // and we throttle updates so low-end devices aren't hammered.
  const applyMomentumThenSnap = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const track = trackRef.current;
    if (!track) return;

    let v = velocity.current * -1;
    const FRICTION = 0.86; // slightly stronger friction = fewer frames
    const SNAP_THRESHOLD = 0.1;
    let frameCount = 0;

    const step = () => {
      v *= FRICTION;
      track.scrollLeft += v;

      // Only recompute nearest every 3 frames — plenty smooth, far less work
      frameCount++;
      if (frameCount % 3 === 0) {
        setActive(getNearestIndex());
      }

      if (Math.abs(v) > SNAP_THRESHOLD) {
        rafId.current = requestAnimationFrame(step);
      } else {
        const snapped = getNearestIndex();
        setActive(snapped);
        animateTo(getSnapOffset(snapped));
      }
    };

    if (Math.abs(v) > SNAP_THRESHOLD) {
      rafId.current = requestAnimationFrame(step);
    } else {
      const snapped = getNearestIndex();
      setActive(snapped);
      animateTo(getSnapOffset(snapped));
    }
  }, [getNearestIndex, animateTo, getSnapOffset, setActive]);

  // ── Mouse events ──────────────────────────────────────────────
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    lastX.current = e.pageX;
    lastTime.current = performance.now();
    velocity.current = 0;
    // Directly set cursor on the element — no re-render needed
    if (trackRef.current) trackRef.current.style.cursor = "grabbing";
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const dx = e.pageX - startX.current;
      if (trackRef.current)
        trackRef.current.scrollLeft = startScrollLeft.current - dx;

      const now = performance.now();
      const dt = now - lastTime.current || 1;
      velocity.current = (e.pageX - lastX.current) / dt;
      lastX.current = e.pageX;
      lastTime.current = now;

      setActive(getNearestIndex());
    },
    [getNearestIndex, setActive],
  );

  const handleMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (trackRef.current) trackRef.current.style.cursor = "grab";
    applyMomentumThenSnap();
  }, [applyMomentumThenSnap]);

  // ── Touch events ──────────────────────────────────────────────
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    startScrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    lastX.current = e.touches[0].pageX;
    lastTime.current = performance.now();
    velocity.current = 0;
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!isDragging.current) return;
      const dx = e.touches[0].pageX - startX.current;
      if (trackRef.current)
        trackRef.current.scrollLeft = startScrollLeft.current - dx;

      const now = performance.now();
      const dt = now - lastTime.current || 1;
      velocity.current = (e.touches[0].pageX - lastX.current) / dt;
      lastX.current = e.touches[0].pageX;
      lastTime.current = now;

      setActive(getNearestIndex());
    },
    [getNearestIndex, setActive],
  );

  const handleTouchEnd = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    applyMomentumThenSnap();
  }, [applyMomentumThenSnap]);

  // ── Button navigation ─────────────────────────────────────────
  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(images.length - 1, index));
      setActive(clamped);
      animateTo(getSnapOffset(clamped));
    },
    [animateTo, getSnapOffset, setActive],
  );

  useEffect(() => {
    goTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-4 select-none scale-120 lg:scale-140 py-[5rem] md:relative md:translate-y-1/2 md:-top-1/4">
      {/* Swiper Track */}
      <div
        ref={trackRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="w-full flex flex-row overflow-x-scroll py-10 cursor-grab"
        style={{
          gap: GAP,
          scrollbarWidth: "none",
          paddingLeft: `calc(50% - ${CARD_ACTIVE / 2}px)`,
          paddingRight: `calc(50% - ${CARD_ACTIVE / 2}px)`,
          // Hint to browser: this layer scrolls horizontally — promote to GPU
          willChange: "scroll-position",
        }}
      >
        {images.map((img, i) => (
          <GalleryCard key={img.id} img={img} isActive={i === activeIndex} />
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        {/* Prev button */}
        <button
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous"
          className="flex items-center justify-center rounded-full border border-foreground/30 bg-foreground/10 text-foreground cursor-pointer transition-opacity duration-200"
          style={{
            width: 36,
            height: 36,
            opacity: activeIndex === 0 ? 0.25 : 1,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        {/* Pill dots */}
        <div className="flex gap-2 items-center">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Slide ${i + 1}`}
              className="border-none cursor-pointer p-0 rounded-full transition-all duration-300"
              style={{
                height: 8,
                width: activeIndex === i ? 24 : 8,
                background:
                  activeIndex === i
                    ? "var(--foreground)"
                    : "color-mix(in srgb, var(--foreground) 35%, transparent)",
                transition:
                  "width 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease",
              }}
            />
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === images.length - 1}
          aria-label="Next"
          className="flex items-center justify-center rounded-full border border-foreground/30 bg-foreground/10 text-foreground cursor-pointer transition-opacity duration-200"
          style={{
            width: 36,
            height: 36,
            opacity: activeIndex === images.length - 1 ? 0.25 : 1,
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}