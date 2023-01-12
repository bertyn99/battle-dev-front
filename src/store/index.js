import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api";
import authReducer from "./slice/authSlice";
import quizzReducer from "./slice/quizzSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    quizz: quizzReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
