import { Link } from "react-router-dom";
import frame from "../../assets/officeHR.png";

export default function MyWork() {
  return (
    <section className="mb-[140px] pt-5" id="myWorks">
      <h2 className="tracking-[-0.03em] px-8 sm:px-14 xl:px-20 text-3xl md:text-5xl">
        MY WORK
      </h2>
      <div className="mb-12 w-full mt-11 relative">
        <img className="w-full xl:max-h-[90vh] object-cover object-center" src={frame} alt="" />
        <div className="absolute bottom-2 lg:bottom-[53px] pl-6 lg:pl-12 flex flex-col gap-2 lg:gap-4">
          <div className="flex items-center gap-2">
            <span className="bg-[rgba(255, 255, 255, 0.2)] border rounded-[30px] px-4 py-2 lg:py-3 md:text-xl 2xl:text-2xl tracking-[-0.03em]">
              HR
            </span>
            <span className="bg-[rgba(255, 255, 255, 0.2)] border rounded-[30px] px-4 py-2 lg:py-3 md:text-xl 2xl:text-2xl tracking-[-0.03em]">
              People Management
            </span>
          </div>
          <h1 className="text-[40px] md:text-5xl xl:text-[120px]">
            OfficeHR
          </h1>
        </div>
      </div>
      <Link
        to="/projects"
        className="w-full max-w-[180px] text-center tracking-[-0.03em] rounded-[30px] md:text-xl flex justify-center items-center mx-auto border py-3 px-4"
      >
        SEE ALL WORKS
      </Link>
    </section>
  );
}
