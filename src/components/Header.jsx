import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/cart.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { HiOutlineMenuAlt4 } from "react-icons/hi";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 100 ? setScroll(true) : setScroll(false);
    });
  }, []);

  useGSAP(() => {
    gsap.to("#svg ", {
      transform: scroll ? "translateY(-100%)" : "",
    });
    gsap.to(".links ", {
      transform: scroll ? "translateY(-100%)" : "",
      opacity: scroll ? 0 : 1,
    });
  }, [scroll]);

  return (
    <div
      onScroll={() => {
        setScroll(true);
      }}
      id="page1"
      className="w-screen lg:px-7 px-3  pt-5 fixed z-50 flex justify-between items-start  select-none"
    >
      <div className={`left h-[86px] flex flex-col  overflow-hidden ${scroll && "-translate-y-6 lg:-translate-y-0"}`}>
        <img id="svg" src={logo} alt="" className="" />
        <div id="svg" className="svg translate-y-1">
          <svg
            width="62"
            height="63"
            viewBox="0 0 62 63"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
            class="go1438215768"
          >
            <path
              d="M46.8316 0C42.9105 0 39.1501 1.59236 36.3775 4.42677C33.605 7.26119 32.0474 11.1055 32.0474 15.114C32.0474 19.1224 33.605 22.9667 36.3775 25.8011C39.1501 28.6355 42.9105 30.2279 46.8316 30.2279C50.7526 30.2279 54.513 28.6355 57.2856 25.8011C60.0582 22.9667 61.6158 19.1224 61.6158 15.114C61.6158 11.1055 60.0582 7.26119 57.2856 4.42677C54.513 1.59236 50.7526 0 46.8316 0Z"
              fill="black"
            ></path>
            <path
              d="M14.793 0C10.872 0 7.11154 1.59236 4.33897 4.42677C1.56639 7.26119 0.00878906 11.1055 0.00878906 15.114C0.00878906 19.1224 1.56639 22.9667 4.33897 25.8011C7.11154 28.6355 10.872 30.2279 14.793 30.2279C18.714 30.2279 22.4744 28.6355 25.247 25.8011C28.0196 22.9667 29.5772 19.1224 29.5772 15.114C29.5772 11.1055 28.0196 7.26119 25.247 4.42677C22.4744 1.59236 18.714 0 14.793 0Z"
              fill="black"
            ></path>
            <path
              d="M36.9805 32.7422L32.0366 37.7963L56.6819 62.9913L61.6258 57.9372L36.9805 32.7422Z"
              fill="black"
            ></path>
            <path
              d="M56.6836 32.7485L32.0383 57.9435L36.9822 62.9976L61.6275 37.8026L56.6836 32.7485Z"
              fill="black"
            ></path>
            <path
              d="M4.94386 32.7464L0 37.8005L24.6453 62.9955L29.5892 57.9414L4.94386 32.7464Z"
              fill="black"
            ></path>
            <path
              d="M24.647 32.7527L0.00170898 57.9477L4.94557 63.0018L29.5909 37.8068L24.647 32.7527Z"
              fill="black"
            ></path>
          </svg>
        </div>
      </div>
      <div className="right list-none flex justify-center gap-14 items-center  lg:pr-5">
        <div className="links lg:flex justify-center items-center gap-14 text-sm hidden">
          {["SHOP", "WHOLESALE", "CATERING", "DONATE"].map((e) => (
            <li>{e}</li>
          ))}
        </div>
        <div className="icons flex justify-center items-center gap-14 bg-bg px-3 py-[6px] lg:px-6 lg:py-1 rounded-full">
          <HiOutlineMenuAlt4 />
          <span>
            <img src={cart} alt="" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
