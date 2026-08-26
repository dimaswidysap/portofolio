"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";
import { Illustrator } from "@/components/icons/adobeIllustrator";
const data = [
  {
    src: "/asset/gambar-ill/falcon.webp",
    alt: "Sam Wilson",
    title: "Falcon",
    tools: [
      <Illustrator key="Illustrator" />,
      <Illustrator key="Illustrator" />,
    ],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/garuda.png",
    alt: "Garuda",
    title: "Garuda",
    tools: [<Illustrator key="Illustrator" />],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/goddoom.webp",
    alt: "Godzilla & Doctor Doom",
    title: "Godzilla & Doom",
    tools: [<Illustrator key="Illustrator" />],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/harimau.png",
    alt: "Harimau",
    title: "Harimau",
    tools: [<Illustrator key="Illustrator" />],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/ibukeraton.webp",
    alt: "Ibu Keraton",
    title: "Ibu Keraton",
    tools: [<Illustrator key="Illustrator" />],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/zombie.png",
    alt: "Zombie",
    title: "Zombie",
    tools: [<Illustrator key="Illustrator" />],
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
];

export default function HorizontalSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const triggerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();

    // Jalankan GSAP HANYA untuk desktop / screen >= 768px
    mm.add("(min-width: 768px)", () => {
      const panelCount = data.length;
      const totalShiftVw = (panelCount - 1) * 100;

      gsap.fromTo(
        sectionRef.current,
        { x: 0 },
        {
          x: `-${totalShiftVw}vw`,
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: () => `+=${(totalShiftVw / 100) * window.innerWidth}`,
            scrub: 0.8,
            pin: true,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        },
      );

      // Trigger refresh setelah semua gambar ter-load
      const imgs = triggerRef.current
        ? Array.from(triggerRef.current.querySelectorAll("img"))
        : [];

      let loadedCount = 0;
      const handleImgLoad = () => {
        loadedCount += 1;
        if (loadedCount === imgs.length) {
          ScrollTrigger.refresh();
        }
      };

      imgs.forEach((img) => {
        if (img.complete) {
          handleImgLoad();
        } else {
          img.addEventListener("load", handleImgLoad);
          img.addEventListener("error", handleImgLoad);
        }
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <main className={`hidden md:block ${styles.scrollSectionOuter}`}>
      <div ref={triggerRef}>
        <div ref={sectionRef} className={`${styles.scrollSectionInner} flex`}>
          {data.map((item, index) => (
            <section
              key={item.src}
              className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center p-12 lg:p-20 overflow-hidden"
            >
              {/* Background Ambient Glow */}
              <div className={styles.ambientGlow} />

              {/* Card Main Container */}
              <div className={styles.glassCard}>
                {/* Visual Number Badge */}
                <span className={styles.numberBadge}>
                  0{index + 1}{" "}
                  <span className="text-sm opacity-40">/ 0{data.length}</span>
                </span>

                {/* Left Content (Text) */}
                <div className="flex-1 space-y-4 z-10">
                  <h2 className="text-3xl lg:text-5xl font-extrabold tracking-tight text-white uppercase">
                    {item.title}
                  </h2>
                  {/* <p className="text-sm lg:text-base text-zinc-300 leading-relaxed max-w-lg">
                    {item.desc}
                  </p> */}
                </div>

                {/* container tools */}
                <div className="w-full h-32 absolute bottom-0 left-0  flex items-center gap-3 translate-y-1/7 px-4">
                  {item.tools?.map((tool, index) => (
                    <div
                      key={index}
                      className={`h-full p-2 bg-white/5 rounded-xl border border-white/5 backdrop-blur-md aspect-square flex items-center justify-center shadow-lg hover:-translate-y-1/2 transition-all duration-200 hover:rotate-0 ${index % 2 === 0 ? "rotate-6" : "-rotate-6 -translate-x-1/5"}`}
                    >
                      {tool}
                    </div>
                  ))}
                </div>

                {/* Right Content (Image Showcase) */}
                <div className="relative flex-1 h-full min-h-75 lg:min-h-105 w-full flex items-center justify-center">
                  <div className={styles.imageBackdrop} />
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className={`object-contain relative z-10 transition-transform duration-500 scale-120 hover:scale-130 ${styles.imageDropShadow}`}
                    sizes="(max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
