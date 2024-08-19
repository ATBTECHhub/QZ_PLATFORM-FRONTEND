import loginLogo from "../assets/loginLogo.svg";
import padlock from "../assets/padlock.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const EmailReset = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="grid lg:grid-cols-[50%_50%] container bg-[#FAF7ED] font-poppin  ">
        <img
          src={padlock}
          alt="padlock"
          className=" items-center"
        />

        <div className="grid items-center  justify-center ml-20 bg-white">
          <img src={loginLogo} alt="loginLogo" className="ml-28 max-w[50%] " />
          <div className="w-full max-w-md p-4 bg-white shadow-md">
            <h2 className="text-2xl font-bold font-Montserrat text-center mb-8">
              Forgot Password
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="your@email.com"
                />
              </div>
              <div className="flex items-center  justify-center conta">
                <button
                  className="bg-[#F3B855] hover:bg-[#d7a349] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Reset Password
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

export default EmailReset;
