type NavLink = {
  name: string;
  href: `/${string}`; // memastikan selalu diawali "/"
};

export const navLinks: readonly NavLink[] = [
  {
    name: "Beranda",
    href: "/",
  },
  {
    name: "Illustrator",
    href: "/Illustrator",
  },
  {
    name: "Front-End",
    href: "/Front-End",
  },
  {
    name: "Tentang Aku",
    href: "/tentang-saya",
  },
  {
    name: "Hubungi Saya",
    href: "/contact",
  },
] as const;
