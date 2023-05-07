import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import HeroSection from "../components/Home/HeroSection";
import MyWork from "../components/Home/MyWork";
import AboutMe from "../components/Home/AboutMe";
import Footer from "../components/Footer";
import Transition from "../components/Transition";
import { useEffect } from "react";
import { Power3 } from "gsap";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  // const tl = gsap.timeline();
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".container", {
        duration: 4,
        // skewX: 10,
        // x: -100,
        opacity: 0,
      });
      gsap.from(".hero-item", {
        stagger: {
          amount: 0.4,
        },
        ease: Power3.easeIn,
        opacity: 0,
      });
      gsap.from(".hero-img", {
        x: -100,
        duration: 4,
      });
      gsap.from(".text", {
        y: -100,
        duration: 2,
      });
      gsap.from(".pText", {
        x: 100,
        duration: 5,
      });
    }, container);
    return () => ctx.revert();

    // tl.from(".card_2", { yPercent: 100 })
    //   .from(".card_3", { xPercent: -100 })
    //   .from(".card_4", { yPercent: 100 });
    // ScrollTrigger.create({
    //   animation: tl,
    //   trigger: "#card_container",
    //   start: "top top",
    //   // end: "+=4000",
    //   scrub: true,
    //   pin: true,
    //   markers: true,
    //   anticipatePin: 1,
    // });
  }, []);
  return (
    <div ref={container}>
      <Transition />
      <main className="container text-white bg-[#111111]">
        <HeroSection />
        <MyWork />
        <AboutMe />
      </main>
      <Footer />
    </div>
  );
}
