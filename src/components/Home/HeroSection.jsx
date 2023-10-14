import { useLayoutEffect, useRef } from "react";
import avatar from "../../assets/avatar.png";
// import cv from "";
import frame from "../../assets/Frame.svg";
import { Power3, Power4, gsap } from "gsap";

export default function HeroSection() {
  let hero = useRef(null);

  // useLayoutEffect(() => {
  // let ctx = gsap.context(() => {
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
  // }, hero);
  // return () => ctx.revert();
  // }, []);

  return (
    <section
      ref={hero}
      className="mb-[122px] w-full pt-20 xl:pt-[150px] grid gap-12 lg:grid-cols-[auto_11rem]"
    >
      <div className="">
        <img
          className="hero-item hero-img w-[4.25rem] rounded-full mb-[1.31rem]"
          src={avatar}
          alt="Ify avatar"
        />
        <h1 className="font-SuisseWorks-Regular hero-item text text-[2rem] leading-normal tracking-[-0.06rem]">
          Hi, <span className="text-[#9CFF8F]">I’m Ify</span>,
          <br />
          <span className="">a Product Designer</span>
        </h1>
        <p className="w-full hero-item pText text mt-4 text-lg leading-normal text-[#AFB1AD]">
          I’m a designer whose focus is to not only make interfaces that work
          well, but also ones that are enjoyable to use. I have a strong
          enthusiasm for my work and constantly strive to improve my abilities
          in order to become an expert in my field.
        </p>
      </div>
      {/* links */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
        <div className="text-sm">
          <p className="text-[#AFB1AD]">Download my Resume</p>
          <a
            href="https://drive.google.com/file/d/1Vuu5aGvXHy33NAdUeJf-D6nxvIzPb26N/view?usp=sharing"
            className="text-white"
            download={true}
          >
            Link
          </a>
        </div>
        <div className="text-sm">
          <p className="text-[#AFB1AD]">Send an email -{">"}</p>
          <a
            href="mailto:uniqueideas85@gmail.com"
            className="text-white underline"
          >
            Uniqueideas85@gmail.com
          </a>
        </div>
        <div className="text-sm">
          <p className="text-[#AFB1AD]">DM me on X -{">"}</p>
          <a href="https://x.com/uniquee_ideas" className="text-white">
            @<span className="text-[#AFB1AD]">uniquee_ideas</span>
          </a>
        </div>
        <div className="text-sm">
          <p className="text-[#AFB1AD]">Message on whatsapp -{">"}</p>
          <a
            href="https://x.com/uniquee_ideas"
            className="text-white underline"
          >
            @Message me
          </a>
        </div>
      </div>
    </section>
  );
}
