import { createSlice } from "@reduxjs/toolkit";
import products from "../../data";
const initialState = {
  products,
  amount: 0,
  price: 0,
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    incremnetProducts: (state, { payload }) => {
      const item = state.products.find((item) => item.id === payload);
      item.amount += 1;
    },
    decrementProducts: (state, { payload }) => {
      const item = state.products.find((item) => item.id === payload);
      item.amount -= 1;
    },
    removeItem: (state, { payload }) => {
      state.products = state.products.filter((item) => item.id !== payload);
    },

    total: (state, { payload }) => {
      let allPrice = 0;
      let allAmount = 0;
      state.products.forEach((item) => {
        allPrice += item.amount * item.price;
        allAmount += item.amount;
      });
      state.amount = allAmount;
      state.price = allPrice;
    },
  },
});

export const { incremnetProducts, decrementProducts, total, removeItem } =
  basketSlice.actions;
export default basketSlice.reducer;
