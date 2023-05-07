import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import HeroSection from "../components/Home/HeroSection";
import MyWork from "../components/Home/MyWork";
import AboutMe from "../components/Home/AboutMe";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef(null);
  const tl = gsap.timeline();
  useLayoutEffect(() => {
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
    <>
    <main className="text-white bg-[#111111]">
      <HeroSection />
      <MyWork />
      <AboutMe />
    </main>
    <Footer />
    </>
  );
}
