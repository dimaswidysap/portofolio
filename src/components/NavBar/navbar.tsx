"use client";
import { useState, useRef, useEffect } from "react";
import ButtonThemes from "@/components/ButtonTheme/buttonToggle";
import Link from "next/link";
import { navLinks } from "./navbarData";

import {
  Home,
  Terminal,
  PenTool,
  Grid2X2,
  UserCircle,
  Mail,
} from "lucide-react";

const linkHome = navLinks.find((_, index) => index === 0);
const linkMain = navLinks.filter((_, index) => index === 1 || index === 2);

const renderIcon = (name: string) => {
  switch (name) {
    case "Beranda":
      return <Home size={15} />;
    case "Illustrator":
      return <PenTool size={15} />;
    case "Front-End":
      return <Terminal size={15} />;
    case "About Me":
      return <UserCircle size={15} />;
    case "Contact Me":
      return <Mail size={15} />;
    default:
      return <Grid2X2 size={15} />;
  }
};

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [open]);

  return (
    <header className="w-full fixed inset-0 flex justify-center bg-background-second h-max shadow-md z-50">
      <nav
        ref={containerRef}
        className="relative flex justify-between items-center w-full h-max max-w-7xl px-4 md:px-2 py-4 md:py-5"
      >
        <Link
          className="scale-150 md:scale-100 font-bold h-max flex items-center gap-2 w-max text-sm shadow-md bg-background py-0.5 px-1 rounded-sm"
          href={linkHome?.href || "/"}
        >
          <Home size={15} />
          <span className="hidden md:flex">{linkHome?.name}</span>
        </Link>

        <div className="flex gap-4 items-center">
          <ul className=" gap-2 hidden md:flex">
            {linkMain.map((item) => (
              <li key={item.name}>
                <Link
                  className="font-bold flex items-center gap-2 w-max text-sm shadow-md bg-background py-0.5 px-1 rounded-sm"
                  href={item.href}
                >
                  {item.name === "Illustrator" ? (
                    <PenTool size={15} />
                  ) : (
                    <Terminal size={15} />
                  )}

                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button
            onClick={() => setOpen(!open)}
            className="bg-background h-max p-1 rounded-md"
          >
            <Grid2X2 size={20} />
          </button>
        </div>

        <section
          className={`${
            open ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
          } px-4 py-10 absolute  top-full right-0 shadow-md bg-background-second transition-all duration-200 ease-in-out`}
        >
          <ul className="flex gap-2 flex-col items-end">
            {navLinks.map((item) => (
              <li
                key={item.name}
                className={`${
                  item.name === "Beranda" ||
                  item.name === "Illustrator" ||
                  item.name === "Front-End"
                    ? "md:hidden"
                    : "flex"
                }`}
              >
                <Link
                  onClick={() => setOpen(false)}
                  className="font-bold flex items-center gap-2 w-max text-sm shadow-md bg-background py-0.5 px-1 rounded-sm"
                  href={item.href}
                >
                  {renderIcon(item.name)}
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ButtonThemes />
        </section>
      </nav>
    </header>
  );
};

export default NavBar;
