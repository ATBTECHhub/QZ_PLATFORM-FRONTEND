import { testimonialData } from "../constant/data";

const Testimonials = () => {
  return (
    <section className=" bg-[#FAF7ED] font-rubik container ">
      <div className=" text-[40px]  container">
        <h1>Testimonials</h1>
      </div>
      <div className="grid  lg:grid-cols-3 gap-[20px]">
        {testimonialData.map((items, i) => (
          <div className=" container  h-[400px] ">
            <img src={items.img} alt={items.name} />
            <p className=" font-extrabold text-center pt-[49px] pb-[36px] ">
              {" "}
              {items.name}{" "}
            </p>
            <p className=" font-bold text-center ">{items.testimony}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials