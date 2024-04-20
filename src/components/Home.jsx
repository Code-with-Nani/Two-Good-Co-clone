import React, { useRef } from "react";
import img from "../assets/images/Soaps_20(1).jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


gsap.registerPlugin(useGSAP);
const Home = () => {
  const box = useRef();
  useGSAP(
    () => {
      gsap.from("h1", {
        y: 40,
        opacity: 0,
        delay: 0.5,
        duration: 0.3,
        stagger: 0.1,
      });
    },
    { scope: box }
  );
  return (
    <div ref={box} className="w-screen min-h-screen relative lg:px-7 px-3 ">
      <h1 className="heading text-[16vw] leading-[14vw] tracking-tighter font-[600] pt-[45%] sm:pt-[30%] md:pt-[17%] whitespace-nowrap overflow-hidden">
        CHANGE
      </h1>
      <h1 className="heading text-[16vw] leading-[14vw] tracking-tighter font-[600]  whitespace-nowrap overflow-hidden">
        THE COURSE
      </h1>
      <div className="img py-4 flex justify-center items-center">
        <img src={img} alt="" />
      </div>
      <div className="oneliner text-center pt-32 pb-20">
        <p className="heading text-5xl">BUY SOAP, GIVE HOPE.</p>
        <p className="text-sm mt-10 w-fit mx-auto relative">
          EXPLORE OUR WHOLESALE SOAPS THAT INSPIRE WHOLE COMMUNITIES.
          <div className="line w-full h-[1px] bg-black absolute"></div>
        </p>
      </div>
    </div>
  );
};

export default Home;
