import { Link, useNavigate } from "react-router-dom";
import frame from "../../assets/officeHR.png";
import { projectsData } from "../../data/data";
import { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function MyWork() {
  const navigate = useNavigate();
  const showProjectDetails = (name) => {
    navigate(`/projects/${name}`);
  };

  const container = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel").forEach((wrapper, i) => {
        ScrollTrigger.create({
          trigger: wrapper,
          start: "top top",
          // () =>
          //   panel.offsetHeight < window.innerHeight
          //     ? "top top"
          //     : "bottom bottom",
          pin: true,
          pinSpacing: false,
          snap: 1,
        });
        gsap.from(wrapper.children, {
          // y: 50,
          // scale: 1,
          duration: 2,
          ease: Power3.easeOut,
          scrollTrigger: {
            trigger: wrapper,
            start: "top center",
            end: "top top",
            toggleActions: "play none reverse reset",
          },
        });
      });
      // let tops = panels.map((panel) =>
      //   ScrollTrigger.create({ trigger: panel, start: "top top" })
      // );

      // panels.forEach((panel, i) => {
      //   ScrollTrigger.create({
      //     trigger: panel,
      //     start: () =>
      //       panel.offsetHeight < window.innerHeight
      //         ? "top top"
      //         : "bottom bottom",
      //     pin: true,
      //     markers:true,
      //     pinSpacing: false,
      //   });
      // });

      // ScrollTrigger.create({
      //   snap: {
      //     snapTo: (progress, self) => {
      //       let panelStarts = tops.map((st) => st.start), // an Array of all the starting scroll positions. We do this on each scroll to make sure it's totally responsive. Starting positions may change when the user resizes the viewport
      //         snapScroll = gsap.utils.snap(panelStarts, self.scroll()); // find the closest one
      //       return gsap.utils.normalize(
      //         0,
      //         ScrollTrigger.maxScroll(window),
      //         snapScroll
      //       ); // snapping requires a progress value, so convert the scroll position into a normalized progress value between 0 and 1
      //     },
      //     duration: 0.5,
      //   },
      // });
    }, container);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={container} className="mb-[140px] pt-5 w-full" id="myWorks">
      <h2 className="tracking-[-0.03em] font-league-gothic mb-12 px-8 sm:px-14 xl:px-20 text-3xl md:text-5xl">
        MY WORK
      </h2>
      {/* <div className="snap-y snap-mandatory overflow-y-scroll grid gap-12"> */}
      <div className="">
        {projectsData?.slice(0, 4).map((project, index) => (
          <div
            key={index}
            onClick={() => showProjectDetails(project?.name)}
            className="panel cursor-pointer w-full relative"
            // className="panel cursor-pointer snap-start w-full h-screen relative"
          >
            <img
              className="hidden lg:block w-full h-screen max-h-screen object-cover object-center"
              src={project?.heroImg}
              alt="work img"
            />
            <img
              className="lg:hidden w-full h-screen max-h-screen object-cover object-center"
              src={project?.heroImgMobile}
              alt="work img"
            />
            <div className="absolute bottom-6 lg:bottom-[53px] pl-6 lg:pl-12 flex flex-col gap-2 lg:gap-4">
              <div className="flex items-center gap-2">
                {project?.tag?.map((tag, index) => (
                  <span
                    key={index}
                    className="border bg-[rgba(255,255,255,0.2)] rounded-[30px] px-4 py-2 lg:py-3 md:text-xl 2xl:text-2xl tracking-[-0.03em]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h1 className="font-league-gothic text-[40px] md:text-7xl lg:text-[120px]">
                {project?.name}
              </h1>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/projects"
        className="mt-[760px] md:mt-[820px] w-full max-w-[180px] text-center tracking-[-0.03em] rounded-[30px] md:text-xl flex justify-center items-center mx-auto border py-3 px-4"
      >
        SEE ALL WORKS
      </Link>
    </section>
  );
}
