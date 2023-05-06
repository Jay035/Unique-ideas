import { Link, NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Power3, gsap } from "gsap";
import { useRef, useState } from "react";
import { useLayoutEffect } from "react";
import logo from "../../assets/logo.svg";
import arrowLeft from "../../assets/arrow-down-left.svg";
import Hamburger from "./Hamburger";

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);

  let hamburger = useRef(null);
  let nav = useRef(null);

  // useLayoutEffect(() => {
  //   let ctx = gsap.context(() => {
  //     gsap.from(".list_item", {
  //       opacity: 0,
  //       duration: 2,
  //       y: 80,
  //       stagger: {
  //         amount: 0.4,
  //       },
  //       ease: Power3,
  //     });
  //   }, nav);
  //   return () => ctx.revert();
  // }, []);

  return (
    <nav
      ref={nav}
      className="flex justify-between text-white items-center tracking-tight w-full gap-x-12 py-6 lg:pt-[52px] px-8 sm:px-14 xl:px-20"
    >
      <section>
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </section>

      <section
        className={`${
          menuOpen
            ? `left-0 px-8 pt-8 gap-6 opacity-100 z-40 ease-out lg:pt-0 transition-all duration-100 delay-75`
            : `-left-full opacity-0 lg:opacity-100 lg:left-0 transition-all duration-100 delay-75`
        } absolute top-0 bg-[#111111] lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col lg:flex-row lg:gap-12 lg:justify-between lg:items-center text-base md:text-lg`}
      >
        <ul className="list-none flex mt-[50%] lg:mt-0 flex-col items-center gap-9 lg:flex-row">
          <NavLink to="" className="lg:text-2xl">WORK</NavLink>
          <NavLink to="" className="lg:text-2xl">ABOUT</NavLink>
          <NavLink to="" className="lg:text-2xl">CONTACT</NavLink>
          <button className="">
            <a
              href="\"
              className="flex items-center border rounded-[30px] px-4 py-3 hover:bg-[#9E77ED] hover:border-[#9E77ED]"
            >
              MY RESUME
              <img src={arrowLeft} alt="" />
            </a>
          </button>
        </ul>
      </section>

      {/* <button className="hidden lg:flex">
        <a
          href="\"
          className="flex items-center border rounded-[30px] px-4 py-3 hover:bg-[#9E77ED] hover:border-[#9E77ED]"
        >
          MY RESUME
          <img src={arrowLeft} alt="" />
        </a>
      </button> */}
      <Hamburger
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </nav>
  );
}
