import { RiMenu5Line } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";


const Navbar = () => {
  return (
    <nav className="flex lg:flex justify-between items-center bg-[#FAF7ED] container font-poppin ">
     <div>
        <img src={logo} alt="logo" />

      </div> 
      <ul className=" gap-12 hidden lg:flex">
        <li className="">
          <NavLink to="/home">HOME </NavLink>
        </li>

        <li className="">
          <NavLink to="/features"> FEATURES </NavLink>
        </li>

        <li className="">
          <NavLink to="/pricing">PRICING </NavLink>
        </li>

        <li className="">
          <NavLink to="/about us">ABOUT US</NavLink>
        </li>

        <li className="">
          <NavLink to="/contact us">CONTACT US</NavLink>
        </li>
      </ul>
      <RiMenu5Line className="lg:hidden" />
      <Link
        to="/login"
        className="bg-[#F3B855] text-center  rounded-[10px] text-black px-2 py-2 gap-[40px] "
        style={{ width: "143px", height: "40px" }}
      >
        Login
      </Link>
    </nav>
  );
};
export default Navbar;