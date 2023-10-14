import { useLocation } from "react-router-dom";

export default function Hamburger({
  setCheckboxState,
  setMenuOpen,
  checkboxState,
  menuOpen,
}) {
  const {pathname} = useLocation()
  return (
    <section
      onClick={(e) => {
        e.preventDefault();
        setMenuOpen((prevState) => !prevState);
      }}
      className="lg:hidden z-[99999] relative cursor-pointer"
    >
      <span
        className={`${
          menuOpen ? ` rotate-45 translate-x-2 translate-y-2` : ``
        } ${pathname === "/" ? 'bg-white' : 'bg-black'} bg-white w-6 h-[2px] mb-1 block rounded-md transition-all origin-[4px_0px]`}
      ></span>
      <span
        className={`${
          menuOpen ? ` rotate-[495deg] translate-x-1 translate-y-1` : ``
        } ${pathname === "/" ? 'bg-white' : 'bg-black'}  bg-white w-6 h-[2px] mb-1 block rounded-md transition-all`}
      ></span>
      <span
        className={`${
          menuOpen ? ` rotate-45 opacity-0` : ``
        } ${pathname === "/" ? 'bg-white' : 'bg-black'}  bg-white w-6 h-[2px] block rounded-md transition-all origin-bottom-right`}
      ></span>
    </section>
  );
}
