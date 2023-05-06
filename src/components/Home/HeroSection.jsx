import avatar from "../../assets/avatar.svg";
import frame from "../../assets/Frame.svg";

export default function HeroSection() {
  return (
    <section className="mb-[190px] px-8 sm:px-14 xl:px-[100px] mt-20 xl:mt-[150px] max-w-[1200px]">
      <img
        className="w-32 md:w-[146px] mb-8"
        src={avatar}
        alt="Unique Ideas avatar"
      />
      <h1>
        <span className="flex gap-3 md:gap-[18px] items-center mb-2">
          <span className="font-[450] text-4xl md:text-6xl tracking-[-0.03em]">
            HI, I’M IFY
          </span>
          <img className="w-9 md:w-[60px]" src={frame} alt="" />
        </span>
        <span className="text-4xl md:text-6xl tracking-[-0.03em]">
          PRODUCT DESIGNER
        </span>
      </h1>
      <p className="pText mt-8 md:text-xl lg:text-2xl">
        I’m a designer whose focus is to not only make interfaces that work
        well, but also ones that are enjoyable to use. I have a strong
        enthusiasm for my work and constantly strive to improve my abilities in
        order to become an expert in my field.{" "}
      </p>
    </section>
  );
}
