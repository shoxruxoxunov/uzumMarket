import { configureStore } from "@reduxjs/toolkit";
import React from "react";
import basketReducer from "../features/bascetSlice";

export const store = configureStore({
  reducer: {
    basket:basketReducer,
  },
});
