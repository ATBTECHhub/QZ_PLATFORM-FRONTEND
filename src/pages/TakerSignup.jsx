
import loginLogo from "../assets/loginLogo.svg";
import signupTakerImg from "../assets/signupTakerImg.svg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const takerSignup = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="grid lg:grid-cols-[50%_50%] container  font-poppin  ">
        <img
          src={signupTakerImg}
          alt="signupTakerImg"
          className=" items-center"
        />

        <div className="grid items-center justify-center ml-20 bg-white">
          <img src={loginLogo} alt="loginLogo" className="ml-28 max-w-[54%] " />
          <div className="w-full max-w-md p-4 bg-white shadow-md">
            <h2 className="text-2xl font-bold font-rubik text-center mb-8">
              Register to take assessment
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Registration/Access Code
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Code"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Your First Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter Your Last Name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>

              <div className="flex items-center  justify-center conta">
                <button
                  className="bg-[#F3B855] hover:bg-[#d7a349] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </section>
  );
};

export default takerSignup;
