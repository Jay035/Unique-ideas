import { Link } from "react-router-dom";

export default function MyWork() {
  return (
    <section className="mb-[160px]" id="myWorks">
      <h2 className="tracking-[-0.03em] px-8 sm:px-14 xl:px-20 text-3xl md:text-5xl">
        MY WORK
      </h2>
      <div className="bg-[#D9D9D9] mb-12 w-full h-[400px] md:h-[800px] mt-11"></div>
      <Link
        to=""
        className="w-full max-w-[180px] text-center tracking-[-0.03em] rounded-[30px] md:text-xl flex justify-center items-center mx-auto border py-3 px-4"
      >
        SEE ALL WORKS
      </Link>
    </section>
  );
}
