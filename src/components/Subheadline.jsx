import subgirl from "../assets/subgirl.svg"
import { subheadlineData } from "../constant/data";
const Subheadline = () => {
  return (
    <section className=" bg-[#FFFFFF]">
      <div className=" container">
        <h1 className="text-center text-[40px] font-rubik text-[#F3B855] font-extrabold gap-[65px] ">
          Students/ Test Taker
        </h1>
        <div className="grid lg:grid-cols-[40%_60%] font-rubik items-end gap-16 lg:gap-0 ">
          <img src={subgirl} alt="subgirl" />
          <div className="grid  lg:grid-cols-2 gap-[60px] ">
            {subheadlineData.map((items, i) => (
              <div className="bg-[#FFFFFF] h-[396px] w-[368px] gap-[24px] ">
                <div
                  dangerouslySetInnerHTML={{ __html: items.icon }}
                  className="bg-[#E6E6E9] flex justify-center "
                />
                <p className="font-rubik container font-bold flex justify-center ">
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
    </section>
  );
}

export default Subheadline