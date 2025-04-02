import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  themePreference: "system", // 'light', 'dark', or 'system'
  systemTheme: "light", // Tracks system theme when preference is 'system'
  currentTheme: "light", // The actual theme being applied
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setThemePreference: (state, action) => {
      state.themePreference = action.payload;
      // Update current theme based on preference
      if (action.payload === "system") {
        state.currentTheme = state.systemTheme;
      } else {
        state.currentTheme = action.payload;
      }
    },
    setSystemTheme: (state, action) => {
      state.systemTheme = action.payload;
      // Update current theme if following system
      if (state.themePreference === "system") {
        state.currentTheme = action.payload;
      }
    },
  },
});

export const { setThemePreference, setSystemTheme } = themeSlice.actions;

// Selectors
export const selectThemePreference = (state) => state.theme.themePreference;
export const selectCurrentTheme = (state) => state.theme.currentTheme;
export const selectSystemTheme = (state) => state.theme.systemTheme;

export default themeSlice.reducer;
