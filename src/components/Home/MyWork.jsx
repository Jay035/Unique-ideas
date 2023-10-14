import { Link, useNavigate } from "react-router-dom";
import frame from "../../assets/officeHR.png";
import { projectsData } from "../../data/data";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { Power3 } from "gsap";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function MyWork() {
  const navigate = useNavigate();
  const [mouseEntered, setMouseEntered] = useState(false);
  const container = useRef(null);

  const showProjectDetails = (name) => {
    setMouseEntered(true);
    navigate(`/projects/${name}`);
  };

  const zoomIn = () => {
    setMouseEntered(true);
  };

  const zoomOut = () => {
    setMouseEntered(false);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      // let panels = gsap.utils.toArray(".panel").forEach((wrapper, i) => {
      //   ScrollTrigger.create({
      //     trigger: wrapper,
      //     start: "top top",
      //     pin: true,
      //     pinSpacing: false,
      //     // snap: 1,
      //   });
      // gsap.to(wrapper.children, {
      //   scale: "1.1",
      // });
      // gsap.from(wrapper.children, {
      //   // scale: "1.05",
      //   ease: Power3.easeOut,
      //   scrollTrigger: {
      //     trigger: wrapper,
      //     start: "top center",
      //     end: "top top",
      //     toggleActions: "play none reverse reset",
      //   },
      // });
      // });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="mb-[140px] pt-5 w-full" id="myWorks">
      <h2 className="tracking-[-0.03em] font-SuisseWorks-Regular mb-[1.69rem] text-[1.75rem] leading-normal">
        WORK
      </h2>
      {/* <div className="snap-y snap-mandatory overflow-y-scroll grid gap-12"> */}
      <div className="grid gap-6 md:grid-cols-2">
        {projectsData?.map((project, index) => (
          <div
            key={index}
            className="panel"
            // className="panel cursor-pointer snap-start w-full h-screen relative"
          >
            <img
              onClick={() => showProjectDetails(project?.name)}
              className={`w-full cursor-pointer
               `}
              src={project?.heroImg}
              alt="work img"
            />
            <div className="mt-4">
              <h1 className="text-xl mb-1">{project?.name}</h1>
              <p className="text-xs text-[#AFB1AD]">{project?.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
      {/* <Link
        to="/projects"
        // ${
        //   mouseEntered ? "md:mt-[850px]" : ""
        // }
        className={`
          w-full max-w-[180px] mt-14 text-center tracking-[-0.03em] rounded-[30px] md:text-xl flex justify-center items-center mx-auto border py-3 px-4`}
      >
        SEE ALL WORKS
      </Link> */}
    </section>
  );
}
