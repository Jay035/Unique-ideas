import { SkillsData } from "../../data/SkillsData";

export default function Skills() {
  return (
    <section>
      <h2 className="tracking-[-0.03em] font-SuisseWorks-Regular text-xl leading-normal md:text-[1.75rem] text-[#FF8989]">
        SKILLS
      </h2>
      <div className="">
        {SkillsData.map((skill, index) => (
          <h3 key={index} className={`${skill.style} py-6 text-[#F3F4F6] md:text-2xl`}>{skill.name}</h3>
        ))}
      </div>
    </section>
  );
}
