import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  userType: "parent" | "child" | "guest" | null;
}

const initialState: UserState = {
  userType: null,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserType: (state, action) => {
      state.userType = action.payload;
    },
  },
});

export default UserSlice;
export const { setUserType } = UserSlice.actions;
