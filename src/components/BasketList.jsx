import React from "react";
import {
  incremnetProducts,
  decrementProducts,
  total,
  removeItem,
} from "../redux/features/bascetSlice";
import { useDispatch } from "react-redux";

function BasketList({ item }) {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between items-center">
      <div className="w-1/4 card bg-base-100 shadow-xl mt-[20px]">
        <img className="rounded-md h-[100px]" src={item.thumbnail} alt="" />
      </div>
      <div className="text-center">
        <div className="">
          <h3 className="font-bold text-lg">{item.title}</h3>
        </div>
        <div>
          <p className="font-medium text-base">$ {item.price}</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => dispatch(incremnetProducts(item.id))}
          className="btn btn-outline btn-success border p-4 "
        >
          +
        </button>
        <p className="font-bold text-base pt-[10px] w-3">{item.amount}</p>
        <button
          onClick={() => {
            if (item.amount === 1) {
              dispatch(removeItem(item.id));
            } else {
              dispatch(decrementProducts(item.id));
            }
          }}
          className="btn  btn-outline btn-error border p-4   "
        >
          -
        </button>
      </div>
    </div>
  );
}

export default BasketList;
