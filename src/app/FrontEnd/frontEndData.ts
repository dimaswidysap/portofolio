type bluePrint = {
  year: string;
  title: string;
  reasonProject: string[];
  team: string[];
  tecnology: string[];
  image: string[];
  desc: string;
  linkRep: string;
  linkDemo: string;
};

export const dataProjects: readonly bluePrint[] = [
  {
    year: "2025",
    title: "GetPhone",
    reasonProject: [],
    team: [],
    tecnology: ["HTML", "CSS", "Javascript"],
    image: ["display1.png", "display2.png", "display3.png"],
    desc: "Sebuah website yang menyediakan layanan rekomendasi hp berdasarkan kriteria yang dimasuka pengguna.",
    linkRep: "https://github.com/dimaswidysap/rekomendasihp",
    linkDemo: "https://dimaswidysap.github.io/rekomendasihp/",
  },
  {
    year: "2026",
    title: "Vedeo-TikTok-Downloader",
    reasonProject: ["Fetch API"],
    team: ["Widy"],
    tecnology: ["HTML", "CSS", "Javascript"],
    image: [
      "vid-tiktok-downloader.png",
      "vid-tiktok-downloader2.png",
      "vid-tiktok-downloader3.png",
    ],
    desc: "Sebuah platform berbasis web yang memungkinkan pengguna mengunduh video TikTok tanpa watermark. Project ini merupakan implementasi praktis dari asynchronous JavaScript melalui pemanfaatan Fetch API untuk integrasi data secara real-time.",
    linkRep: "https://github.com/dimaswidysap/rekomendasihp",
    linkDemo: "https://dimaswidysap.github.io/vid-tiktok-downloader/",
  },

  {
    year: "2026",
    title: "WEB-TodoList",
    reasonProject: ["Local Storage"],
    team: ["Widy"],
    tecnology: ["HTML", "CSS", "Javascript"],
    image: ["todolist.png", "todolist2.png"],
    desc: "Sebuah website yang digunakan untuk mencatat semua aktivitas yang bertujuan untuk membuat lebih produktif",
    linkRep: "https://github.com/dimaswidysap/todolist",
    linkDemo: "https://dimaswidysap.github.io/todolist/",
  },
] as const;
