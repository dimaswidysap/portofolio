import Image from "next/image";
import { gallery, toolsSection } from "./aboutData";
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
            <figure className="h-[25%] lg:h-[40%] aspect-square absolute top-0 drop-shadow-2xl mt-[2rem]">
              <Image
                className="object-cover"
                src={`/asset/gambar-ill/router.webp`}
                alt="laptop-pictures"
                fill
                unoptimized
              />
            </figure>
            <figure className="h-[40%] aspect-square absolute bottom-0 drop-shadow-2xl right-0 mt-[5rem]">
              <Image
                className="object-cover"
                src={`/asset/gambar-ill/kabellan.webp`}
                alt="monitor-pictures"
                fill
                unoptimized
              />
            </figure>
          </div>
        </div>
      </section>
      <section className="w-full relative  md:mt-[10rem]">
        <div className="translate-y-1/4 relative z-2 w-full max-w-[40rem] m-auto px-2 bg-background-second py-3 rounded-2xl shadow-md">
          <h1 className="font-black text-2xl">HALLO Let Me Introduce Myself</h1>
          <p className="mt-2 text-balance">
            My name is Dimas Widy Saputra, a 21-year-old student currently
            pursuing a degree in Informatics Engineering at Universitas PGRI
            Madiun, class of 2023. I am originally from Madiun and have a strong
            passion for both technology and digital creativity.
          </p>
          <span className="mt-2 w-1/2 h-px bg-background inline-flex"></span>
          <p className="mt-2 text-balance">
            I have a long-standing interest in drawing, which I have developed
            into a part of my personal portfolio as a way to express ideas and
            creativity visually. However, my primary goal is to build a career
            in the technology field, especially in web development.
          </p>
          <span className="mt-2 w-1/2 h-px bg-background inline-flex"></span>
          <p className="mt-2 text-balance">
            I am highly open to career opportunities as a Front-End Developer,
            where I can combine technical skills with visual aesthetics to
            create engaging and user-friendly web interfaces. In addition, I am
            also interested in working as an illustrator or graphic designer, as
            I have a genuine passion for these creative fields.
          </p>
        </div>
        <div className="absolute w-full h-full inset-0 hidden md:flex">
          {gallery.map((items, index) => {
            let style = "";

            if (index === 0) {
              style = "left-0 rotate-14 -top-[20rem] lg:-top-1/4";
            }
            if (index === 1) {
              style = "right-0 -rotate-14 -top-[15rem] lg:top-0";
            }
            if (index === 2) {
              style = "left-0 rotate-5 mt-[15rem]";
            }
            if (index === 3) {
              style = "right-0 rotate-3 mt-[20rem]";
            }
            return (
              <figure
                key={index}
                className={`${style} w-[20rem] aspect-3/4 p-2 bg-background-second absolute shadow-2xl rounded-2xl border border-white/20`}
              >
                <div className="w-full h-full bg-background rounded-md relative overflow-hidden">
                  <Image
                    loading="lazy"
                    className="object-cover"
                    src={items.src}
                    alt={items.name}
                    fill
                    unoptimized
                  />
                </div>
              </figure>
            );
          })}
        </div>
      </section>
      <section className="w-full max-w-7xl  mt-[20rem] flex flex-col md:flex-row gap-2 m-auto pb-[20rem]">
        {toolsSection.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col items-center md:w-1/2 "
            >
              <figure className="w-full md:w-1/2 aspect-square relative flex justify-center ">
                <Image
                  className="object-cover"
                  src={item.image}
                  alt={item.category}
                  fill
                  unoptimized
                />
                <span className="inline-flex absolute bg-background-second font-black text-3xl md:text-xl lg:text-3xl bottom-0 py-2.5 px-6 rounded-md shadow-2xl">
                  {item.category}
                  <span className="text-blue-700">.</span>
                  <span className="absolute top-full font-bold text-sm  bg-foreground text-background py-1 px-3 left-0 rounded-md -translate-y-1/3">
                    {item.toolsLabel}
                  </span>
                </span>
              </figure>
              <div className="flex flex-wrap justify-center gap-3 px-2.5 mt-10">
                {item.tools.map((icon, index) => {
                  return (
                    <figure
                      key={index}
                      className="flex gap-1.5 items-center bg-background-second p-1 rounded-full shadow-2xl"
                    >
                      <div className="h-14 aspect-square bg-always-foreground rounded-full relative">
                        <Image
                          loading="lazy"
                          className="object-cover p-3"
                          src={`/asset/icon/${icon.iconSrc}`}
                          alt={icon.name}
                          fill
                          unoptimized
                        />
                      </div>
                      <span className="pr-2 font-semibold">{icon.name}</span>
                    </figure>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default AboutMe;
