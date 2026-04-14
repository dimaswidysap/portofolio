import { dataProjects } from "@/app/FrontEnd/frontEndData";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
const ProjectDetail = ({ params }: { params: { id: string } }) => {
  const projectId = params.id;
  const projectDetail = dataProjects.find((items) => items.title === projectId);

  return (
    <main className="w-full">
      <section className="w-full max-w-7xl  m-auto">
        <nav className="mt-[5rem] w-full px-2">
          <Link href="/FrontEnd" className="flex gap-2">
            <ArrowLeft className="text-blue-700" />
            <span className="font-black text-2xl">Back</span>
          </Link>
        </nav>
        <h1 className="pt-[5rem] font-black text-black">
          {projectDetail?.title}
        </h1>
      </section>
    </main>
  );
};

export default ProjectDetail;
