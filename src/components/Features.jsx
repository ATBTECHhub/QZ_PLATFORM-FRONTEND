import { Link } from "react-router-dom";


const Features = () => {
  return (
    <div className="content-center grid sm-grid justify-center bg-[#FFFFFF] container font-rubik h-[326px] ">
      <h1 className="font-extrabold text-center ">
        Ready to get started
      </h1>

      <p className="text-[#231F20]  font-[32px] container ">
        Join thousand of users who are ready to enhance their learning
        experience using our application
      </p>

      <Link
        to="/Signup"
        className="font-inter bg-[#F3B855] text-center gap-10 container rounded-[30px] text-black px-2 py-2"
        style={{ width: "224px", height: "35px" }}
      >
        Get Started
      </Link>
    </div>
  );
}

export default Features
