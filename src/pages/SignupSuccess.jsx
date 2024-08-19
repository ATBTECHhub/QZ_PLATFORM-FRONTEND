import { Link } from "react-router-dom";
import successIcon from "../assets/sucessIcon.svg"

const SignupSuccess = () => {
  return (
    <div className="  font-inter  bg-[#FAF7ED] container h-[650px] ">
      <div className=" ml-[650px] mt-[88px]">
        <img src={successIcon} alt="successIcon" className="    " />
      </div>

      <h1 className="text-[#008000] text-2xl font-bold text-center mt-[48px] mb-[96px] ">
        SUCCESSFUL
      </h1>
      <p className=" text-xl text-center font-light">
        Congratulations,
        <br />
        your account have been created.
        <br />
        Login now to get started.
      </p>
      <div className=" grid justify-center items-center mt-[96px] mb-[156px]">
        <Link
          to="/login"
          className="bg-[#F3B855] text-center justify-center items-center rounded-[10px] text-black px-14 py-2  "
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default SignupSuccess