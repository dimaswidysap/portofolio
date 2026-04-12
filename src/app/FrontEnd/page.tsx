import { dataProjects } from "./frontEndData";
import Image from "next/image";
import Link from "next/link";
import { Files, Globe, CircleArrowOutUpRight } from "lucide-react";

const displayProject = dataProjects.find((_, index) => index === 0);
const picProject = displayProject?.image;

const cardProjects = dataProjects.filter((_, index) => index !== 0);

const FrontEnd = () => {
  return (
    <main className="w-full overflow-hidden">
      <section className="w-full max-w-7xl h-[115vh] md:h-screen m-auto md:flex ">
        <div className="w-full h-1/2 md:w-1/2 md:h-full flex flex-col relative px-5 justify-center items-center">
          {picProject?.map((items, index) => {
            console.log(items);
            return (
              <figure
                key={index}
                className={`w-[90%] lg:w-[70%] shadow-2xl aspect-16/10 p-2 bg-background-second rounded-2xl absolute ${index === 0 ? "-translate-y-1/2 translate-x-1/9" : ""} ${index === 1 ? "z-2" : ""} ${index === 2 ? "translate-y-1/2 -translate-x-1/9" : ""}`}
              >
                <div className="w-full h-full  rounded-xl relative overflow-hidden">
                  <Image
                    className="object-cover"
                    src={`/asset/pic-projects-web/${items}`}
                    alt="display-project"
                    fill
                    unoptimized
                  />
                </div>
              </figure>
            );
          })}
        </div>
        <div className="w-full h-1/2 md:w-1/2 md:h-full  flex items-center">
          <span className="px-5">
            <p className="font-black mb-3.5 text-2xl">
              {displayProject?.title}
            </p>
            <p>
              Situs Web yang dapat memmbantu anda dalam mencari smartphone yang
              sesuai dengan kebutuhan anda, Dengan mengajukan beberapa
              pertanyaan yang anda harus jawab. Website dibangun menggunakan
              HTML, dan Javascript. Mengambil dataset yang terpercaya dari David
              Gadgetin.
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                className="bg-background-second shadow-md flex gap-2 py-2 px-1 rounded-md"
                target="_blank"
                href={`${displayProject?.linkRep}`}
              >
                <span className="font-black">Repositori</span>
                <Files className="text-blue-700" />
              </Link>
              <Link
                className="bg-background-second shadow-md flex gap-2 py-2 px-1 rounded-md"
                target="_blank"
                href={`${displayProject?.linkRep}`}
              >
                <span className="font-black">Live Demo</span>
                <Globe className="text-blue-700" />
              </Link>
            </div>
          </span>
        </div>
      </section>

      {/* container-card */}
      <section className="w-full max-w-7xl  m-auto mt-32 md:mt-0 flex flex-wrap justify-center items-center gap-[5rem] mb-[10rem]">
        {cardProjects.map((items) => {
          const picDisplay = items.image.filter((_, index) => index === 0);
          return (
            <div
              key={items.title}
              className="w-[90%] md:max-w-[15rem] lg:max-w-[20rem] aspect-3/4 bg-background-second rounded-2xl shadow-md flex flex-col overflow-hidden"
            >
              <figure className="w-full p-3 aspect-16/10 bg-footerv2 rounded-2xl relative">
                <div className="w-full h-full rounded-md relative overflow-hidden">
                  <Image
                    className="object-cover"
                    src={`/asset/pic-projects-web/${picDisplay}`}
                    alt="display-project"
                    fill
                    unoptimized
                  />
                </div>
                <span className="absolute text-sm bottom-0 left-0 bg-foreground text-background-second font-black px-1.5 py-0.5 rounded-md mb-4 ml-4">
                  {items.reasonProject}
                </span>
              </figure>
              <div className="w-full px-2 flex-1  flex flex-col justify-between">
                <h2 className="mt-4 text-sm font-semibold">{items.title}</h2>
                <p className="line-clamp-3">{items.desc}</p>
                <Link
                  href=""
                  className="w-full mb-5 bg-background inline-flex justify-center py-2.5 rounded-md shadow-md gap-1.5"
                >
                  <span>See Project</span>
                  <CircleArrowOutUpRight className="text-blue-700" />
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};
export default FrontEnd;
