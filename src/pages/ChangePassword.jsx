
import loginLogo from "../assets/loginLogo.svg";
import changepassword from "../assets/changepassword.svg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
const ChangePassword = () => {
  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div className="grid lg:grid-cols-[50%_50%] container bg-[#FAF7ED] font-poppin  ">
        <img
          src={changepassword}
          alt="changepassword"
          className=" items-center"
        />

        <div className="grid items-center  justify-center ml-20 bg-white">
          <img src={loginLogo} alt="loginLogo" className="ml-28 " />
          <div className="w-full max-w-md p-4 bg-white shadow-md">
            <h2 className="text-2xl font-bold font-rubik text-center mb-8">
              Change Password
            </h2>
            <form>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="New Password"
                >
                  New Password
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 bg-[#FAF7ED] mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password"
                  placeholder="******************"
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="Confirm password"
                >
                  Confirm password
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
}

export default ChangePassword