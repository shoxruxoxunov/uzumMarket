import React from "react";
import Navbar from "./components/Navbar";
import Basket from "./components/Basket";
import { total } from "./redux/features/bascetSlice";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const { products } = useSelector((store) => store.basket);
  useEffect(() => {
    dispatch(total());
  }, [products]);
  return (
    <>
      <Navbar />
      <Basket />
    </>
  );
}

export default App;
