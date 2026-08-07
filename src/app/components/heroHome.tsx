import LinkButton from "@/components/mainButton";
import { Download, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section className="w-full h-screen bg-background-second ">
      <section className="w-full max-w-7xl h-full m-auto flex flex-col justify-center pl-16">
        <span className="bg-accent w-max px-2 py-px rounded-md">
          <p className="text-white text-sm font-semibold">Intro</p>
        </span>
        <h1 className="font-black text-4xl md:text-5xl lg:text-6xl mt-10">
          Dimas Widy Saputra
        </h1>

        <p className="text-sm mt-5 text-balance mb-5">
          <span className="text-red-500">Indo</span>nesia
        </p>
        <div className="flex flex-col gap-4">
          <LinkButton
            href="/About"
            icon={<ArrowRight size={18} />}
            bgColor="bg-background"
            textColor="text-white"
          >
            View Profile
          </LinkButton>
          <LinkButton
            href="https://drive.google.com/file/d/1KdXIcZe3kZdDf6wwO3oV4WIUdZgEl9Hw/view?usp=drive_link"
            icon={<Download size={18} />}
            bgColor="bg-background"
            textColor="text-white"
          >
            Resume
          </LinkButton>
        </div>
        {/* <div className="flex mt-5">
          <span className="font-sm">Follow</span>
        </div> */}
      </section>
    </section>
  );
}
