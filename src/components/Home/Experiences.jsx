import { ExperiencesData } from "../../data/ExperienceData";

export default function Experiences() {
  return (
    <section>
      <h2 className="tracking-[-0.035em] font-SuisseWorks-Regular text-xl leading-normal md:text-[1.75rem] text-[#B386FF] mb-[27px]">
        EXPERIENCE
      </h2>
      <div className="flex flex-col gap-[13px]">
        {ExperiencesData.map((experience, index) => (
          <div
            key={index}
            className={`${experience.style} py-6 text-[#F3F4F6] md:text-xl`}
          >
            <p>
              <span>{experience.company},</span>
              <span className="text-[#AFB1AD] pl-1">{experience.duration}</span>
            </p>
            <p>{experience.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
