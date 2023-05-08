import arrowUpRight from "../assets/arrow-up-left.svg";
import behance from "../assets/behance.svg";
import LinkedIn from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-[#1D2939] pt-20 pb-14 md:pb-[100px] md:pt-[84px] px-8 sm:px-14 xl:px-[100px]">
      <h4 className="text-[#9E77ED] tracking-[-0.03em] text-lg md:text-2xl lg:text-[30px] xl:leading-[40px]">
        READY TO WORK TOGETHER?
      </h4>
      <h1 className="mt-4 mb-6 text-white text-[40px] leading-[1] md:text-5xl xl:text-[120px] tracking-[-0.03em]">
        Get in touch
      </h1>
      <section className="flex md:items-center justify-between">
        <a
          href="mailto:Uniqueideas85@gmail.com"
          className="bg-[#9CFF8F] rounded-[30px] w-fit flex items-center gap-[10px] py-2 md:py-3 px-4"
        >
          Send me an email <img src={arrowUpRight} alt="arrow right" />
        </a>
        <div className="flex gap-4 items-center">
          <img src={behance} alt="behance logo" />
          <img src={LinkedIn} alt="linkedin logo" />
          <img src={twitter} alt="twitter logo" />
        </div>
      </section>
    </footer>
  );
}
