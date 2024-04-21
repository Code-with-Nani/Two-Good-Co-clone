import React, { useEffect, useState } from "react";
import img1 from "../assets/images/GreyRust.webp";
import img2 from "../assets/images/WhiteLilac.webp";
import img3 from "../assets/images/Two Hugs Candle Two Good Co.webp";
import img4 from "../assets/images/Good-Nights-Sleep-Pack-Expanded-Two-Good-Co.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

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
      opacity: hovering ? 45 : 0,
    });
  }, [x, y]);

  const arr = [
    {
      img: img1,
      para: "Jac + Jack Buy 1, Give 1 Blanket - Grey/Rust",
      text: "$380",
    },
    {
      img: img2,
      para: "Jac + Jack Buy 1, Give 1 Blanket - Grey/Rust",
      text: "$380",
    },
    {
      img: img3,
      para: "Jac + Jack Buy 1, Give 1 Blanket - Grey/Rust",
      text: "$380",
    },
    {
      img: img4,
      para: "Jac + Jack Buy 1, Give 1 Blanket - Grey/Rust",
      text: "$380",
    },
  ];

  return (
    <div
      onMouseLeave={() => {
        setHovering(false);
      }}
      className="w-screen min-h-screen py-20 relative overflow-hidden z-[10]"
    >
      <div className="cursor h-[100px] w-[100px] rounded-full bg-pink-500/60 fixed inset-0 -translate-x-1/2 -translate-y-1/2 opacity-0 scale-150 z-[2]"></div>

      <div className="boxes grid grid-cols-2 w-fit mx-auto">
        {arr.map((e, i) => (
          <div
            onMouseMove={() => {
              setHovering(true);
            }}
            onMouseOut={() => {
              setHovering(false);
            }}
            className=""
          >
            <img src={e.img} alt="" className="" />
            <p className="text-center">{e.para}</p>
            <h6 className="text-center">{e.text}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
