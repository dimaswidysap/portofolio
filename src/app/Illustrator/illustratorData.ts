type garudaImage = {
  alt: string;
  src: string; // memastikan selalu diawali "/"
};

type BluePrintFoto = {
  id: number;
  src: string;
  alt: string;
  label: string;
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

export const images: readonly BluePrintFoto[] = [
  {
    id: 1,
    src: "/asset/gambar-ill/falcon.webp",
    alt: "sam-wilson",
    label: "The new Captain America",
  },
  {
    id: 2,
    src: "/asset/gambar-ill/garuda.png",
    alt: "garuda",
    label: "garuda",
  },
  {
    id: 3,
    src: "/asset/gambar-ill/goddoom.webp",
    alt: "godzilla & doctor doom",
    label: "tes",
  },
  {
    id: 4,
    src: "/asset/gambar-ill/falcon.webp",
    alt: "sam-wilson",
    label: "tes",
  },
  {
    id: 5,
    src: "/asset/gambar-ill/harimau.png",
    alt: "harimau",
    label: "tes",
  },
  {
    id: 6,
    src: "/asset/gambar-ill/ibukeraton.webp",
    alt: "ibu-keraton",
    label: "tes",
  },
  {
    id: 7,
    src: "/asset/gambar-ill/zombie.png",
    alt: "zombie",
    label: "tes",
  },
] as const;
