type NavLink = {
  name: string;
  href: `/${string}`; // memastikan selalu diawali "/"
};

export const navLinks: readonly NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Illustrator",
    href: "/Illustrator",
  },
  {
    name: "Front-End",
    href: "/FrontEnd",
  },
  {
    name: "About",
    href: "/About",
  },
  {
    name: "Contact",
    href: "/Contact",
  },
] as const;
