import { configureStore } from "@reduxjs/toolkit";
import quoteReducer from "../slice/quoteSlice.js";
const appStore = configureStore({
  reducer: {
    quote: quoteReducer,
  },
});
export { appStore };
