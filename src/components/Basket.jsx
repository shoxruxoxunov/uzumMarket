import React from "react";
import { useSelector } from "react-redux";
import BasketList from "../components/BasketList";

function Basket() {
  const { products,price} = useSelector((store) => store.basket);
  console.log(products);
  return (
    <div className="mx-auto w-[700px] py-10">
      {products.map((item) => {
        return <BasketList key={item.id} item={item} />;
      })}
      <div className="flex justify-between items-center pt-5 ">
        <h2 className="font-bold">Total:</h2>
        <p className="font-bold">{price}$</p>
      </div>
    </div>
  );
}

export default Basket;
