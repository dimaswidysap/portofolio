import { dataProjects } from "./frontEndData";
import Image from "next/image";
const displayProject = dataProjects.find((_, index) => index === 0);
const picProject = displayProject?.image;

const FrontEnd = () => {
  return (
    <main className="w-full overflow-hidden">
      <section className="w-full max-w-7xl h-screen m-auto md:flex ">
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
          </span>
        </div>
      </section>
    </main>
  );
};
export default FrontEnd;
