import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const initialState = {
  daily: null,
  monthly:null,
  yearly:null,
  custom:null,
};

export const financeSlice = createSlice({
  name: "financeSlice",
  initialState,
  reducers: {
    addDaily: (state, { payload }) => {
      (state.daily = payload)
        // Cookies.set("users", JSON.stringify(state.users));
    },
    addMonthly: (state, { payload }) => {
        (state.monthly = payload)
      },
      addYearly: (state, { payload }) => {
        (state.yearly = payload)
      },
      addCustom: (state, { payload }) => {
        (state.custom = payload)
      },
  },
});

export const { addDaily,addMonthly,addYearly,addCustom } = financeSlice.actions;
export default financeSlice.reducer;
