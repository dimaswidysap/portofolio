import React from "react";
import { Illustrator } from "../../components/icons/adobeIllustrator";
import { Laravel } from "../../components/icons/laravel";
import { JavaScript } from "../../components/icons/javaScript";
import { CSS } from "../../components/icons/css";
import { TailwindCSS } from "../../components/icons/tailwindCss";
import { HTML5 } from "../../components/icons/html";
import { Nextjs } from "../../components/icons/nextjs";

type bluePrint = {
  name: string;
  src: string;
};
type foto = {
  src: string;
  alt: string;
};

type IconProps = { className?: string };

type ToolIcon =
  | { type: "component"; component: React.FC<IconProps> }
  | { type: "image"; src: string };

type Tool = {
  icon: ToolIcon;
  name: string;
};

type Skill = {
  image: string;
  category: string;
  tools: readonly Tool[];
  toolsLabel: string;
};

export const gallery: readonly bluePrint[] = [
  {
    name: "Beach",
    src: "/asset/owner-pic/beach.jpeg",
  },
  {
    name: "Beach",
    src: "/asset/owner-pic/1.jpeg",
  },
  {
    name: "Beach",
    src: "/asset/owner-pic/2.jpg",
  },
  {
    name: "Beach",
    src: "/asset/owner-pic/cat.jpeg",
  },
] as const;

export const fotos: readonly foto[] = [
  {
    src: "/asset/owner-pic/superman.jpg",
    alt: "foto-first",
  },
  {
    src: "/asset/owner-pic/batman.jpg",
    alt: "foto-second",
  },
  {
    src: "/asset/owner-pic/my-foto.jpg",
    alt: "foto-second",
  },
] as const;

export const toolsSection: readonly Skill[] = [
  {
    image: "/asset/gambar-ill/laptop.webp",
    category: "ILLUSTRATOR",
    tools: [
      {
        icon: { type: "component", component: Illustrator },
        name: "Illustrator",
      },
      {
        icon: { type: "image", src: "design.webp" },
        name: "Infinite Design",
      },
    ],
    toolsLabel: "Tools",
  },
  {
    image: "/asset/gambar-ill/monitor.webp",
    category: "FRONT END",
    tools: [
      { icon: { type: "component", component: HTML5 }, name: "HTML" },
      { icon: { type: "component", component: CSS }, name: "CSS" },
      {
        icon: { type: "component", component: TailwindCSS },
        name: "Tailwind CSS",
      },
      {
        icon: { type: "component", component: JavaScript },
        name: "Javascript",
      },
      { icon: { type: "component", component: Nextjs }, name: "NEXT JS" },
      { icon: { type: "component", component: Laravel }, name: "LARAVEL" },
    ],
    toolsLabel: "Tools",
  },
] as const;
