import React from "react";
import img1 from "../assets/images/bag.jpg";
import img2 from "../assets/images/clothe.jpg";
import img3 from "../assets/images/Two Good Co - Premium Range.jpg";

const Cards = () => {
  return (
    <div className="w-screen min-h-screen bg-red-600 lg:px-7 lg:pr-12 px-3 py-4">
      <div className="text flex justify-between items-center border-b-[1px] border-b-black border-opacity-70 text-sm">
        {["BUY GOOD", "DO GOOD"].map((item) => (
          <h2>{item}</h2>
        ))}
      </div>
      <div className="cards h-[100vh] w-full relative flex items-center justify-between mt-3">
        <div className="card h-full w-[32.4%] overflow-hidden">
          <img className="w-full h-full object-cover object-bottom" src={img1} alt="" />
        </div>
        <div className="card h-full w-[32.4%] overflow-hidden">
          <img className="w-full h-full object-cover object-bottom" src={img2} alt="" />
        </div>
        <div className="card h-full w-[32.4%] overflow-hidden">
          <img className="w-full h-full object-cover object-bottom" src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Cards;
