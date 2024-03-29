export default function Hamburger({
  setCheckboxState,
  setMenuOpen,
  checkboxState,
  menuOpen,
}) {
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
        } bg-white w-[30px] h-[2px] mb-2 block rounded-md transition-all origin-[4px_0px]`}
      ></span>
      <span
        className={`${
          menuOpen ? ` rotate-[495deg] translate-x-1 translate-y-1` : ``
        }  bg-white w-[30px] h-[2px] mb-2 block rounded-md transition-all`}
      ></span>
      <span
        className={`${
          menuOpen ? ` rotate-45 opacity-0` : ``
        }  bg-white w-[30px] h-[2px] block rounded-md transition-all origin-bottom-right`}
      ></span>
    </section>
  );
}
