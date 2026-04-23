"use client";
import Image from "next/image";
import Link from "next/link";
import { figures } from "./illustratorData";
import GallerySwiper from "./GallerySwiper";
import { links } from "@/components/Footer/footerData";

const instagram = links.find((_, index) => index === 2);
const tiktok = links.find((_, index) => index === 3);

const activity = [tiktok, instagram];

const Illustrator = () => {
  return (
    <main className="w-full">
      {/* page one */}
      <section className="relative w-full h-[210vh] overflow-hidden">
        <div className="absolute h-screen w-full max-w-7xl inset-0 left-1/2 -translate-x-1/2  z-4 flex justify-center items-start">
          <span className="mt-[10rem] md:mt-[15rem] relative text-always-foreground">
            <p className="absolute left-1/2 -translate-x-1/2 -top-1/2 font-black">
              BEST
            </p>
            <h1 className="font-black  text-5xl lg:text-7xl text-shadow-2xs">
              ILLUSTRATOR
            </h1>
            <p className="absolute left-1/2 -translate-x-1/2 top-1/1 font-black">
              I MAKE.
            </p>
          </span>
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
        <div className="absolute inset-0 h-screen w-full z-3 flex justify-center lg:justify-between items-end gap-1.5 ">
          {figures.map((items, index) => {
            return (
              <figure
                key={items.alt}
                className={`${index === 0 ? "translate-x-1/5" : "-translate-x-1/3"}  h-[70%] aspect-square relative`}
              >
                <Image
                  className="object-cover lg:scale-105"
                  src={items.src}
                  alt={items.src}
                  fill
                  unoptimized
                />
              </figure>
            );
          })}
        </div>
        <div className="absolute bottom-0 h-screen w-full">
          <figure className="absolute inset-0 h-full w-full">
            <Image
              className="object-cover"
              src="/asset/gambar-ill/bg-fight.webp"
              alt="background"
              fill
              unoptimized
            />
          </figure>
          <div className="absolute h-full w-full flex justify-center">
            <figure className="h-full aspect-square relative z-3 scale-110 -translate-y-10">
              <Image
                className="object-cover"
                src="/asset/gambar-ill/mark.webp"
                alt="background"
                fill
                unoptimized
              />
            </figure>
          </div>
        </div>
      </section>
      {/* second page */}
      <section className="w-full flex flex-wrap justify-center">
        <span className="inline-flex justify-center w-full h-[5rem] bg-background">
          <span className="inline-flex items-center w-full max-w-7xl h-full">
            <p className="font-black text-2xl md:text-3xl px-2">
              ACTION ILLUSTRATION
            </p>{" "}
          </span>
        </span>
      </section>
      {/* third page */}

      <section className="w-full h-[50rem] flex justify-center overflow-hidden bg-background-second">
        <section className="w-full h-full max-w-7xl flex flex-col-reverse md:flex-row">
          {/* conatiner mocup */}
          <div className="w-full h-1/2 bg-red md:w-1/3 md:h-full bg-background  shadow-2xl relative z-3">
            {/* hiasan */}
            <div className="w-full h-full relative  md:flex">
              <span className="inline-flex w-1/5 aspect-square bg-background absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 rounded-full"></span>
              <span className="inline-flex w-1/5 aspect-square bg-background md:hidden absolute top-0 left-0 -translate-y-1/2 -translate-x-1/2 rounded-full"></span>
              <span className="w-1/5 aspect-square bg-background hidden md:flex absolute bottom-0 right-0 translate-y-1/2 translate-x-1/2 rounded-full"></span>
            </div>
            {/* konten */}
            <div className="absolute w-full h-full inset-0 flex items-center">
              <div className="w-full px-2.5">
                <h1 className="text-4xl font-black">
                  See all my drawing activities on
                </h1>
                <div className="w-full flex flex-wrap">
                  {activity.map((items, index) => {
                    let link = "";
                    let figure = "";

                    if (index === 0) {
                      link =
                        "-translate-y-1/8 bg-footer -rotate-4 text-always-foreground";
                      figure = "bg-footerv2";
                    }
                    if (index === 1) {
                      link =
                        "translate-y-1/8 bg-footer ml-4 rotate-4 text-always-foreground";
                      figure = "bg-footerv2";
                    }

                    return (
                      <Link
                        key={index}
                        href={`${items?.href}`}
                        target="_blank"
                        className={` ${link} shadow-md  outline outline-foreground/50  flex items-center gap-1.5 w-max p-2 rounded-xl`}
                      >
                        <figure
                          className={`h-14 aspect-square shadow-md rounded-md relative ${figure}`}
                        >
                          <Image
                            className="object-cover p-1.5"
                            src={`${items?.src}`}
                            alt="Foto Profil"
                            fill
                            unoptimized
                          />
                        </figure>
                        <span className="font-black">
                          {" "}
                          {items?.nameContent}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* container figure */}
          <div className="w-full flex-1 bg-red md:w-1/2 md:h-full items-center justify-center  bg-background-second ">
            <GallerySwiper />
          </div>
        </section>
      </section>
    </main>
  );
};

export default Illustrator;
