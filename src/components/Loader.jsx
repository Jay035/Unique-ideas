import logo from "../assets/logo.svg";

export default function Loader() {
  return (
    <div
      id="loader"
      className="animate-pulse z-[99999999999999] flex justify-center items-center min-h-screen bg-[#474444]"
    >
      <img className="" src={logo} alt="logo" />
    </div>
  );
}
