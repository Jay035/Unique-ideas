import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { projectsData } from "../data/data";
import arrowDouble from "../assets/arrow-double-up.svg";
import arrowLeftCircle from "../assets/arrow-left-circle.svg";
import officeHRScopeImg from "../assets/officeHr-scope.png";
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
  // useEffect(() => {
  //   let ctx = gsap.context(() => {
  //     // gsap.from(".wrapper", {
  //     //   duration: 4,
  //     //   // skewX: 10,
  //     //   // x: -100,
  //     //   opacity: 0,
  //     // });
  //     // gsap.from(".hero-item", {
  //     //   stagger: {
  //     //     amount: 0.4,
  //     //   },
  //     //   ease: Power3.easeIn,
  //     //   opacity: 0,
  //     // });
  //     // gsap.from(".hero-img", {
  //     //   x: -100,
  //     //   duration: 4,
  //     // });
  //     // gsap.from(".text", {
  //     //   y: -100,
  //     //   duration: 2,
  //     // });
  //     // gsap.from(".pText", {
  //     //   x: 100,
  //     //   duration: 5,
  //     // });
  //   }, container);
  //   return () => ctx.revert();
  // }, []);

  useEffect(() => {
    getSingleProject();
  }, []);
  return (
    <>
      <Transition />
      <main className="text-white overflow-x-hidden">
        <svg
          className="mx-[9.5vw] mt-9 mb-[2.31rem]"
          onClick={redirect}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="#202020"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        {/* <div className="flex items-center gap-2">
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
            </div> */}

        <section className="w-full relative">
          <img className="w-full" src={project?.banner} alt="" />
          <section className="absolute top-6 md:top-20 left-16 md:left-32 lg:top-56 lg:left-48 md:w-[28rem]">
            <h1 className="text-xl md:text-4xl lg:text-[4rem] leading-5 font-medium">
              {project?.name}{" "}
            </h1>
            <p className="mb-8 md:mb-16 mt-3 md:mt-6 md:text-xl lg:text-2xl">
              {project?.tagline}
            </p>
            <p className="lg:text-lg text-[#E9D7FE] font-[450]">
              {project?.subtitle}
            </p>
          </section>
        </section>

        <div className="text-[#344054] pb-10 ">
          <section className="pt-[4.56rem] pb-[4.38rem] px-[9.5vw]">
            <div className="">
              <h2 className="text-black font-[450] text-2xl md:text-[2rem] leading-normal">
                {project?.overview && "Overview"}
                {/* {!project?.overview && (
                  <p>
                    Why
                    <span className="text-[#5D5FEF] block">
                      {project?.name} ?
                    </span>{" "}
                  </p>
                )} */}
              </h2>
              {/* <div className="flex flex-col gap-4 md:text-xl lg:text-2xl"> */}
              {/* {project?.why &&
                  project?.why?.map((item, index) => (
                    <p key={index} className="tracking-[-0.03em]">
                      {item}
                    </p>
                  ))} */}
              {project?.overview && (
                <p className="leading-6 text-[#344054] md:text-lg mt-6">
                  {project?.overview}
                </p>
              )}
              {/* </div> */}
              <section className="mt-12 flex flex-col md:flex-row gap-10 md:gap-[3.4rem]">
                {/* My role */}
                <div className="">
                  <h5 className="text-xl font-[450] md:text-2xl">My Role</h5>
                  <ul className="flex flex-col gap-1 mt-4">
                    {project?.myRole?.map((role) => (
                      <li key={role?.id}>{role?.text}</li>
                    ))}
                  </ul>
                </div>
                {/* Platform */}
                <div className="">
                  <h5 className="text-xl font-[450] md:text-2xl">Platform</h5>
                  <p className="mt-4">{project?.platform}</p>
                </div>
                {/* Year */}
                <div className="">
                  <h5 className="text-xl font-[450] md:text-2xl">Year</h5>
                  <p className="mt-4">{project?.year}</p>
                </div>
              </section>
            </div>

            {/* {project?.examples?.length > 0 && (
              <div className="">
                <p className="flex items-center gap-2 md:text-xl lg:text-2xl">
                  {project.examplesText}{" "}
                  <img className="w-8 lg:w-9" src={emoji} alt="emoji" />
                </p>
                <div className="flex gap-8 pt-4 flex-wrap lg:grid lg:grid-cols-2 xl:grid-cols-3">
                  {project?.examples &&
                    project?.examples?.map((item, index) => (
                      <img key={index} src={item} alt="project example" />
                    ))}
                </div>
              </div>
            )} */}
            {/* {project?.name !== "Gifta" && project?.firstMedia && (
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
            )} */}
            {/* <div className="h-72 w-full bg-slate-200"></div> */}
          </section>
          {/* Voice of your gamers */}
          <section className="px-[9.5vw]">
            <h2 className="text-black mt-4 font-[450] text-2xl md:text-[2rem] leading-normal">
              Voice of your gamers.
            </h2>
            <ul className="flex flex-col gap-4">
              {project?.voice?.map((voice, index) => (
                <li key={index} className="md:text-lg">
                  {voice?.text}
                </li>
              ))}
            </ul>
          </section>
          {/* Goal & Target Audience */}
          <section className="bg-[#E9D7FE] mt-12 mx-[4vw] py-[2.38rem] px-8 flex flex-col md:flex-row gap-10 md:gap-20">
            {/* Goal */}
            <div className="">
              <h2 className="text-black font-semibold text-xl sm:text-2xl mb-4">
                Goal
              </h2>
              <p className="md:text-lg font-[450]">{project?.goal}</p>
            </div>
            {/* Target Audience */}
            <div className="">
              <h2 className="text-black font-semibold text-xl sm:text-2xl mb-4">
                Target Audience
              </h2>
              <ul className="flex flex-col gap-1 list-disc pl-5">
                {project?.targetAudience?.map((target, index) => (
                  <li key={index} className="md:text-lg font-[450]">
                    {target?.text}
                  </li>
                ))}
              </ul>
            </div>
          </section>
          {/* Quote */}
          <section className="my-14 px-[9.5vw] flex items-center flex-col gap-1 text-center">
            <h2 className="text-lg font-[450]">
              "The human voice is the most perfect instrument of all."
            </h2>
            <p className="text-[#667085] text-sm">Arvo Pärt</p>
          </section>
          {/* Gathering Context */}
          <section className="px-[9.5vw]">
            <h1 className="text-2xl md:text-[2rem] font-[450] leading-normal">Gathering Context</h1>
          </section>

          {/* WHAT IS ? */}
          {/* <section className="px-[9.5vw] bg-white">
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
                      <li key={index} className="">
                        {item}
                      </li>
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
          </section> */}
          {/* scope of work */}
          {/* {project?.name === "OfficeHR" && (
            <section className="pt-16 pb-12 md::pb-[100px] px-[9.5vw]">
              <h2 className="text-black font-semibold py-8 text-3xl md:text-5xl tracking-[-0.03em]">
                The <span className="text-[#5D5FEF]">Scope of Work</span>
              </h2>
              <div className="flex before:content-[''] before:inline-flex before:mr-[22px] before:w-1 before:h-[73px] before:bg-[#039855] font-onest md:text-xl lg:text-2xl tracking-[-0.03em]">
                <p>
                  {" "}
                  I used the{" "}
                  <a
                    target="_blank"
                    href="https://medium.com/design-leadership-notebook/the-new-double-diamond-design-process-7c8f12d7945e"
                    className="border-b border-[#344054] cursor-pointer"
                  >
                    Double Diamond Method
                  </a>{" "}
                  as a toolkit to guide my execution. This is because I find it
                  to be well structured and suitable for the project.
                </p>
              </div>
              <img className="mt-7" src={officeHRScopeImg} alt="scope img" />
            </section>
          )} */}
          {/* The process */}
          {/* <section className="pt-16 pb-12 md::pb-[100px] px-[9.5vw]">
            <h2 className="text-black font-semibold py-8 text-3xl md:text-5xl tracking-[-0.03em]">
              {project?.name === "OfficeHR" ? (
                "Discovery"
              ) : (
                <p>
                  The <span className="text-[#5D5FEF]">Process</span>
                </p>
              )}
            </h2>
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

              {project?.questionsAsked?.length > 0 && (
                <div className="font-onest">
                  <p className="md:text-xl lg:text-2xl tracking-[-0.03em]">
                    {project?.questionsText}
                  </p>
                  <ul className="list-disc ml-6 flex flex-col gap-3 mt-3">
                    {project?.questionsAsked?.length > 0 &&
                      project?.questionsAsked?.map((question, index) => (
                        <li
                          key={index}
                          className="md:text-xl lg:text-2xl tracking-[-0.03em]"
                        >
                          {question}
                        </li>
                      ))}
                  </ul>
                </div>
              )}
              <p className="tracking-[-0.03em] font-onest md:text-xl lg:text-2xl">
                {project?.additionalResearch}
              </p>
            </div>
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
            {project?.researchSynthesis?.length > 0 && (
              <div className="flex flex-col gap-4 pt-12">
                <h3 className="text-black text-2xl md:text-[32px] font-semibold tracking-[-0.01em]">
                  Synthesize Research, Uncover Findings
                </h3>
                <ul className="list-disc ml-6 flex flex-col gap-2">
                  {project?.researchSynthesis?.map((item, index) => (
                    <li key={index} className="font-onest text-[#333333]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {project?.keyTakeaways?.length > 0 && (
              <div className="flex flex-col gap-4 pt-12">
                <h3 className="text-black text-xl sm:text-2xl font-semibold tracking-[-0.01em]">
                  Key Takeaways
                </h3>
                <div className="flex flex-col gap-x-[38px] gap-y-[22px]">
                  {project?.keyTakeaways?.map((item, index) => (
                    <div
                      key={index}
                      className="border py-[18px] px-[29px] w-full flex flex-col gap-4"
                    >
                      <img
                        className="w-9 sm:w-[42.51px]"
                        src={item.emoji}
                        alt="emoji"
                      />
                      <p className="tracking-[-0.03em] text- sm:text-lg">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section> */}
          {/* defining */}
          {/* <section className="bg-white pb-[82px] px-[9.5vw]">
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
          </section> */}
          {/* The execution */}
          {/* <section className="bg-white pb-[82px] px-[9.5vw]">
            <h2 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
              The Execution
            </h2>
            <p className="md:text-xl lg:text-2xl my-8 font-onest tracking-[-0.03em]">
              {project?.execution}
            </p>
            {project?.executionImg && (
              <img
                className="w-fit mx-auto"
                src={project?.executionImg}
                alt="project execution preview"
              />
            )}
          </section> */}
          {/* The design */}
          {/* <section className="bg-white pb-[82px] px-[9.5vw]">
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
                </div>
              ))}
            </div>
          </section> */}
          {/* Testing */}
          {/* {project?.testing?.length > 0 && (
            <section className="bg-white pb-[82px] px-[9.5vw]">
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
          )} */}
          {/* Challenges and Lessons */}
          {/* <section className="bg-white pb-[82px] px-[9.5vw]">
            {project?.challengeAndLessonsText && (
              <h2 className="text-black font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
                Challenges and Lessons
              </h2>
            )}
            {project?.outcome && (
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
          </section> */}
        </div>
      </main>
    </>
  );
}
