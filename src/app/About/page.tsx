import Image from "next/image";
import { gallery, toolsSection, fotos } from "./aboutData";
const AboutMe = () => {
  return (
    <main className="w-full overflow-hidden">
      {/* margin */}
      <div className="w-full h-screen"></div>
      {/* page one */}
      <section className="fixed inset-0 bg-red w-full h-screen flex justify-center items-center">
        <section className="relative z-2 w-full max-w-7xl h-screen flex justify-center items-center">
          <section className="w-[90%] h-[90%] max-h-[30rem] lg:w-[60%] flex flex-wrap p-2 ">
            {fotos.map((item, index) => {
              let style = "";

              if (index === 0 || index === 1) {
                style = "w-[50%] h-[50%] ";
              }

              if (index === 2) {
                style = "w-full h-[50%] ";
              }

              return (
                <figure
                  key={index}
                  className={`${style} p-1.5 group hover:scale-98 duration-300 transition ease-in-out `}
                >
                  <div className="w-full h-full shadow-md relative overflow-hidden rounded-2xl outline outline-foreground/10">
                    <Image
                      priority
                      className="object-cover group-hover:scale-110 duration-200 transition ease-in-out"
                      src={item.src}
                      alt={item.alt}
                      fill
                      unoptimized
                    />
                  </div>
                </figure>
              );
            })}
          </section>
        </section>
        <section className="absolute h-screen w-full">
          <span className="inline-flex h-[80%] aspect-square bg-blue-700 absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[60px] opacity-40"></span>
          <span className="inline-flex h-[80%] aspect-square bg-blue-700 absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 rounded-full blur-[60px] opacity-40"></span>
        </section>
      </section>
      {/* page less container*/}
      <section className="w-full bg-background relative flex flex-col items-center z-2">
        <section className="w-full  relative max-w-7xl">
          <div className="translate-y-1/4 relative outline outline-foreground z-2 w-full max-w-[40rem] m-auto px-2 bg-background-second py-3 rounded-2xl shadow-md">
            <h1 className="font-black text-2xl">
              HALLO Let Me Introduce Myself
            </h1>
            <p className="mt-2 text-balance">
              My name is Dimas Widy Saputra, a 21-year-old student currently
              pursuing a degree in Informatics Engineering at Universitas PGRI
              Madiun, class of 2023. I am originally from Madiun and have a
              strong passion for both technology and digital creativity.
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
              create engaging and user-friendly web interfaces. In addition, I
              am also interested in working as an illustrator or graphic
              designer, as I have a genuine passion for these creative fields.
            </p>
          </div>
          <div className="absolute w-full h-full inset-0 hidden md:flex">
            {gallery.map((items, index) => {
              let style = "";

              if (index === 0) {
                style = "left-0 rotate-14 -top-[5rem] lg:-top-1/4";
              }
              if (index === 1) {
                style = "right-0 -rotate-14 -top-[8rem] lg:top-0";
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
        {/* page two */}
        <section className="relative z-2 w-full max-w-7xl  mt-[20rem] flex flex-col md:flex-row gap-2 m-auto pb-[20rem]">
          {toolsSection.map((item, index) => {
            return (
              <div
                key={index}
                className="w-full flex flex-col items-center md:w-1/2 "
              >
                <figure className="w-full md:w-1/2 aspect-square relative flex justify-center drop-shadow-2xl">
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
      </section>
    </main>
  );
};

export default AboutMe;
