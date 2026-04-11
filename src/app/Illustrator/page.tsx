import Image from "next/image";
import { figures } from "./illustratorData";

const Illustrator = () => {
  return (
    <main className="w-full">
      {/* page one */}
      <section className="relative w-full h-[210vh] overflow-hidden">
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
    </main>
  );
};

export default Illustrator;
