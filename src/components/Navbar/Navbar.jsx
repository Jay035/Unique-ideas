import { Link, NavLink, useLocation } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import { Power3, gsap } from "gsap";
import { useRef, useState } from "react";
import { useLayoutEffect } from "react";
import logoWhite from "../../assets/logo.svg";
import logoBlack from "../../assets/logo-black.svg";
import arrowLeft from "../../assets/arrow-down-left.svg";
import Hamburger from "./Hamburger";

export function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [checkboxState, setCheckboxState] = useState(false);

  let hamburger = useRef(null);
  let nav = useRef(null);
  console.log(location);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.from(".logo", {
      //   delay: 1.2,
      //   opacity: 0,
      //   y: -20,
      //   stagger: {
      //     amount: 0.4,
      //   },
      //   ease: Power3.easeInOut,
      // });
      gsap.from(".nav_item", {
        delay: 1.2,
        opacity: 0,
        y: -80,
        stagger: {
          amount: 0.4,
        },
        ease: Power3,
      });
    }, nav);
    return () => ctx.revert();
  }, []);

  return (
    <nav
      ref={nav}
      className={`${
        pathname === "/"
          ? " bg-[#111111] text-white border-[#302F2F]"
          : "text-black border-[#EAECF0]"
      } relative flex justify-between border-b items-center tracking-tight w-full gap-x-12 pt-[0.94rem] pb-[0.82rem] px-[10vw]`}
    >
      <section>
        <Link to="/" className="logo">
          <img
            className={`z-[99999] nav_item ${
              menuOpen && `absolute top-6 lg:top-[52px] md:relative`
            }`}
            src={pathname === "/" ? logoWhite : logoBlack}
            alt="logo"
          />
        </Link>
      </section>

      <section
        className={`${
          menuOpen
            ? `left-0 px-8 pt-8 gap-6 opacity-100 z-[1000] ease-out lg:pt-0 transition-all duration-100 delay-75`
            : `-left-full opacity-0 lg:opacity-100 lg:left-0 transition-all duration-100 delay-75`
        } absolute top-0 bg-[#111111] lg:bg-transparent lg:relative h-screen lg:h-fit w-full lg:w-fit ease-in-out flex flex-col lg:flex-row lg:gap-12 lg:justify-between lg:items-center text-base md:text-lg`}
      >
        <ul className="list-none flex mt-[50%] lg:mt-0 flex-col items-center gap-9 lg:flex-row">
          <li onClick={() => setMenuOpen(false)}>
            <Link
              to="/projects"
              className="nav_item text-xl md:text-base hover:font-medium"
            >
              WORK
            </Link>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <HashLink
              to="/#about"
              className="nav_item text-xl md:text-base hover:font-medium"
            >
              ABOUT
            </HashLink>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <HashLink
              to="/#contact"
              className="nav_item text-xl md:text-base hover:font-medium"
            >
              CONTACT
            </HashLink>
          </li>
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1JofDXbneOPnXA_CZ3wPilAO6pHRz7-h6/view?usp=sharing "
            className={`list_item text-xl md:text-base hover:font-medium flex items-center gap-[10px] border ${pathname === "/" ? 'border-[#AFB1AD]' : 'border-[#202020]'} rounded-[30px] px-[0.57rem] py-[0.6rem] hover:border-[#9E77ED]`}
          >
            MY RESUME
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
            >
              <path
                d="M4.83059 3.99435L10.5368 9.70059M10.5368 9.70059H4.83059M10.5368 9.70059V3.99435"
                stroke={pathname === "/" ? `#AFB1AD` : "#202020"}
                strokeWidth="1.14125"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {/* <img src={arrowLeft} alt="arrow" /> */}
          </a>
        </ul>
      </section>

      <Hamburger
        checkboxState={checkboxState}
        setCheckboxState={setCheckboxState}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />
    </nav>
  );
}
