interface WorkExperience {
  company: string;
  position: string;
  period: string;
  location: string;
  skills: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    company: "PT MENAKSOPAL LINK NUSANTARA",
    position: "Wi-Fi Installation Technician",
    period: "May 2023 – September 2023",
    location: "Jawa Timur, Indonesia",
    skills: [
      "Installation and configuration of customer Wi-Fi networks using fiber optic infrastructure",
      "Installation and setup of customer Wi-Fi networks using LAN cabling",
    ],
  },
  {
    company: "FREELANCE ILLUSTRATOR",
    position: "ILLUSTRATOR",
    period: "2024 - Now",
    location: "Jawa Timur, Indonesia",
    skills: ["Adobe Illustrator", "Infinite Design"],
  },
];
