import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { projectsData } from "../data/data";
import arrowDouble from "../assets/arrow-double-up.svg";
import arrowLeftCircle from "../assets/arrow-left-circle.svg";
import { Link } from "react-router-dom";

export default function SingleProject() {
  const { name } = useParams();
  const [project, setProject] = useState([]);

  const getSingleProject = () => {
    const data = projectsData?.find((item) => item.name === name);
    setProject(data);
    console.log(project);
  };

  useEffect(() => {
    getSingleProject();
  }, []);
  return (
    <main className="text-white mt-16 md:mt-20 lg:mt-[216px]">
      <Link to="/projects">
        <img
          className="px-8 sm:px-14 xl:px-[100px] w-28 mb-16 md:mb-20 lg:w-32"
          src={arrowLeftCircle}
          alt="arrow left"
        />
      </Link>
      <section className="px-8 sm:px-14 xl:px-[100px]">
        <div className="flex items-center gap-2">
          <span className="border rounded-[30px] px-4 py-2 lg:py-3 md:text-xl 2xl:text-2xl tracking-[-0.03em]">
            HR
          </span>
          <span className="border rounded-[30px] px-4 py-2 lg:py-3 md:text-xl 2xl:text-2xl tracking-[-0.03em]">
            People Management
          </span>
          <span className="border px-4 py-2 lg:py-3 border-[#5D5FEF] rounded-[30px] md:text-xl 2xl:text-2xl tracking-[-0.03em]">
            2022
          </span>
        </div>
        <h1 className="text-[40px] md:text-5xl xl:text-[120px] mt-4 mb-[42px]">
          {project?.name}
        </h1>
      </section>
      <section className="h-72 w-full xl:h-[863px] bg-slate-200"></section>
      <section className="px-8 sm:px-14 xl:px-[100px] grid lg:grid-cols-2 gap-6 lg:gap-[127px] text-black py-[100px] bg-white">
        <h2 className="font-semibold text-3xl md:text-5xl tracking-[-0.03em]">
          Why <span className="text-[#5D5FEF] block">{project?.name} ?</span>
        </h2>
        <div className="text-[#344054] font-onest md:text-xl lg:text-2xl ">
          <p className="tracking-[-0.03em]">
            When i was approached to be a member of the team to create OfficeHR,
            I was delighted by the idea on what it is to be about. Having
            experienced working in start-ups, I could relate to how difficult
            carrying out HR processes was to the management. From hiring,
            onboarding, team management down to payments was a struggle. To
            these firms especially SMEs, it led to a lack of organization, time
            consuming in administrative tasks and even difficulty in tracking
            employee information and performance.{" "}
          </p>
          <p className="tracking-[-0.03em]">
            A migraine existed that needed to be attended to, We needed to
            create a solution, one that will help businesses, especially SMEs
            take care of their team while accommodating their pocket sizes. The
            solution is OfficeHR, an efficient and user friendly HRMS solution
            that caters to all the core HR processes, helping organizations
            better streamline their HR operations.
          </p>
        </div>
        <div className="h-72 w-full xl:h-[863px] bg-slate-200"></div>
      </section>
      {/* WHAT IS ? */}
      <section className="px-8 sm:px-14 xl:px-[100px] bg-white text-black">
        <h2 className="font-semibold text-3xl md:text-5xl tracking-[-0.03em]">
          What is <span className="text-[#5D5FEF]">{project?.name} ?</span>
        </h2>
        <p className="mt-6 text-[#344054]">
          OfficeHR is a comprehensive HR platform offering a wide range of
          features to manage all aspects of the HR process from hiring to
          offboarding. It is intuitive, user friendly and easy to navigate,
          allowing business owners and HR professionals the liberty to
          efficiently manage their tasks while creating an enabling environment
          for employees to easily get acquainted with their workspace.
        </p>
        <div className="h-72 w-full xl:h-[863px] mt-12 mb-[100px] bg-slate-200"></div>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="tracking-[-0.01em] font-semibold text-xl md:text-2xl">
              My Contribution
            </h4>
            <ul className="list-disc text-[#344054] md:text-xl lg:text-2xl ml-6">
              <li className="">Product Strategy</li>
              <li className="">User Research</li>
              <li className="">UX/UI Design</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="tracking-[-0.01em] font-semibold text-xl md:text-2xl">
              The team
            </h4>
            <ul className="list-disc text-[#344054] md:text-xl lg:text-2xl ml-6">
              <li className="">1 Product Designer</li>
              <li className="">User Research</li>
              <li className="">UX/UI Design</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="tracking-[-0.01em] font-semibold text-xl md:text-2xl">
              Year
            </h4>
            <ul className="list-disc text-[#344054] md:text-xl lg:text-2xl ml-6">
              <li className="">2022</li>
            </ul>
          </div>
        </div>
      </section>
      {/* The process */}
      <section className="bg-white text-black pt-16 pb-[100px] px-8 sm:px-14 xl:px-[100px]">
        <h2 className="font-semibold my-8 text-3xl md:text-5xl tracking-[-0.03em]">
          The <span className="text-[#5D5FEF]">Process</span>
        </h2>
        {/* primary research */}
        <div className="flex flex-col gap-4 mb-8">
          <h3 className="text-xl md:text-[32px] font-semibold tracking-[-0.01em]">
            Primary research
          </h3>
          <p className="font-onest text-[#344054] md:text-xl lg:text-2xl tracking-[-0.03em]">
            When we first began ideating for our HRMS product, we had a
            hypothesis but we needed to verify that our idea was an actual need
            in our target market. To validate our idea, I conducted surveys with
            our target groups: business owners, HR professionals and employees.
            The goal for this survey was to gain insight into HR processes these
            groups were currently using as well as any pain points they
            experienced.{" "}
          </p>
          <p className="font-onest text-[#344054] md:text-xl lg:text-2xl tracking-[-0.03em]">
            The survey revealed that many organizations struggled with managing
            HR processes, particularly as they grow in size. This confirmed our
            hypothesis. Responses received expressed frustration with manual
            processes and having to hop from one platform to another to execute
            tasks as this was prone to error and time consuming to manage.
            Business owners were interested in solutions that wil help them
            streamline HR operations, reduce costs amd improve employee
            satisfaction.{" "}
          </p>
        </div>
        {/* secondary research */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl md:text-[32px] font-semibold tracking-[-0.01em]">
            Secondary research
          </h3>
          <p className="font-onest text-[#344054] md:text-xl lg:text-2xl tracking-[-0.03em]">
            In addition to conducting surveys, I conducted a competitive
            analysis to better understand the market we were getting into and
            what other businesses in the HRMS space was offering. I identified
            several HRMS provides that offered similar services but many of them
            were either too expensive for SMEs to handle or only offered a
            limited set of HR processes.
          </p>
        </div>
      </section>
      <section className="bg-white pb-[82px] text-black px-8 sm:px-14 xl:px-[100px]">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
          Defining our Product Offering
        </h2>
        <p className="md:text-xl lg:text-2xl mt-8 mb-[17px] font-onest tracking-[-0.03em]">
          With clear set out goals to become a home for all HR services, and
          research findings that validated our hypothesis, we dived into
          outlining key HR solutions to be accommodated.
        </p>
        <div className="font-onest">
          <span>They include</span>
          <ul className="list-disc ml-9 mt-2 grid md:grid-cols-2 gap-x-4 gap-y-2">
            <li className="tracking-[-0.03em]">Hiring and Engineering</li>
            <li className="tracking-[-0.03em]">Hiring and Engineering</li>
            <li className="tracking-[-0.03em]">Hiring and Engineering</li>
            <li className="tracking-[-0.03em]">Hiring and Engineering</li>
            <li className="tracking-[-0.03em]">Hiring and Engineering</li>
            <li className="tracking-[-0.03em]">Hiring and Engineering</li>
          </ul>
        </div>
      </section>
      {/* The execution */}
      <section className="bg-white pb-[82px] text-black px-8 sm:px-14 xl:px-[100px]">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
          The Execution
        </h2>
        <p className="md:text-xl lg:text-2xl my-8 font-onest tracking-[-0.03em]">
          The goal was to ensure OfficeHR was intuitive, user friendly and easy
          to navigate so to kick that off, i put up a user flow, one that
          highlights the hierarchy of our platform.
        </p>
        <div className="bg-slate-300 h-[82px] w-full"></div>
      </section>
      {/* The design */}
      <section className="bg-white pb-[82px] text-black px-8 sm:px-14 xl:px-[100px]">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
          The Design
        </h2>
        <div className="flex flex-col gap-[100px]">
          <div className="mt-8">
            <h3 className="flex items-center gap-4 font-semibold text-xl md:text-[32px]">
              <img
                className="-mt-1 w-4 md:w-5 lg:w-6"
                src={arrowDouble}
                alt="arrow"
              />{" "}
              Hiring & Onboarding
            </h3>
            <p className="mb-8 md:text-xl lg:text-2xl mt-4 font-onest tracking-[-0.03em] text-[#344054]">
              OfficeHR makes it easy to manage the recruitment process, from
              posting job vacancies to tracking applications and scheduling
              interviews. The platform allows HR professionals to create
              customized onboarding workflows, ensuring a smooth transition for
              new hires.
            </p>
            <div className="bg-slate-300 h-[100px] w-full"></div>
          </div>
          <div className="">
            <h3 className="flex items-center gap-4 font-semibold text-xl md:text-[32px]">
              <img
                className="-mt-1 w-4 md:w-5 lg:w-6"
                src={arrowDouble}
                alt="arrow"
              />{" "}
              Hiring & Onboarding
            </h3>
            <p className="mb-8 md:text-xl lg:text-2xl mt-4 font-onest tracking-[-0.03em] text-[#344054]">
              OfficeHR makes it easy to manage the recruitment process, from
              posting job vacancies to tracking applications and scheduling
              interviews. The platform allows HR professionals to create
              customized onboarding workflows, ensuring a smooth transition for
              new hires.
            </p>
            <div className="bg-slate-300 h-[100px] w-full"></div>
          </div>
          <div className="">
            <h3 className="flex items-center gap-4 font-semibold text-xl md:text-[32px]">
              <img
                className="-mt-1 w-4 md:w-5 lg:w-6"
                src={arrowDouble}
                alt="arrow"
              />{" "}
              Hiring & Onboarding
            </h3>
            <p className="mb-8 md:text-xl lg:text-2xl mt-4 font-onest tracking-[-0.03em] text-[#344054]">
              OfficeHR makes it easy to manage the recruitment process, from
              posting job vacancies to tracking applications and scheduling
              interviews. The platform allows HR professionals to create
              customized onboarding workflows, ensuring a smooth transition for
              new hires.
            </p>
            <div className="bg-slate-300 h-[100px] w-full"></div>
          </div>
          <div className="">
            <h3 className="flex items-center gap-4 font-semibold text-xl md:text-[32px]">
              <img
                className="-mt-1 w-4 md:w-5 lg:w-6"
                src={arrowDouble}
                alt="arrow"
              />{" "}
              Hiring & Onboarding
            </h3>
            <p className="mb-8 md:text-xl lg:text-2xl mt-4 font-onest tracking-[-0.03em] text-[#344054]">
              OfficeHR makes it easy to manage the recruitment process, from
              posting job vacancies to tracking applications and scheduling
              interviews. The platform allows HR professionals to create
              customized onboarding workflows, ensuring a smooth transition for
              new hires.
            </p>
            <div className="bg-slate-300 h-[100px] w-full"></div>
          </div>
        </div>
      </section>
      {/* Testing */}
      <section className="bg-white pb-[82px] text-black px-8 sm:px-14 xl:px-[100px]">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
          Testing
        </h2>
        <p className="mt-8">
          After completion of the first version of the designs, I proceeded to
          conduct remote testing. During this phase, I asked participants to
          complete various tasks on the platform such as hiring an employee,
          managing employees, completing payments and taking time off. I
          observed their behaviour and collected feedback. Based on these
          findings, I iterated on how the features functioned so as to improve
          the user experience.{" "}
        </p>
      </section>
      {/* Challenges and Lessons */}
      <section className="bg-white pb-[82px] text-black px-8 sm:px-14 xl:px-[100px]">
        <h2 className="font-semibold text-3xl md:text-4xl lg:text-5xl tracking-[-0.03em]">
          Challenges and Lessons
        </h2>
        <p className="mt-8 mb-4">
          Working as a solo UX Designer came with its challenges. Those
          challenges though overcame include:
        </p>
        <ul className="flex flex-col gap-[26px]">
          <li className="flex items-start gap-2 md:text-xl lg:text-2xl">
            <img className="w-4 md:w-5 lg:w-6 mt-1" src={arrowDouble} alt="" />{" "}
            The requirements got somewhat complex because a HR management system
            is often multifaceted involving multiple user types. To bypass this,
            I put up an easy to use flow that accommodated all user types
          </li>
          <li className="flex items-start gap-2 md:text-xl lg:text-2xl">
            <img className="w-4 md:w-5 lg:w-6 mt-1" src={arrowDouble} alt="" />{" "}
            The requirements got somewhat complex because a HR management system
            is often multifaceted involving multiple user types. To bypass this,
            I put up an easy to use flow that accommodated all user types
          </li>
        </ul>
      </section>
    </main>
  );
}
