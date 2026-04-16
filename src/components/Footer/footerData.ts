type footerLinkIcon = {
  name: string;
  href: string;
  src: string;
  nameContent: string;
};

export const links: readonly footerLinkIcon[] = [
  {
    name: "icon-github",
    href: "https://github.com/dimaswidysap",
    src: "/asset/icon/github.png",
    nameContent: "Github",
  },
  {
    name: "icon-gmail",
    href: "mailto:dimaswidysaputra41@gmail.com",
    src: "/asset/icon/gmail.png",
    nameContent: "Gmail",
  },
  {
    name: "icon-instragram",
    href: "https://www.instagram.com/dimaswidysaputraa/",
    src: "/asset/icon/instagram.png",
    nameContent: "Instagram",
  },
  {
    name: "icon-tiktok",
    href: "https://www.tiktok.com/@dimaswidysap",
    src: "/asset/icon/tik-tok.png",
    nameContent: "Tik Tok",
  },
] as const;
