type bluePrint = {
  name: string;
  src: string;
};

interface Tool {
  iconSrc: string;
  name: string;
}

type Skill = {
  image: string;
  category: string;
  tools: Tool[];
  toolsLabel: string;
};

export const toolsSection: readonly Skill[] = [
  {
    image: "/asset/gambar-ill/laptop.webp",
    category: "ILLUSTRATOR",
    tools: [
      { iconSrc: "illustrator.png", name: "Illustrator" },
      { iconSrc: "design.webp", name: "Infinite Design" },
    ],
    toolsLabel: "Tools",
  },
  {
    image: "/asset/gambar-ill/monitor.webp",
    category: "FRONT END",
    tools: [
      { iconSrc: "html-5.png", name: "HTML" },
      { iconSrc: "css-3.png", name: "CSS" },
      { iconSrc: "tailwind-css.svg", name: "Tailwind CSS" },
      { iconSrc: "js.png", name: "Javascript" },
      { iconSrc: "nextjs.svg", name: "NEXT JS" },
      { iconSrc: "laravel-64.png", name: "LARAVEL" },
    ],
    toolsLabel: "Tools",
  },
] as const;

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
