"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { figures } from "./illustratorData";
import HorizontalSection from "@/app/components/sections/HorizontalSection";
import SmartphoneVersion from "../components/sections/mobile";

const Illustrator = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const targetRefv2 = useRef(null);
  // Gunakan ":" untuk membuat alias agar tidak bentrok dengan variabel pertama
  const { scrollYProgress: scrollYProgressv2 } = useScroll({
    target: targetRefv2,
    offset: ["start end", "end start"],
  });

  const figureKiri = useTransform(scrollYProgress, [0, 1], ["0", "-45rem"]);
  const figureKanan = useTransform(scrollYProgress, [0, 1], ["0", "45rem"]);
  const containerScale = useTransform(scrollYProgress, [0, 1], [0.7, 2]);
  const textScale = useTransform(scrollYProgress, [0, 1], [0.7, 2]);

  const figurePageTwo = useTransform(
    scrollYProgressv2,
    [0, 1],
    ["10rem", "0rem"],
  );
  const figurePageTwoScale = useTransform(
    scrollYProgressv2,
    [0, 1],
    [0.7, 1.1],
  );

  const heroTeks = "ILLUSTRATIONS";
  //adding smooth scroll
  // useLayoutEffect(() => {
  //   let scroll: any;
  //   if (typeof window !== "undefined") {
  //     import("locomotive-scroll").then((LocomotiveScroll) => {
  //       scroll = new LocomotiveScroll.default();
  //     });
  //   }
  //   return () => {
  //     if (scroll) scroll.destroy();
  //   };
  // }, []);
  return (
    <main ref={targetRef} className="w-full">
      {/* page one */}
      <section className="relative w-full h-[210vh] overflow-hidden">
        <div className="absolute h-screen w-full max-w-7xl inset-0 left-1/2 -translate-x-1/2  z-4 flex justify-center items-start">
          <motion.span
            style={{ scale: textScale }}
            className="mt-40 md:mt-60 scale-80 md:scale-100 relative text-always-foreground inline-flex justify-center items-center"
          >
            <p className="absolute -top-8 font-black">BEST</p>
            <h1 className="font-black flex gap-2 text-5xl lg:text-7xl text-shadow-2xs">
              {heroTeks.split("").map((item, index) => {
                return (
                  <span
                    key={index}
                    className={`inline-block transform origin-center ${index % 2 === 0 ? "rotate-2  outline-2 outline-always-foreground" : "-rotate-5"} `}
                  >
                    {item}
                  </span>
                );
              })}
            </h1>
            <p className="absolute -bottom-8 font-black">I{"'"}VE MADE.</p>
          </motion.span>
        </div>
        <figure className="absolute inset-0 w-full h-screen">
          <Image
            className="object-cover"
            src="/asset/gambar-ill/background.webp"
            alt="background"
            fill
            unoptimized
          />
        </figure>
        {/* background fire */}
        <figure className="z-2 w-full h-full relative">
          <Image
            className="object-cover"
            src="/asset/gambar-ill/bgapiv2.webp"
            alt="fire-image"
            fill
            unoptimized
          />
        </figure>
        {/*  */}
        <motion.div
          style={{ scale: containerScale }}
          className="absolute inset-0 h-screen w-full z-3 flex justify-center lg:justify-between items-end gap-1.5 "
        >
          {figures.map((items, index) => {
            return (
              <motion.figure
                style={{ x: index === 0 ? figureKiri : figureKanan }}
                key={items.alt}
                className={`${index === 0 ? "translate-x-[60%] md:translate-x-1/3 lg:translate-x-1/6" : "-translate-x-[60%] md:-translate-x-1/3 lg:-translate-x-1/6"} lg:scale-150  h-[70%] aspect-square relative`}
              >
                <Image
                  className="object-cover lg:scale-105"
                  src={items.src}
                  alt={items.src}
                  fill
                  unoptimized
                />
              </motion.figure>
            );
          })}
        </motion.div>
        <div ref={targetRefv2} className="absolute bottom-0 h-screen w-full">
          <motion.figure className="absolute inset-0 h-full w-full">
            <Image
              className="object-cover"
              src="/asset/gambar-ill/bg-fight.webp"
              alt="background"
              fill
              unoptimized
            />
          </motion.figure>
          <div className="absolute h-full w-full flex justify-center">
            <motion.figure
              style={{ y: figurePageTwo, scale: figurePageTwoScale }}
              className="h-full aspect-square relative z-3 scale-110 -translate-y-10"
            >
              <Image
                className="object-cover"
                src="/asset/gambar-ill/mark.webp"
                alt="background"
                fill
                unoptimized
              />
            </motion.figure>
          </div>
        </div>
      </section>
      {/* second page */}
      <section className="w-full flex flex-wrap justify-center">
        <span className="inline-flex justify-center w-full h-20 bg-background-second shadow-2xl">
          <span className="inline-flex items-center w-full max-w-7xl h-full">
            <p className="font-black text-2xl md:text-3xl px-2">
              ACTION ILLUSTRATION
            </p>{" "}
          </span>
        </span>
      </section>
      {/* third page */}
      <HorizontalSection />
      <SmartphoneVersion />
      {/*  */}
    </main>
  );
};

export default Illustrator;
