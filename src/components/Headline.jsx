import girl from "../assets/girl.svg"
import { headlineData } from "../constant/data";

const Headline = () => {
  return (
    <section className=" bg-[#FAF7ED]">
      <div className=" container">
        <h1 className="text-center text-[40px] font-extrabold ">
          Why choose us ?
        </h1>
        <div className="grid lg:grid-cols-[40%_60%] font-rubik items-end gap-16 lg:gap-0 ">
          <img src={girl} alt="girl" />
          <div>
            <h2 className=" sm:text-[40px] text-xl text-[#F3B855] font-extrabold ">
              Teachers/Instructor/Test Creator
            </h2>
            <div className="grid  lg:grid-cols-2 gap-[60px] ">
              {headlineData.map((items, i) => (
                <div className="bg-[#FFFFFF]  h-[396px] w-[368px] gap-[24px]">
                  <div
                    dangerouslySetInnerHTML={{ __html: items.icon }}
                    className="bg-[#E6E6E9] flex justify-center  "
                  />
                  <p className="font-rubik  container flex justify-center font-bold ">
                    {items.text}
                  </p>
                  <p className="font-poppin font-[16px] container  flex justify-center  ">
                    {items.text1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Headline