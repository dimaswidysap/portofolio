"use client";
import { images } from "./illustratorData";
import { useRef, useState, useCallback, useEffect } from "react";

const CARD_ACTIVE = 280;
const CARD_INACTIVE = 240;
const GAP = 12;

export default function GallerySwiper() {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  // Drag state via refs (no re-render during drag)
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const rafId = useRef<number | null>(null);

  // ── Compute scrollLeft that centers card[index] ───────────────
  const getSnapOffset = useCallback((index: number) => {
    // With paddingLeft = calc(50% - CARD_ACTIVE/2), the first card's left edge
    // starts at scrollLeft=0 and is already centered. Each subsequent card
    // is offset by CARD_INACTIVE + GAP.
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += CARD_INACTIVE + GAP;
    }
    return Math.max(0, offset);
  }, []);

  // ── Spring animation to target scrollLeft ─────────────────────
  const animateTo = useCallback((target: number) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const track = trackRef.current;
    if (!track) return;
    const step = () => {
      const diff = target - track.scrollLeft;
      if (Math.abs(diff) < 0.4) {
        track.scrollLeft = target;
        return;
      }
      track.scrollLeft += diff * 0.16;
      rafId.current = requestAnimationFrame(step);
    };
    rafId.current = requestAnimationFrame(step);
  }, []);

  // ── Find nearest card to current scroll center ────────────────
  const getNearestIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    // Account for paddingLeft = 50% - CARD_ACTIVE/2
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

  // ── Magnetic snap: momentum decay → snap to nearest ──────────
  const applyMomentumThenSnap = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    const track = trackRef.current;
    if (!track) return;

    let v = velocity.current * -1; // invert direction
    const FRICTION = 0.88;
    const SNAP_THRESHOLD = 0.08;

    const step = () => {
      v *= FRICTION;
      track.scrollLeft += v;

      // While decelerating, continuously update active preview
      const near = getNearestIndex();
      setActiveIndex(near);

      if (Math.abs(v) > SNAP_THRESHOLD) {
        rafId.current = requestAnimationFrame(step);
      } else {
        // Magnetic pull: snap to nearest card center
        const snapped = getNearestIndex();
        setActiveIndex(snapped);
        animateTo(getSnapOffset(snapped));
      }
    };

    if (Math.abs(v) > SNAP_THRESHOLD) {
      rafId.current = requestAnimationFrame(step);
    } else {
      const snapped = getNearestIndex();
      setActiveIndex(snapped);
      animateTo(getSnapOffset(snapped));
    }
  }, [getNearestIndex, animateTo, getSnapOffset]);

  // ── Mouse events ──────────────────────────────────────────────
  const handleMouseDown = (e: React.MouseEvent) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    isDragging.current = true;
    startX.current = e.pageX;
    startScrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    lastX.current = e.pageX;
    lastTime.current = performance.now();
    velocity.current = 0;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
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

    // Live active preview while dragging
    setActiveIndex(getNearestIndex());
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    applyMomentumThenSnap();
  };

  // ── Touch events ──────────────────────────────────────────────
  const handleTouchStart = (e: React.TouchEvent) => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    isDragging.current = true;
    startX.current = e.touches[0].pageX;
    startScrollLeft.current = trackRef.current?.scrollLeft ?? 0;
    lastX.current = e.touches[0].pageX;
    lastTime.current = performance.now();
    velocity.current = 0;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const dx = e.touches[0].pageX - startX.current;
    if (trackRef.current)
      trackRef.current.scrollLeft = startScrollLeft.current - dx;

    const now = performance.now();
    const dt = now - lastTime.current || 1;
    velocity.current = (e.touches[0].pageX - lastX.current) / dt;
    lastX.current = e.touches[0].pageX;
    lastTime.current = now;

    setActiveIndex(getNearestIndex());
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    applyMomentumThenSnap();
  };

  // ── Button navigation ─────────────────────────────────────────
  const goTo = useCallback(
    (index: number) => {
      const clamped = Math.max(0, Math.min(images.length - 1, index));
      setActiveIndex(clamped);
      animateTo(getSnapOffset(clamped));
    },
    [animateTo, getSnapOffset],
  );

  // Center first card on mount
  useEffect(() => {
    goTo(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-4 select-none py-[5rem] md:scale-125">
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
        className="w-full flex flex-row overflow-x-scroll  py-10"
        style={{
          gap: GAP,
          scrollbarWidth: "none",
          cursor: isDragging.current ? "grabbing" : "grab",
          // Padding lets first and last card be centered
          paddingLeft: `calc(50% - ${CARD_ACTIVE / 2}px)`,
          paddingRight: `calc(50% - ${CARD_ACTIVE / 2}px)`,
        }}
      >
        {images.map((img, i) => {
          const isActive = i === activeIndex;
          return (
            <figure
              key={img.id}
              className="relative flex-shrink-0 overflow-hidden rounded-2xl"
              style={{
                aspectRatio: "1 / 1",
                width: isActive ? CARD_ACTIVE : CARD_INACTIVE,
                opacity: isActive ? 1 : 0.52,
                transform: isActive
                  ? "scale(1) translateY(0px)"
                  : "scale(0.93) translateY(8px)",
                boxShadow: isActive
                  ? "0 24px 64px rgba(0,0,0,0.45)"
                  : "0 6px 18px rgba(0,0,0,0.2)",
                outline: isActive
                  ? "2px solid rgba(255,255,255,0.5)"
                  : "2px solid transparent",
                transition: [
                  "width 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                  "opacity 0.35s ease",
                  "transform 0.45s cubic-bezier(0.34,1.56,0.64,1)",
                  "box-shadow 0.4s ease",
                  "outline 0.3s ease",
                ].join(", "),
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt}
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transform: isActive ? "scale(1)" : "scale(1.05)",
                  transition: "transform 0.5s ease",
                  pointerEvents: "none",
                  display: "block",
                }}
              />

              {/* Magnetic glow ring on active */}
              {isActive && (
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.25)",
                  }}
                />
              )}

              {/* Label overlay */}
              <figcaption
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: "12px 16px",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.75), transparent)",
                  color: "white",
                  fontWeight: 600,
                  fontSize: 13,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.35s ease",
                }}
              >
                {img.label}
              </figcaption>
            </figure>
          );
        })}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => goTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          aria-label="Previous"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "transform 0.15s ease, opacity 0.2s ease",
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
              style={{
                height: 8,
                width: activeIndex === i ? 24 : 8,
                borderRadius: 9999,
                background:
                  activeIndex === i ? "white" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
                transition:
                  "width 0.4s cubic-bezier(0.34,1.56,0.64,1), background 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(activeIndex + 1)}
          disabled={activeIndex === images.length - 1}
          aria-label="Next"
          style={{
            width: 36,
            height: 36,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.3)",
            background: "rgba(255,255,255,0.08)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "transform 0.15s ease, opacity 0.2s ease",
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
