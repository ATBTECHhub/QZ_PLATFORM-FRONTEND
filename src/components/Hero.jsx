import { Link } from "react-router-dom";
import heroLogo from "../assets/heroLogo.svg";

const Hero = () => {
  return (
    <section className="grid  bg-heroBg  container place-content-around size-min h-[738px] ">
      <div
        className="place-content-center  font-rubik text-center container"
        style={{ width: "795px", height: "268px" }}
      >
        <h1 className="text-[#F3B855] text-[40px] font-extrabold ">
          Revolutionize your exams with ease
        </h1>
        <h2 className="text-[32px] font-bold text-[#FFFFFF] lg:max-w-lg container mt-[55px]  ">
          our platform simplifies exam creation,management and student
          assessment
        </h2>
      </div>
      <div className="grid lg:flex justify-between items-center gap-28 mr-[450px]">
        <img src={heroLogo} alt="heroLogo" />
        <Link
          to="/Signup"
          className=" font-inter bg-[#F3B855] text-center container rounded-[10px] text-black px-2 py-2 "
          style={{ width: "224px", height: "35px" }}
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

export default Hero