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
    desc: "A web-based application that provides smartphone recommendations based on the criteria entered by users.",
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
    desc: "A web-based platform that allows users to download TikTok videos without watermarks. This project demonstrates the practical implementation of asynchronous JavaScript using the Fetch API to perform real-time data integration",
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
    desc: "A productivity web application designed to help users organize and track their daily activities, making it easier to stay focused and productive.",
    linkRep: "https://github.com/dimaswidysap/todolist",
    linkDemo: "https://dimaswidysap.github.io/todolist/",
  },
] as const;
