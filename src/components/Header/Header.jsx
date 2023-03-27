import React from "react";
import img from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header bg-[#1C2B35] flex h-20 px-5 lg:px-[100px] py-0 items-center gap-4 justify-between">
      <img className="w-24 lg:w-32" src={img} alt="" />
      <div className="flex gap-3 lg:gap-7 text-white">
        <a className="hover:text-orange-400" href="">
          Shop
        </a>
        <a className="hover:text-orange-400" href="">
          Order Review
        </a>
        <a className="hover:text-orange-400" href="">
          Manage Inventory
        </a>
        <a className="hover:text-orange-400" href="">
          Login
        </a>
      </div>
    </nav>
  );
};

export default Header;
