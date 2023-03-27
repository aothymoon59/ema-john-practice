import React from "react";
import img from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav className="header bg-[#1C2B35] flex h-20 px-[100px] py-0 items-center justify-between">
      <img src={img} alt="" />
      <div className="flex gap-7 text-white">
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
