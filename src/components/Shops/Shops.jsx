import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shops.css";

const Shops = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const newAddedCart = [...cart, product];
    setCart(newAddedCart);
  };
  const totalPrice = cart.reduce((prev, current) => prev + current.price, 0);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="grid grid-cols-[4fr,1fr]">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-11 py-12 pl-5 lg:pl-[100px] pr-3 lg:pr-12">
        {products.map((product) => (
          <Product
            handleAddToCart={handleAddToCart}
            product={product}
            key={product.id}
          ></Product>
        ))}
      </div>
      <div className="bg-[#FFE0B3] px-4">
        <h5 className="text-[#1C2B35] text-[25px] text-center mt-7">
          Order Summary
        </h5>
        <p className="mt-10">Selected Items: {cart.length}</p>
        <p className="mt-6">Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Shops;
