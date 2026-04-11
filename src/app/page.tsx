"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { garuda } from "./Illustrator/illustratorData";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const sayapKanan = useTransform(scrollYProgress, [0, 1], ["0deg", "45deg"]);
  const sayapKiri = useTransform(scrollYProgress, [0, 1], ["0deg", "-45deg"]);

  return (
    <main className="w-full overflow-hidden">
      {/* container foto */}
      <section className="w-full h-screen flex justify-center relative overflow-hidden">
        <span className="inline-flex h-1/2 absolute aspect-square top-0 right-0 bg-blue-900 opacity-60 blur-[50px] rounded-full translate-x-1/2 -translate-y-1/2 scale-150 md:scale-200 lg:scale-250"></span>
        <div className="w-full relative z-2 max-w-7xl flex justify-center items-center h-screen">
          <div className="w-full px-2">
            <p>I hope I become the man I want to be.</p>
            <h1 className=" font-black text-2xl md:text-5xl">
              DIMAS WIDY SAPUTRA
            </h1>
            <h1 className=" font-black text-2xl mt-4 md:text-5xl opacity-50">
              Creative.
            </h1>
            <Link
              href=""
              className="py-1 px-2 bg-foreground mt-4 inline-flex items-center gap-3 shadow-2xl rounded-xl"
            >
              <p className="font-bold text-sm text-background">See my CV</p>
              <ArrowRight className="text-background" size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* konten bawah */}

      <section className="w-full relative py-52 z-1">
        {/* container garuda */}
        <section ref={targetRef} className="h-200 w-full  flex justify-center">
          <motion.div
            style={{ y }}
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
                  style={style}
                  key={items.alt}
                  className="w-full h-full absolute"
                >
                  <Image
                    className="object-cover"
                    src={items.src}
                    alt={items.alt}
                    fill
                    unoptimized
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
              <h1 className="w-full flex justify-start px-2.5 font-black text-5xl">
                Illustrator
              </h1>
              <h5 className="w-full flex justify-center">and</h5>
              <h1 className="w-full flex justify-end px-2.5 font-black text-5xl">
                Front-End
              </h1>
            </div>
            <div className="w-full h-1/2 absolute inset-0">
              <figure className="absolute h-32 aspect-square rotate-12 mt-4">
                <Image
                  className="object-cover"
                  src="/asset/icon/illustrator.png"
                  alt="icon-adobe-illustrator"
                  fill
                  unoptimized
                />
              </figure>
              <figure className="absolute right-0 top-[15rem] h-32 aspect-square -rotate-12 mt-4">
                <Image
                  className="object-cover"
                  src="/asset/icon/vscode.svg"
                  alt="icon-vscode"
                  fill
                  unoptimized
                />
              </figure>
            </div>
          </section>
        </section>

        {/* konten front-end */}

        <section className="absolute flex-col h-full w-full inset-0 flex items-center justify-end items-end pb-20 md:pr-4">
          {/* konten 1 */}
          <figure className="relative z-10 rounded-2xl shadow-2xl w-[90%] md:w-[70%] max-w-200 aspect-video bg-background-second p-2 md:p-4">
            <div className="relative w-full h-full  rounded-md overflow-hidden">
              <Image
                className="object-cover"
                src="/asset/owner-pic/coding.png"
                alt="Random"
                fill
                unoptimized
              />
            </div>
          </figure>
          {/*  */}
          <section className="w-full flex mt-4 px-4 gap-4 lg:pl-[50%]">
            <figure className="w-1/2 aspect-square relative z-10 rounded-2xl shadow-2xl md:w-[40%] lg:max-w-[40rem]  bg-background-second p-2 md:p-4">
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <Image
                  className="object-cover"
                  src="/asset/owner-pic/profil-github.png"
                  alt="Random"
                  fill
                  unoptimized
                />
              </div>
            </figure>
            <figure className="flex-1 aspect-vedeo relative z-10 rounded-2xl shadow-2xl md:w-[40%] lg:max-w-[40rem]  bg-background-second p-2 md:p-4">
              <div className="relative w-full h-full rounded-md overflow-hidden">
                <Image
                  className="object-cover"
                  src="/asset/owner-pic/personv2.png"
                  alt="Random"
                  fill
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
