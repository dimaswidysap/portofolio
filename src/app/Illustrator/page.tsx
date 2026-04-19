import Image from "next/image";
import { figures } from "./illustratorData";

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
        <span className="inline-flex justify-center w-full h-[5rem] bg-background-second">
          <span className="inline-flex items-center w-full max-w-7xl h-full">
            <p className="font-black text-2xl md:text-3xl px-2">
              ACTION ILLUSTRATION
            </p>{" "}
          </span>
        </span>
        <section className="w-full h-[50rem] max-w-7xl flex flex-wrap">
          {/* conatiner mocup */}
          <div className="w-full h-1/2 bg-red md:w-1/2 md:h-full">
            <div className="flex w-[90%] md:w-[70%] aspect-square m-auto mt-5 bg-background-second rounded-xl p-2">
              <figure className="w-full h-full rounded-md bg-foreground "></figure>
            </div>
          </div>
          {/* container figure */}
          <div className="w-full h-1/2 bg-red md:w-1/2 md:h-full bg-yellow-500"></div>
        </section>
      </section>
    </main>
  );
};

export default Illustrator;
