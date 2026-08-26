import Image from "next/image";

const text = "beaware";
const textArray = text.toUpperCase().split("");
const data = [
  {
    src: "/asset/gambar-ill/falcon.webp",
    alt: "Sam Wilson",
    title: "Falcon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/garuda.png",
    alt: "Garuda",
    title: "Garuda",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/zombie.png",
    alt: "Zombie",
    title: "Zombie",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/harimau.png",
    alt: "Harimau",
    title: "Harimau",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/goddoom.webp",
    alt: "Godzilla & Doctor Doom",
    title: "Godzilla & Doom",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
  {
    src: "/asset/gambar-ill/ibukeraton.webp",
    alt: "Ibu Keraton",
    title: "Ibu Keraton",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem fugit eligendi distinctio qui dolorem nobis, similique saepe molestias non ex nemo amet cumque.",
  },
];

const display = data.slice(0, 4);

const SmartphoneVersion = () => {
  return (
    <section className="w-full h-screen relative md:hidden">
      {/* container text */}
      <section className="relative z-10 w-full h-full flex justify-center items-center">
        <h1 className="flex h-full w-20 flex-col justify-center items-center">
          {textArray.map((item, index) => {
            return (
              <span className="font-black text-[40px]" key={index}>
                {item}
              </span>
            );
          })}
        </h1>
      </section>
      {/* container gambar */}
      <section className="absolute h-full w-full inset-0 flex flex-col">
        {display.map((item, index) => {
          let style = "";

          if (index === 0) {
            style = "z-2 -translate-x-1/3";
          } else if (index === 1) {
            style = "z-2 translate-x-1/3";
          } else if (index === 2) {
            style = "-translate-x-1/3 -translate-y-[70%]";
          } else if (index === 3) {
            style = "translate-x-1/3 -translate-y-[70%]";
          }

          return (
            <figure
              key={index}
              className={`w-full aspect-square absolute bottom-0 overflow-hidden ${style}`}
            >
              <Image
                className="object-cover"
                src={item.src}
                alt="background"
                fill
                unoptimized
              />
              {/* Overlay Gradasi Hitam */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none" />
            </figure>
          );
        })}
      </section>
    </section>
  );
};

export default SmartphoneVersion;
