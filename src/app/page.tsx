"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { garuda } from "./Illustrator/illustratorData";
import Link from "next/link";
// import { ArrowRight } from "lucide-react";
import { VisualStudioCode } from "@/components/icons/vscode";
import { Illustrator } from "@/components/icons/adobeIllustrator";
import { TikTok } from "@/components/icons/tiktok";
import { Instagram } from "@/components/icons/instagram";
import { LinkedIn } from "@/components/icons/linkedln";

// import Style from "./page.module.css";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  // tes

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const sayapKanan = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);
  const sayapKiri = useTransform(scrollYProgress, [0, 1], ["0deg", "-45deg"]);

  const iconCardProfil = [
    {
      href: "https://www.tiktok.com/@dimaswidysap",
      icon: <TikTok key="tiktok" />,
    },
    {
      href: "https://www.instagram.com/dimaswidysaputraa/",
      icon: <Instagram key="instagram" />,
    },
    {
      href: "",
      icon: <LinkedIn key="LinkedLn" />,
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* container foto */}
      <section className="w-full h-screen flex justify-center items-center relative overflow-hidden">
        {/* container picture */}
        <figure className="md:flex translate-x-1/8 lg:translate-x-0 h-full aspect-video justify-center items-center">
          <Image
            className="object-cover"
            src="/asset/owner-pic/bg-picture.png"
            alt="profil background"
            fill
            priority
          />
        </figure>

        {/* Main Overlay Content */}
        <section className="w-full h-full flex flex-col md:flex-row absolute inset-0">
          {/* Left/Top Half: Name */}
          <div className="w-full flex-1 md:h-full md:w-1/2 pt-0 md:pt-42 lg:pt-32 flex justify-center md:justify-end items-center md:items-start lg:px-[10%]">
            <span className="inline-flex flex-col md:translate-x-1/5 lg:translate-x-0 relative justify-center h-max items-center">
              {/* Scaled absolute positioning and text size for mobile */}
              <p className="absolute -top-2 md:-top-2.5 font-black text-sm md:text-base">
                DIMAS
              </p>
              <h1 className="text-[80px] sm:text-[100px] md:text-[140px] font-black leading-none">
                WIDY
              </h1>
              <p className="absolute -bottom-2 md:-bottom-2.25 font-black text-sm md:text-base">
                SAPUTRA
              </p>
            </span>
          </div>

          {/* Right/Bottom Half: Contacts */}
          <div className="w-full flex-1 md:w-1/2 md:h-full items-center md:items-start flex flex-col justify-center md:justify-end px-4 md:px-0 md:pl-[10%] pb-8 md:pb-[5%]">
            <span className="flex flex-col h-max max-w-full">
              <a
                target="_blank"
                className="text-xs sm:text-sm bg-background-second shadow-xl border border-font-footer/10 py-2 px-3 rounded-md font-secondary font-black truncate max-w-full"
                href="mailto:dimaswidysaputra41@gmail.com"
              >
                dimaswidysaputra41@gmail.com
              </a>
            </span>

            <div className="w-full flex justify-center md:justify-start gap-2 flex-wrap mt-5">
              {iconCardProfil.map((items, index) => {
                return (
                  <Link
                    target="_blank"
                    href={items.href}
                    key={index}
                    className="inline-flex w-12 justify-center items-center aspect-square bg-background-second shadow-xl rounded-md p-1 transition-transform hover:scale-105 active:scale-95"
                  >
                    {items.icon}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </section>

      {/* konten bawah */}
      <section className="w-full relative py-52 z-1">
        {/* container garuda */}
        <section ref={targetRef} className="h-200 w-full  flex justify-center">
          <motion.div
            style={{ y, willChange: "transform" }}
            className="h-full relative aspect-video md:-translate-x-[20%] lg:-translate-x-[30%]"
          >
            {garuda.map((items, index) => {
              let style = {};

              if (index === 2) {
                style = { rotate: sayapKanan };
              }

              if (index === 1) {
                style = { rotate: sayapKiri };
              }

              return (
                <motion.figure
                  style={{ ...style, willChange: "transform" }}
                  key={items.alt}
                  className="w-full h-full absolute"
                >
                  <Image
                    className="object-cover"
                    src={items.src}
                    alt={items.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </motion.figure>
              );
            })}
          </motion.div>
        </section>

        {/* konten teks */}
        <section className="absolute z-2 w-full h-full inset-0 max-w-120 left-1/2 -translate-x-1/2">
          {/* background */}
          <span className="inline-flex h-full w-full bg-black/50 rounded-t-2xl"></span>

          {/* konten */}
          <section className="absolute inset-0 h-full w-full pt-24">
            <div className="w-full relative z-2">
              <h2 className="w-full flex justify-start px-2.5 font-black text-5xl text-always-foreground">
                Illustrator
              </h2>
              <h5 className="w-full flex justify-center text-always-foreground">
                and
              </h5>
              <h2 className="w-full flex justify-end px-2.5 font-black text-5xl text-always-foreground">
                Front-End
              </h2>
            </div>
            <div className="w-full h-1/2 absolute inset-0">
              <figure className="absolute h-32 aspect-square rotate-12 mt-4">
                <Illustrator className="object-cover" />
              </figure>
              <figure className="absolute right-0 top-60 h-32 aspect-square -rotate-12 mt-4">
                <VisualStudioCode className="object-cover" />
              </figure>
            </div>
          </section>
        </section>

        {/* konten front-end */}

        <section className="absolute flex-col h-full w-full inset-0 flex  justify-end items-end pb-20 md:pr-4">
          {/* konten 1 */}
          <figure className="relative z-10 rounded-2xl shadow-2xl w-[90%] md:w-[70%] max-w-200 aspect-video bg-background-second p-2 md:p-4">
            <div className="relative w-full h-full  rounded-md overflow-hidden">
              <Image
                className="object-cover "
                src="/asset/owner-pic/coding.png"
                alt="Widy sedang coding di VS Code"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 70vw"
              />
            </div>
          </figure>
          {/*  */}
          <section className="w-full flex mt-4 px-4 gap-4 lg:pl-[50%]">
            <figure className="w-1/2 aspect-square relative z-10 rounded-2xl shadow-2xl md:w-[40%] lg:max-w-160  bg-background-second p-2 md:p-4">
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <Image
                  className="object-cover"
                  src="/asset/owner-pic/profil-github.png"
                  alt="Profil GitHub Widy"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 50vw, 30vw"
                />
              </div>
            </figure>
            <figure className="flex-1 aspect-vedeo relative z-10 rounded-2xl shadow-2xl md:w-[40%] lg:max-w-160  bg-background-second p-2 md:p-4">
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <Image
                  className="object-cover"
                  src="/asset/owner-pic/1.jpeg"
                  alt="Widy Sedang Menggabanr Illustrasi"
                  fill
                  loading="lazy"
                  unoptimized
                />
              </div>
            </figure>
          </section>
        </section>
      </section>
    </main>
  );
}
