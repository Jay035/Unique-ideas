import avatar from "../assets/testimonial-avatar-1.svg";

export default function Testimonials() {
  return (
    <section className="my-[5.9rem] p-6 md:px-10 lg:px-[9rem] flex items-center flex-col text-center gap-[1.62rem] lg:py-[5.5rem] bg-[#171717] rounded-[0.625rem] border border-[#302F2F]">
      <img src={avatar} alt="avatar" />
      <p>
        Ifeoma is a highly skilled and experienced product designer with a deep
        understanding of the design process and user research. She is also an
        excellent communicator and collaborator
      </p>
      <div className="">
        <p className="text-sm text-[#B386FF]">Anna Blasiak</p>
        <p className="text-xs text-[#F2F4F7]">Project Manager, Katch</p>
      </div>
      <div className="flex items-center gap-1">
        <span className="w-[0.3rem] h-[0.3rem] block rounded-full bg-[#F9FAFB]"></span>
        <span className="w-[0.3rem] h-[0.3rem] block rounded-full bg-[#98A2B3]"></span>
        <span className="w-[0.3rem] h-[0.3rem] block rounded-full bg-[#98A2B3]"></span>
      </div>
    </section>
  );
}
