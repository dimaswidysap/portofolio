import Image from "next/image";

const AboutMe = () => {
  return (
    <main className="w-full overflow-hidden">
      <section className="w-full max-w-7xl h-screen m-auto">
        <div className="relative w-full h-screen flex flex-col justify-center items-center">
          <div className="absolute h-full w-full inset-0">
            <span className="absolute top-0 right-0 h-[80%] lg:h-full aspect-square bg-blue-900 rounded-full translate-x-1/2 -translate-y-1/2 md:translate-x-1/3 md:-translate-y-1/3 blur-[50px] opacity-60"></span>
          </div>
          <div className="relative  z-3 ">
            <h1 className="text-2xl md:text-3xl font-black flex gap-2">
              <span className="opacity-40">DIMAS</span>
              <span className="">
                <span>WIDY</span>
              </span>
              <span className="opacity-40">SAPUTRA</span>
            </h1>
          </div>
          <figure className="z-3 w-[90%] md:w-[70%] lg:w-[50%] aspect-5/3 lg:aspect-5/2 bg-background-second p-2 rounded-sm">
            <div className="h-full w-full rounded-xl overflow-hidden relative">
              <Image
                className="object-cover"
                src={`/asset/owner-pic/my-foto.jpg`}
                alt="person-picture"
                fill
                unoptimized
              />
            </div>
          </figure>
          <div className="absolute  w-full h-screen">
            <figure className="h-[25%] lg:h-[50%] aspect-square absolute top-0 drop-shadow-2xl mt-[5rem]">
              <Image
                className="object-cover"
                src={`/asset/gambar-ill/laptop.webp`}
                alt="laptop-pictures"
                fill
                unoptimized
              />
            </figure>
            <figure className="h-[40%] aspect-square absolute bottom-0 drop-shadow-2xl right-0 mt-[5rem]">
              <Image
                className="object-cover"
                src={`/asset/gambar-ill/monitor.webp`}
                alt="monitor-pictures"
                fill
                unoptimized
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="w-full overflow-hidden">
        <div className="w-full max-w-7xl m-auto px-2 bg-background-second py-3 rounded-2xl">
          <div className="md:w-1/2">
            <h1 className="font-black text-3xl">ILLUSTRATOR</h1>
            <p className="pt-3 text-sm">
              Hello everyone, I have a hobby of drawing. I am used to drawing
              with infinite design and adobe illustrator.
            </p>
            <div className="mt-5">
              <figure className="h-16 aspect-square  relative">
                <Image
                  className="object-cover"
                  src={`/asset/icon/illustrator.png`}
                  alt="icon-tools"
                  fill
                  unoptimized
                />
              </figure>
            </div>
          </div>
          <div className="w-full flex justify-center md:justify-end">
            <div className="md:w-1/2 mt-[5rem] relative ">
              <h1 className="font-black text-3xl">Front End Devoloper</h1>
              <p className="pt-3 text-sm">
                Saya juga memiliki minat di Front End Devoloper
              </p>
              <div className="mt-5">
                <figure className="h-16 aspect-square  relative">
                  <Image
                    className="object-cover"
                    src={`/asset/icon/illustrator.png`}
                    alt="icon-tools"
                    fill
                    unoptimized
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutMe;
