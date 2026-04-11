type footerLinkIcon = {
  name: string;
  href: string;
  src: string;
};

export const links: readonly footerLinkIcon[] = [
  {
    name: "icon-github",
    href: "https://github.com/dimaswidysap",
    src: "/asset/icon/github.png",
  },
  {
    name: "icon-instragram",
    href: "https://www.instagram.com/dimaswidysaputraa/",
    src: "/asset/icon/instagram.png",
  },
  {
    name: "icon-tiktok",
    href: "https://www.tiktok.com/@dimaswidysap",
    src: "/asset/icon/tik-tok.png",
  },
] as const;
