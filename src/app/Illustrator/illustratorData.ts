type garudaImage = {
  alt: string;
  src: string; // memastikan selalu diawali "/"
};

export const garuda: readonly garudaImage[] = [
  {
    alt: "Garuda's tail",
    src: "/asset/gambar-ill/garuda/ekor.webp",
  },
  {
    alt: "Left wing of the Garuda",
    src: "/asset/gambar-ill/garuda/sayapkiri.webp",
  },
  {
    alt: "Right wing of the Garuda",
    src: "/asset/gambar-ill/garuda/sayapkanan.webp",
  },
  {
    alt: "Garuda body",
    src: "/asset/gambar-ill/garuda/badan.webp",
  },
] as const;

export const figures: readonly garudaImage[] = [
  {
    alt: "Hellcat",
    src: "/asset/gambar-ill/hellcatmobil.webp",
  },
  {
    alt: "MoonKnight",
    src: "/asset/gambar-ill/moonknight.webp",
  },
] as const;
