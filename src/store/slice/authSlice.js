import { createSlice } from "@reduxjs/toolkit";

const token =
  localStorage.getItem("token") !== null ? localStorage.getItem("token") : null;
console.log(token);
const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: token },
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
      localStorage.setItem("token", state.token);
    },
    logOut: (state, action) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
