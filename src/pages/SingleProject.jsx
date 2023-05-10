import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data/data";
import arrowDouble from "../assets/arrow-double-up.svg";
import arrowLeftCircle from "../assets/arrow-left-circle.svg";
import { Link } from "react-router-dom";
import Transition from "../components/Transition";
import emoji from "../assets/Emoji.svg";
import { gsap } from "gsap";
import { useRef } from "react";
import { Power3 } from "gsap";

export default function SingleProject() {
  const { name } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState([]);
  const redirect = () => {
    navigate("/projects");
  };

  const getSingleProject = () => {
    const data = projectsData?.find((item) => item.name === name);
    setProject(data);
    console.log(project);
  };
  const container = useRef(null);
  useEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from(".wrapper", {
      //   duration: 4,
      //   // skewX: 10,
      //   // x: -100,
      //   opacity: 0,
      // });
      // gsap.from(".hero-item", {
      //   stagger: {
      //     amount: 0.4,
      //   },
      //   ease: Power3.easeIn,
      //   opacity: 0,
      // });
      // gsap.from(".hero-img", {
      //   x: -100,
      //   duration: 4,
      // });
      // gsap.from(".text", {
      //   y: -100,
      //   duration: 2,
      // });
      // gsap.from(".pText", {
      //   x: 100,
      //   duration: 5,
      // });
    }, container);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    getSingleProject();
  }, []);
  return (
    <>
      <Transition />

      <main className="text-white overflow-x-hidden">
        <div className="bg-[#111111] hero-item text pt-16 md:pt-20">
          <img
            onClick={redirect}
            className="cursor-pointer mx-8 sm:mx-14 xl:mx-[100px] w-16 md:w-40 pb-16 md:pb-20 lg:w-28"
            src={arrowLeftCircle}
            alt="arrow left"
          />
          <section className="px-8 sm:px-14 xl:px-[100px]">
            <div className="flex items-center gap-2">
              {project?.tag?.map((tag, index) => (
                <span
                  key={index}
                  className="border rounded-[30px] px-4 py-2 lg:py-3 md:text-xl 2xl:text-2xl tracking-[-0.03em]"
                >
                  {tag}
                </span>
              ))}

              <span
                className={`border px-4 py-2 lg:py-3 ${
                  project?.name === "Hang App"
                    ? "border-[#9CFF8F] text-[#9CFF8F]"
                    : "border-[#5D5FEF] text-[#5D5FEF]"
                } rounded-[30px] md:text-xl 2xl:text-2xl tracking-[-0.03em]`}
              >
                {project?.year}
              </span>
            </div>
            <h1 className="text-[40px] md:text-5xl xl:text-[120px] pt-4 pb-[42px]">
              {project?.name}{" "}
              {project?.proposal && (
                <span className="text-xl md:text-[32px]">( A Proposal )</span>
              )}
            </h1>
          </section>
        </div>

        <section className="w-full bg-[#111111]">
          <img className="w-full" src={project?.heroImg} alt="" />
        </section>

        <div className="bg-white text-[#344054] pb-10">
          <section className="px-8 sm:px-14 xl:px-[100px]  py-[100px] bg-white">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-0 lg:justify-between mb-[100px]">
              <h2 className="text-black font-semibold text-3xl md:text-5xl tracking-[-0.03em]">
                {project?.overview && "Overview"}
                {!project?.overview && (
                  <p>
                    Why
                    <span className="text-[#5D5FEF] block">
                      {project?.name} ?
                    </span>{" "}
                  </p>
                )}
              </h2>
              <div className="font-onest flex flex-col gap-4 md:text-xl lg:text-2xl">
                {project?.why &&
                  project?.why?.map((item, index) => (
                    <p key={index} className="tracking-[-0.03em]">
                      {item}
                    </p>
                  ))}
                {project?.overview &&
                  project?.overview?.map((item, index) => (
                    <p key={index} className="tracking-[-0.03em]">
                      {item}
                    </p>
                  ))}
              </div>
            </div>

            {project?.examples?.length > 0 && (
              <div className="">
                <p className="flex items-center gap-2 md:text-xl lg:text-2xl">
                  {project.examplesText}{" "}
                  <img className="w-8 lg:w-9" src={emoji} alt="emoji" />
                </p>
                <div className="flex gap-8 pt-4 flex-wrap">
                  {project?.examples &&
                    project?.examples?.map((item, index) => (
                      <img key={index} src={item} alt="project example" />
                    ))}
                </div>
              </div>
            )}
            {project?.name !== "Gifta" && project?.firstMedia && (
              <video
                autoPlay
                loop
                src={project?.firstMedia}
                alt="project preview"
              />
            )}
            {project?.overviewImg && (
              <img
                className="w-full"
                src={project?.overviewImg}
                alt="project preview"
              />
            )}
            {/* <div className="h-72 w-full bg-slate-200"></div> */}
          </section>
          {/* WHAT IS ? */}
          <section className="px-8 sm:px-14 xl:px-[100px] bg-white">
            <h2 className="text-black font-semibold text-3xl md:text-5xl tracking-[-0.03em]">
              What is <span className="text-[#5D5FEF]">{project?.name} ?</span>
            </h2>
            {project?.what?.map((item, index) => (
              <p key={index} className="mt-6  md:text-xl lg:text-2xl">
                {item}
              </p>
            ))}
            {project?.name === "Gifta" && project?.firstMedia && (
              <video
                className="mt-[30px] mb-[75px]"
                autoPlay
                loop
                src={project?.firstMedia}
                alt="project preview"
              />
            )}
            {project?.whatImg && (
              <img
                className="w-full mt-12 lg:mb-[100px]"
                src={project?.whatImg}
                alt="overview img"
              />
            )}
            {/* {!project?.whatImg && (
            <div className="h-72 w-full mt-12 mb-[100px] bg-slate-200"></div>
          )} */}

            <div className="pt-[74px] lg:py-[74px] flex flex-col md:flex-row md:items-start gap-8 md:gap-12">
              {project?.myContribution && (
                <div className="flex flex-col gap-4">
                  <h4 className="text-black tracking-[-0.01em] font-semibold text-xl md:text-2xl">
                    My Contribution
                  </h4>
                  <ul className="list-disc md:text-xl lg:text-2xl ml-6">
                    {project?.myContribution?.map((item, index) => (
                      <li key={index} className="">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {project?.team && (
                <div className="flex flex-col gap-4">
                  <h4 className="text-black tracking-[-0.01em] font-semibold text-xl md:text-2xl">
                    The team
                  </h4>
                  <ul className="list-disc md:text-xl lg:text-2xl ml-6">
                    {project?.team?.map((item, index) => (
                      <li className="">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
              {project?.year && (
                <div className="flex flex-col gap-4">
                  <h4 className="text-black tracking-[-0.01em] font-semibold text-xl md:text-2xl">
                    Year
                  </h4>
                  <ul className="list-disc md:text-xl lg:text-2xl ml-6">
                    <li className="">{project?.year}</li>
                  </ul>
                </div>
              )}
            </div>
          </section>
          {/* The process */}
          <section className="bg-white pt-16 pb-12 md::pb-[100px] px-8 sm:px-14 xl:px-[100px]">
            <h2 className="text-black font-semibold py-8 text-3xl md:text-5xl tracking-[-0.03em]">
              The <span className="text-[#5D5FEF]">Process</span>
            </h2>
            {/* primary research */}
            <div className="flex flex-col gap-4 pb-8">
              {project?.primaryResearch?.length > 0 ? (
                <h3 className="text-black text-xl md:text-[32px] font-semibold tracking-[-0.01em]">
                  Primary research
                </h3>
              ) : (
                <h3 className="text-black text-xl md:text-[32px] font-semibold tracking-[-0.01em]">
                  Research
                </h3>
              )}
              {project?.primaryResearch?.length > 0
                ? project?.primaryResearch?.map((item, index) => (
                    <p
                      key={index}
                      className="font-onest md:text-xl lg:text-2xl tracking-[-0.03em]"
                    >
                      {item}
                    </p>
                  ))
                : project?.research?.map((item, index) => (
                    <p
                      key={index}
                      className="font-onest md:text-xl lg:text-2xl tracking-[-0.03em]"
                    >
                      {item}
                    </p>
                  ))}

              <div className="font-onest">
                <p>{project?.questionsText}</p>
                <ul className="list-disc ml-6 flex flex-col gap-3 mt-3">
                  {project?.questionsAsked?.length > 0 &&
                    project?.questionsAsked?.map((question, index) => (
                      <li key={index}>{question}</li>
                    ))}
                </ul>
              </div>
              <p className="tracking-[-0.03em] font-onest">
                {project?.additionalResearch}
              </p>
            </div>
            {/* secondary research */}
            {project?.secondaryResearch?.length > 0 && (
              <div className="flex flex-col gap-4">
                <h3 className="text-black text-xl md:text-[32px] font-semibold tracking-[-0.01em]">
                  Secondary research
                </h3>
                {project?.secondaryResearch?.map((item, index) => (
                  <p
                    key={index}
                    className="font-onest md:text-xl lg:text-2xl tracking-[-0.03em]"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </section>
          {/* defining */}
          <section className="bg-white pb-[82px] px-8 sm:px-14 xl:px-[100px]">
            <h2 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
              {project?.name === "OfficeHR"
                ? "Defining our Product Offering"
                : "Defining features"}
            </h2>
            <p className="md:text-xl lg:text-2xl mt-8 mb-[17px] font-onest tracking-[-0.03em]">
              {project?.definingtext}
            </p>
            <div className="font-onest md:text-xl lg:text-2xl">
              <span>They include</span>
              <ul
                className={`list-disc ml-9 mt-2 grid ${
                  project?.productOfferings?.length > 3 && "md:grid-cols-2"
                } gap-x-4 gap-y-2`}
              >
                {project?.productOfferings?.map((item, index) => (
                  <li key={index} className="tracking-[-0.03em]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* The execution */}
          <section className="bg-white pb-[82px] px-8 sm:px-14 xl:px-[100px]">
            <h2 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
              The Execution
            </h2>
            <p className="md:text-xl lg:text-2xl my-8 font-onest tracking-[-0.03em]">
              {project?.execution}
            </p>
            {project?.executionImg && (
              <img
                src={project?.executionImg}
                alt="project execution preview"
              />
            )}
            {/* {!project?.executionImg && (
              <div className="bg-slate-300 h-[82px] w-full"></div>
            )} */}
          </section>
          {/* The design */}
          <section className="bg-white pb-[82px] px-8 sm:px-14 xl:px-[100px]">
            <h2 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
              {project?.name === "ID-UNILAG" ? "Designs" : "The Design"}
            </h2>

            <div className="flex flex-col md:gap-[100px]">
              {project?.design?.map((design, index) => (
                <div key={index} className="mt-8">
                  {design?.title && (
                    <h3 className="text-black flex items-center gap-4 font-semibold text-xl md:text-2xl lg:text-[32px]">
                      <img
                        className="-mt-1 w-4 md:w-5 lg:w-6"
                        src={arrowDouble}
                        alt="arrow"
                      />{" "}
                      <span>{design?.title}</span>
                    </h3>
                  )}
                  <p className="mb-8 md:text-xl lg:text-2xl mt-4 font-onest tracking-[-0.03em] text-[#344054]">
                    {design?.description}
                  </p>
                  {design?.video && (
                    <video
                      loop
                      autoPlay
                      src={design?.video}
                      alt="project preview"
                    />
                  )}
                  {design?.img && (
                    <img src={design?.img} alt="project preview" />
                  )}
                  {/* {!design?.video && (
                  <div className="bg-slate-300 h-[82px] w-full"></div>
                )} */}
                </div>
              ))}
            </div>
          </section>
          {/* Testing */}
          {project?.testing?.length > 0 && (
            <section className="bg-white pb-[82px] px-8 sm:px-14 xl:px-[100px]">
              <h2 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                Testing
              </h2>
              {project?.testing?.map((test, index) => (
                <p
                  key={index}
                  className="mt-8 font-onest md:text-xl lg:text-2xl"
                >
                  {test}
                </p>
              ))}
            </section>
          )}
          {/* Challenges and Lessons */}
          <section className="bg-white pb-[82px px-8 sm:px-14 xl:px-[100px]">
            {project?.challengeAndLessonsText && (
              <h2 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                Challenges and Lessons
              </h2>
            )}
            {(!project?.challengeAndLessonsText || !project?.outcome) && (
              <h2 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                Outcome
              </h2>
            )}
            <p className="pt-8 pb-4 font-onest md:text-xl lg:text-2xl">
              {project?.challengeAndLessonsText || project?.outcome}
            </p>
            {project?.challenges && (
              <ul className="flex flex-col gap-[26px] font-onest">
                {project?.challenges?.map((challenge, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 md:text-xl lg:text-2xl"
                  >
                    <img
                      className="w-4 md:w-5 lg:w-6 mt-1"
                      src={arrowDouble}
                      alt=""
                    />{" "}
                    {challenge}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
