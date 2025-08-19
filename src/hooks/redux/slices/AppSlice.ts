import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SupportedLanguage } from "../../../types/language/language_types";

interface AppState {
  language: SupportedLanguage;
}

const initialState: AppState = {
  language: "en",
};

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<SupportedLanguage>) => {
      state.language = action.payload;
    },
  },
});

export default AppSlice;
export const { setLanguage } = AppSlice.actions;
