"use client";

import { configureStore } from "@reduxjs/toolkit";
import temoignagesReducer from "./temoignageSlice";

export const store = configureStore({
  reducer: {
    temoignages: temoignagesReducer,
  },
});
