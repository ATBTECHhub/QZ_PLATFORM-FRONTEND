import { Link } from "react-router-dom";
import resetPassword from "../assets/resetPassword.svg"
const ResetPassword = () => {
  return (
    <section className="grid justify-center items-center container bg-[#FAF7ED] ">
      <Link
        to="/login"
        className=" bg-[#008000] text-center py-2 px-12 mt-[192px] rounded-xl "
      >
        Done
      </Link>
      <div className="mt-10">
        <img src={resetPassword} alt="resetPassword" />
      </div>
      <div className="mt-16">
        Email and Password sent, password reset successful.
      </div>
      <Link
        to="/login"
        className="bg-[#F3B855] text-center rounded-[10px] text-black px-2 py-2 mt-14 mb-96 "
        
      >
        Login
      </Link>
    </section>
  );
}

export default ResetPassword