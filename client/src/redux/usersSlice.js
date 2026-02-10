import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    user: null,
    token: localStorage.getItem("tokenForBookMyShow"),
  },
  reducers: {
    SetUser: (state, action) => {
      state.user = action.payload;
    },
   
  },
});

export let { SetUser } = usersSlice.actions;
export default usersSlice.reducer;