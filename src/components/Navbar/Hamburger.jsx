export default function Hamburger({
  setCheckboxState,
  setMenuOpen,
  checkboxState,
}) {
  return (
    <section className="lg:hidden z-[99999]">
      <input
        className="flex w-[60px] h-[60px] absolute cursor-pointer opacity-0 z-10"
        type="checkbox"
        checked={checkboxState ? `checked` : ``}
        onChange={() => {
          setMenuOpen((prevState) => !prevState);
          setCheckboxState((prevState) => !prevState);
        }}
      />
      <span
        className={`${
          checkboxState ? ` rotate-45 translate-x-2 translate-y-2` : ``
        } bg-white w-[30px] h-[2px] mb-2 block rounded-md transition-all origin-[4px_0px]`}
      ></span>
      <span
        className={`${
          checkboxState ? ` rotate-[495deg] translate-x-1 translate-y-1` : ``
        }  bg-white w-[30px] h-[2px] mb-2 block rounded-md transition-all`}
      ></span>
      <span
        className={`${
          checkboxState ? ` rotate-45 opacity-0` : ``
        }  bg-white w-[30px] h-[2px] mb-2 block rounded-md transition-all origin-bottom-right`}
      ></span>
    </section>
  );
}
