
import { NavLink } from "react-router-dom";
import footerLogo from "../assets/footerLogo.svg"

const Footer = () => {
  return (
    <section className=" bg-[#231F20] font-rubik grid lg:flex items-center gap-[80px] container  ">
      <div>
        <img src={footerLogo} alt="footerLogo" />
      </div>
      <div className="grid lg:flex gap-16">
        <div>
          <ul className="grid">
            <li className="text-[#F3B855] text-[32px] font-extrabold">
              Company
            </li>
            <li className=" text-white text-[32px] ">
              <NavLink to="/about us">About Us </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="grid ">
            <li className="text-[#F3B855] text-[32px] font-extrabold">
              Support
            </li>
            <li className=" text-white text-[32px] ">
              <NavLink to="/faqs">FAQs </NavLink>
            </li>
            <li className=" text-white text-[32px] ">
              <NavLink to="/contact us">Contact Us </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <ul className="grid">
            <li className="text-[#F3B855] text-[32px] font-extrabold">Legal</li>
            <li className=" text-white text-[32px] ">
              <NavLink to="/privacy policy">Privacy Policy </NavLink>
            </li>
            <li className=" text-white text-[32px] ">
              <NavLink to="/terms of service"> Terms of Services </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <ul className="flex">
            <li>
              <a
                href="https://x.com/Qzplatform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/plasticine/100/000000/twitter.png"
                  width="50"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/qzplatform/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/plasticine/100/000000/instagram-new.png"
                  width="50"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/qzplatform?trk=feed-detail_main-feed-card_feed-actor-name"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/plasticine/100/000000/linkedin.png"
                  width="50"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/profile.php?id=61563997675624"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://img.icons8.com/?size=100&id=13912&format=png&color=000000"
                  width="50"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer

