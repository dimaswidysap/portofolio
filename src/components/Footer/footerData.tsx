import React from "react";
import { GitHub } from "./../icons/github";
import { Gmail } from "./../icons/gmail";
import { Instagram } from "./../icons/instagram";
import { TikTok } from "./../icons/tiktok";

type IconProps = { className?: string };

// 1. Tipe data disederhanakan
type FooterLinkIcon = {
  name: string;
  href: string;
  Icon: React.FC<IconProps>; // Langsung terima komponen
  nameContent: string;
};

// 2. Data array links (Tanpa object {type: "component", ...})
export const links: readonly FooterLinkIcon[] = [
  {
    name: "icon-github",
    href: "https://github.com/dimaswidysap",
    Icon: GitHub,
    nameContent: "Github",
  },
  {
    name: "icon-gmail",
    href: "mailto:dimaswidysaputra41@gmail.com",
    Icon: Gmail,
    nameContent: "Gmail",
  },
  {
    name: "icon-instagram",
    href: "https://www.instagram.com/dimaswidysaputraa/",
    Icon: Instagram,
    nameContent: "Instagram",
  },
  {
    name: "icon-tiktok",
    href: "https://www.tiktok.com/@dimaswidysap",
    Icon: TikTok,
    nameContent: "Tik Tok",
  },
] as const;
