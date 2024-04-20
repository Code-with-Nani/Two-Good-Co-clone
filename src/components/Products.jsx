import React, { useEffect, useState } from "react";
import img1 from "../assets/images/GreyRust.webp";
import img2 from "../assets/images/WhiteLilac.webp";
import img3 from "../assets/images/Two Hugs Candle Two Good Co.webp";
import img4 from "../assets/images/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { motion } from "framer-motion";

gsap.registerPlugin(gsap);

const Products = () => {
  const [hovering, setHovering] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setX(e.clientX);
      setY(e.clientY);
    });
  }, []);

  useGSAP(() => {
    gsap.to(".cursor", {
      x: x,
      y: y,
      scale: hovering ? 2 : 0,
    });
  }, [x, y]);

  return (
    <div
      onMouseEnter={() => {
        setHovering(true);
      }}
      onMouseLeave={() => {
        setHovering(false);
      }}
      className="w-screen min-h-screen py-20 relative overflow-hidden"
    >
      <div className="cursor h-[100px] w-[100px] rounded-full bg-pink-300/45 fixed inset-0 -translate-x-1/2 -translate-y-1/2 scale-0"></div>

      <div className="boxes grid grid-cols-2 w-fit mx-auto">
        <div className="">
          <img src={img1} alt="" className="" />
          <p className="text-center">
            Jac + Jack Buy 1, Give 1 Blanket - Grey/Rust
          </p>
          <h6 className="text-center">$380</h6>
        </div>
        <div className="">
          <img src={img2} alt="" className="" />
          <p className="text-center">
            Jac + Jack Buy 1, Give 1 Blanket - Grey/Rust
          </p>
          <h6 className="text-center">$380</h6>
        </div>
        <div className="">
          <img src={img3} alt="" className="" />
          <p className="text-center">
            Jac + Jack Buy 1, Give 1 Blanket - Grey/Rust
          </p>
          <h6 className="text-center">$380</h6>
        </div>
        <div className="">
          <img src={img4} alt="" className="" />
          <p className="text-center">
            Jac + Jack Buy 1, Give 1 Blanket - Grey/Rust
          </p>
          <h6 className="text-center">$380</h6>
        </div>
      </div>
    </div>
  );
};

export default Products;
