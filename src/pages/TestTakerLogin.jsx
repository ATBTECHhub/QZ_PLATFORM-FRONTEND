import loginLogo from "../assets/loginLogo.svg";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const TestTakerLogin = () => {
  return (
    <sectio className="container">
      <Navbar />

      <div className="grid items-center justify-center ml-20 bg-white font-rubik">
        <img src={loginLogo} alt="loginLogo" className="ml-10 max-w-[75%] " />
        <div className="w-full max-w-md p-4 bg-white shadow-md">
          <h1 className="text-2xl font-bold font-rubik text-center mb-16">
            Login To Take Test
          </h1>
          <h2 className="text-2xl text- font-medium font-rubik text-center mb-16 text-[#F3B855] ">
            Use your access code to take your test
          </h2>

          <form className="">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Access Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter Code"
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

            <div className="flex items-center  justify-center container">
              <button
                className="bg-[#F3B855] hover:bg-[#d7a349] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </sectio>
  );
};

export default TestTakerLogin;
