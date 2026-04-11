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
