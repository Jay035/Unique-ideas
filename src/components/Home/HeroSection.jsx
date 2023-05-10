import { useLayoutEffect, useRef } from "react";
import avatar from "../../assets/avatar.svg";
import frame from "../../assets/Frame.svg";
import { Power3, Power4, gsap } from "gsap";

export default function HeroSection() {
  let hero = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from(".hero-item", {
      //   duration: 2,
      //   stagger: {
      //     amount: 0.4,
      //   },
      //   ease: Power3.easeIn,
      //   opacity: 0,
      // });
      // gsap.from(".hero-img", {
      //   x: -100,
      // });
      // gsap.from(".text", {
      //   y: -100,
      // });
      // gsap.from(".pText", {
      //   x: 100,
      // });
    }, hero);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={hero}
      className="mb-[190px] w-full px-8 sm:px-14 xl:px-[100px] mt-20 xl:mt-[150px]"
    >
      <img
        className="hero-item hero-img w-32 md:w-[146px] mb-8"
        src={avatar}
        alt="Unique Ideas avatar"
      />
      <h1 className="font-league-gothic">
        <span className="hero-item text flex gap-3 md:gap-[18px] items-center mb-2">
          <span className="text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em]">
            HI, I’M IFY!
          </span>
          <img className="w-10 md:w-[60px] lg:w-[72px]" src={frame} alt="" />
        </span>
        <span className="hero-item text text-5xl md:text-7xl lg:text-8xl tracking-[-0.03em]">
          I DESIGN DIGITAL PRODUCTS
        </span>
      </h1>
      <p className="max-w-[1200px] hero-item pText text mt-8 md:text-xl lg:text-2xl">
        I’m a designer whose focus is to not only make interfaces that work
        well, but also ones that are enjoyable to use. I have a strong
        enthusiasm for my work and constantly strive to improve my abilities in
        order to become an expert in my field.
      </p>
    </section>
  );
}
