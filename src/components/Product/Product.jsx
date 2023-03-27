import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = (props) => {
  const { img, name, price, seller, ratings } = props.product;
  const handleAddToCart = props.handleAddToCart;

  return (
    <div className="w-[200px] lg:w-[300px] h-[508px] border border-[#95A0A7] rounded-lg relative">
      <div className="w-[186px] h-[186px] lg:w-[286px] lg:h-[286px]">
        <img className="rounded-lg m-[7px]" src={img} alt={name} />
      </div>
      <div className="ml-[14px] mt-[5px]">
        <h3 title={name} className="text-xl text-[#0E161A]">
          {name.length <= 25 ? name : name.slice(0, 22) + "..."}
        </h3>

        <h3 className="text-[17px] text-[#0E161A] mt-3">Price: ${price}</h3>
        <h4 className="text-xs text-[#2A414F] mt-8">Manufacturer: {seller}</h4>
        <h4 className="text-xs text-[#2A414F] mt-3">Ratings: {ratings} star</h4>
      </div>
      <button
        onClick={() => handleAddToCart(props.product)}
        className="bg-[#FFE0B3] hover:bg-orange-400 p-3 text-[15px] border border-[#95A0A7] w-full rounded-t-none rounded-b-lg absolute bottom-0"
      >
        Add To Cart <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Product;
