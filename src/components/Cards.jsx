import React from "react";
import img1 from "../assets/images/bag.jpg";
import img2 from "../assets/images/clothe.jpg";
import img3 from "../assets/images/Two Good Co - Premium Range.jpg";

const Cards = () => {
  return (
    <div className="w-screen min-h-screen lg:px-7 lg:pr-12 px-3 py-4">
      <div className="text flex justify-between items-center border-b-[1px] border-b-black border-opacity-70 text-sm">
        {["BUY GOOD", "DO GOOD"].map((item) => (
          <h2>{item}</h2>
        ))}
      </div>
      <div className="cards lg:h-[100vh] w-full relative flex flex-col lg:flex-row items-center justify-between mt-3 gap-5 lg:gap-0">
        {[img1, img2, img3].map((item, index) => (
          <div
            key={index}
            className="card w-full h-[50vh] lg:h-full lg:w-[32.4%] overflow-hidden relative flex justify-center items-center"
          >
            <img
              data-scroll
              data-scroll-section
              data-scroll-speed="-0.1"
              className="w-full h-full object-cover object-center overflow-hidden"
              src={item}
              alt=""
            />
            <div
              data-scroll
              data-scroll-section
              data-scroll-speed="-0.2"
              className={`btn absolute h-12  w-[75%] flex justify-between items-center px-10 rounded-full ${
                index === 0 && "bg-[#f5dfcf]"
              } ${index === 1 && "bg-[#edf3ff]"} ${index === 2 && "bg-[#fff]"}`}
            >
              <div className="w-2 h-2 bg-black rounded-full"></div>
              <h2 className="">SHOP</h2>
              <h2 className="text-[800]">HOME</h2>
              <div className="">›</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
