import { dataProjects } from "@/app/FrontEnd/frontEndData";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const projectDetail = dataProjects.find((items) => items.title === id);

  return (
    <main className="w-full">
      <section className="w-full max-w-7xl  m-auto">
        <nav className="mt-[5rem] w-full px-2">
          <Link href="/FrontEnd" className="flex gap-2">
            <ArrowLeft className="text-blue-700" />
            <span className="font-black text-2xl">Back</span>
          </Link>
        </nav>
        <div className="w-full md:flex pt-[10rem]">
          <div className="wfull  px-2  md:w-1/4">
            <span>
              <h3 className="font-black text-xl">PEOJECT</h3>
              <p>{projectDetail?.title.split("-").join(" ")}</p>
            </span>
            <span>
              <h3 className="font-black text-xl">TECNOLOGY</h3>
              <ul className="flex gap-3 flex-wrap">
                {projectDetail?.tecnology.map((items, index) => {
                  return <li key={index}>{items}</li>;
                })}
              </ul>
            </span>
            <span>
              <h3 className="font-black text-xl">YEAR</h3>
              <p>{projectDetail?.year}</p>
            </span>
            <span>
              <h3 className="font-black text-xl">LIVE</h3>
              <Link
                className="text-blue-700 font-bold"
                target="_blank"
                href={`${projectDetail?.linkDemo}`}
              >
                See Webiste
              </Link>
            </span>
            <span>
              <h3 className="font-black text-xl">SOURCE CODE</h3>
              <Link
                className="text-blue-700 font-bold"
                target="_blank"
                href={`${projectDetail?.linkDemo}`}
              >
                See Repository
              </Link>
            </span>
          </div>
          <div className="wfull px-2">
            <span>
              <h3 className="font-black text-xl">DESCRIPTION</h3>
              <p className="text-balance">{projectDetail?.desc}</p>
            </span>
          </div>
        </div>
        <div className="w-full py-[10rem] flex flex-col items-center gap-10">
          {projectDetail?.image.map((items, index) => {
            return (
              <figure
                key={index}
                className="w-[90%] md:w-[50%] aspect-16/9 bg-background-second rounded-2xl shadow-md p-2"
              >
                <div className="relative h-full w-full rounded-xl overflow-hidden">
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
      </section>
    </main>
  );
};

export default ProjectDetail;
