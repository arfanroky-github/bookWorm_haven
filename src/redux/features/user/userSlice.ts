import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "./userInterface";

const initialState: User = {
  email: "",
  password: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<User>) => {
      const { email, password } = action.payload;
      if (email) {
        state.email = email;
      }
      if (password) {
        state.password = password;
      }
    },
  },
});

export const { setUserData } = userSlice.actions;
export const userReducer = userSlice.reducer;
