import loginLogo from "../assets/loginLogo.svg"
import loginImg from "../assets/loginImg.svg"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Login = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="grid lg:grid-cols-[50%_50%] container font-poppin ">
        <img src={loginImg} alt="loginImg" />

        <div className="grid items-center justify-center  bg-white">
          <img src={loginLogo} alt="loginLogo" />
          <div className="w-full max-w-md p-4 bg-white shadow-md">
            <h2 className="text-3xl font-bold font-rubik text-center mb-8">
              Login
            </h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  
                >
                  Email address
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  
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
              <div className="mb-10 grid ">
                <label className="block  text-sm font-bold mb-2">Role</label>
                <select
                  id="cars"
                  name="cars"
                  className="bg-[#FAF7ED] shadow appearance-none border rounded w-full py-2 px-3 "
                >
                  <option value="volvo">Select</option>
                  <option value="saab">Test-Taker</option>
                  <option value="fiat">Test-Creator</option>
                </select>
              </div>

              <div className="flex items-center justify-between">
                <button
                  className="bg-[#F3B855] hover:bg-[#d7a349] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Login
                </button>
                <a
                  className="inline-block align-baseline font-bold text-sm text-[#F3B855] hover:text-[#d7a349]"
                  href="#"
                >
                  Forgot Password?
                </a>
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
}

export default Login