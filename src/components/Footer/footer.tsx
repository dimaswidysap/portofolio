import { navLinks } from "@/components/NavBar/navbarData";
import Link from "next/link";
import Image from "next/image";
import { links } from "./footerData";

const Footer = () => {
  return (
    <footer className="w-full h-[50rem] overflow-hidden relative bg-footer pt-10 px-4 flex justify-center">
      <section className="relative z-2 w-full max-w-7xl h-[35rem] md:h-[30rem] rounded-xl bg-footerv2 flex flex-wrap flex-col md:flex-row justify-between shadow-2xl">
        <div className="w-full pt-4 px-2 md:w-1/2">
          <h1>
            <span className="font-black text-2xl text-font-footer">WIDY</span>
          </h1>
          <h2 className="text-2xl font-black mt-5 text-font-footer">
            AYO BAHAS PROYEK ANDA SELANJUTNYA 🚀
          </h2>
          <p className="text-font-footer">Illustrasi atau Website</p>

          <div className="flex gap-4 mt-3">
            {links.map((items) => {
              return (
                <Link
                  target="_blank"
                  className="w-10 aspect-square bg-footer shadow-md p-2 rounded-full relative overflow-hidden"
                  key={items.name}
                  href={items.href}
                >
                  <Image
                    className="object-cover p-1.5"
                    src={items.src}
                    alt="Foto Profil"
                    fill
                    unoptimized
                  />
                </Link>
              );
            })}
          </div>
        </div>
        {/* navigasi */}
        <div className="md:w-1/2 px-2 md:flex md:justify-end">
          <div className="md:pt-4 md:px-2">
            <h1 className="font-black text-font-footer text-xl">MENU</h1>
            <ul>
              {navLinks.map((items) => {
                return (
                  <li key={items.href}>
                    <Link className="text-font-footer" href={items.href}>
                      {items.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        {/* copy right */}
        <div className="w-full px-5 h-max py-12 relative md:absolute md:bottom-0">
          <span className="inline-flex w-full h-px  bg-footer absolute left-1/2 -translate-x-1/2 bottom-full"></span>
          <p className="text-sm text-font-footer">Dimas Widy Saputra © 2026</p>
        </div>
      </section>

      <p className="absolute text-footerv2 bottom-0 text-9xl font-black translate-y-[30%] md:scale-200">
        WIDY
      </p>
    </footer>
  );
};

export default Footer;
