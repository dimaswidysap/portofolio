"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Calendar, ExternalLink, X } from "lucide-react";

interface CertificateData {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  driveLink: string;
}

interface CertificateCardProps {
  data: CertificateData;
}

export default function CertificateCard({ data }: CertificateCardProps) {
  const [isActive, setIsActive] = useState(false);
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const [isMounted, setIsMounted] = useState(false); // Prevents SSR hydration mismatch
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const checkScreen = () => setIsDesktop(window.innerWidth >= 1024);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useEffect(() => {
    if (isDesktop || !isActive) return;

    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("touchstart", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("touchstart", handleOutsideClick);
    };
  }, [isDesktop, isActive]);

  const openOnHover = () => isDesktop && setIsActive(true);
  const closeOnHover = () => isDesktop && setIsActive(false);
  const toggleOnClick = () => !isDesktop && setIsActive((prev) => !prev);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsActive((prev) => !prev);
    }
    if (event.key === "Escape") setIsActive(false);
  };

  // Prevent rendering mobile-only UI elements on server to avoid hydration errors
  if (!isMounted) return null;

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={openOnHover}
      onMouseLeave={closeOnHover}
      className={`relative ${isActive ? "z-30" : "z-0"}`}
    >
      {/* ===== Base Card ===== */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isActive}
        onClick={toggleOnClick}
        onKeyDown={handleKeyDown}
        className={`group relative h-48 w-full cursor-pointer overflow-hidden rounded-2xl border transition-all duration-300 sm:h-56 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background ${isActive ? "border-accent" : "border-foreground/10"
          }`}
      >
        <img
          src={data.image}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/20" />

        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-4 sm:p-5">
          <span className="flex w-fit items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-accent">
            <Award size={12} />
            Sertifikat
          </span>
          <h3 className="text-base font-bold leading-snug text-always-foreground sm:text-lg">
            {data.title}
          </h3>
        </div>
      </div>

      {/* ===== Floating Detail Card ===== */}
      <div
        className={`absolute inset-x-0 top-0 z-30 origin-top overflow-hidden rounded-2xl border border-accent/40 bg-background-second shadow-2xl shadow-black/40 transition-all duration-300 ease-out lg:-inset-x-3 ${isActive
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none -translate-y-2 scale-95 opacity-0"
          }`}
      >
        {!isDesktop && (
          <button
            type="button"
            onClick={() => setIsActive(false)}
            aria-label="Tutup detail sertifikat"
            className="absolute right-3 top-3 z-10 rounded-full bg-background/80 p-1.5 text-foreground/80 backdrop-blur-sm transition hover:text-accent"
          >
            <X size={16} />
          </button>
        )}

        <div className="relative h-36 w-full overflow-hidden sm:h-44">
          <img
            src={data.image}
            alt={data.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-second to-transparent" />
        </div>

        <div className="flex flex-col gap-2 p-4 sm:p-5">
          <h3 className="text-base font-bold text-foreground sm:text-lg">
            {data.title}
          </h3>
          <p className="text-xs text-foreground/70 sm:text-sm">
            {data.subtitle}
          </p>

          <div className="flex items-center gap-1.5 text-xs text-foreground/60 sm:text-sm">
            <Calendar size={14} className="text-accent" />
            <span>{data.date}</span>
          </div>

          <a
            href={data.driveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2.5 text-sm font-semibold text-always-foreground transition hover:brightness-110 active:scale-[0.98]"
          >
            Lihat Sertifikat
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}