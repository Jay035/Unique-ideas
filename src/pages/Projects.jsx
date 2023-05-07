import { useNavigate } from "react-router-dom";
import arrowRight from "../assets/arrow-right-circle.svg";
import { projectsData } from "../data/data";
import Transition from "../components/Transition";
import { useRef } from "react";
import { useEffect } from "react";
import { gsap } from "gsap";

export default function Projects() {
  const navigate = useNavigate();
  const container = useRef(null);
  const showProjectDetails = (name, disabled) => {
    if (!disabled) {
      console.log(disabled);
      navigate(`/projects/${name}`);
    } else return;
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".container", {
        duration: 1,
        skewX: 10,
        x: -100,
        opacity: 0,
      });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <Transition />
      <div className="container bg-[#111111] px-8 sm:px-14 xl:px-[100px] pb-[101px] mt-12">
        <section className="flex justify-between items-end mb-[120px]">
          <h1 className="hero-item text text-4xl md:text-6xl lg:text-7xl xl:text-[120px] tracking-[-0.03em] text-white">
            RECENT <br /> PROJECTS
          </h1>
          <img
            className="w-12 md:w-[93.33px] animate-pulse"
            src={arrowRight}
            alt="arrow right"
          />
        </section>
        <section className="grid lg:grid-cols-2">
          <div className="text-white flex flex-col">
            {projectsData?.map((project, index) => (
              <div
                key={index}
                onClick={() =>
                  showProjectDetails(project?.name, project?.disabled)
                }
                className={`${project?.style} ${
                  !project?.disabled ? "cursor-pointer" : "cursor-default"
                } flex items-center py-4 lg:py-8 gap-8`}
              >
                <p className="border rounded-full py-2 md:py-3 px-4 border-[#D0D5DD]">
                  {project?.year}
                </p>
                <h2 className="text-3xl lg:text-[60px]">{project?.name}</h2>
              </div>
            ))}
          </div>
          <div className="bg-[#D9D9D9] mt-20 lg:mt-0 w-full lg:min-w-[640px] h-96 lg:h-[798px]"></div>
        </section>
      </div>
    </div>
  );
}
