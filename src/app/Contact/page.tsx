import Link from "next/link";
import Image from "next/image";
import { links } from "@/components/Footer/footerData";
import { ArrowUpSquare } from "lucide-react";

const Contact = () => {
  const linksFilter = links.filter((_, index) => index !== 0 && index !== 1);
  const gmailLink = links.find((_, index) => index === 1);
  return (
    <main className="relative w-full bg-background-second pb-20 overflow-hidden">
      <section className="absolute w-full h-screen inset-0 ">
        <figure className="absolute top-1/8 -right-1/8 h-1/2 lg:scale-125 aspect-square opacity-50 lg:right-0">
          <Image
            className="object-cover"
            src="/asset/gambar-ill/bendera.png"
            alt="flags"
            fill
            unoptimized
          />
        </figure>
      </section>
      <section className="relative z-2 w-full max-w-7xl m-auto h-screen flex flex-col justify-between">
        <h1 className="text-4xl md:text-7xl w-full pt-[5rem] font-black px-2">
          GET IN TOUCH
        </h1>
        <div className="w-full md:flex px-2">
          <div className="w-full md:w-1/2 ">
            <span>
              <Link
                target="_blank"
                href={`${gmailLink?.href}`}
                className="font-black"
              >
                dimaswidysaputra41@gmail.com
              </Link>
              <p className="text-sm">
                I specialize in creating compelling illustrations and crafting
                clean, modern, and well-structured website interfaces
              </p>
            </span>
          </div>
          <div className="w-full mt-10 md:mt-0 md:w-1/2 md:pl-[5rem]">
            <span>
              <Link target="_blank" href="https://wa.me/6281252966557">
                +6281252966557
              </Link>
            </span>
            <span>
              <p className="pt-10 font-black">INDONEISA</p>
              <p>Im in beautiful country Indonesia</p>
            </span>
            <span>
              <p className="pt-10 font-black">MADIUN</p>
              <p>Pecel rice city</p>
            </span>
          </div>
        </div>
        <div className="w-full px-2">
          <ul className="flex gap-2.5">
            {linksFilter.map((item, index) => {
              return (
                <li key={index}>
                  <Link href={item.href} className="flex items-center gap-1.5">
                    <ArrowUpSquare />
                    <span>{item.nameContent}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Contact;
