import { createSelector, createSlice } from '@reduxjs/toolkit';
import { ThemeName } from '../models/ThemeEntity';
import { RootState } from '../store';

interface ThemeState {
  name: ThemeName;
}

const initialState: ThemeState = {
  name: ThemeName.Dark,
};

/** Selectors */
const selectTodosState = (state: RootState): ThemeState => state.theme;
export const selectCurrentTheme = createSelector(selectTodosState, (theme) => theme.name);

/** Slice */
export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    switchTheme: (state) => {
      switch (state.name) {
        case ThemeName.Light:
          state.name = ThemeName.Dark;
          break;
        case ThemeName.Dark:
          state.name = ThemeName.Light;
          break;
        default:
          state.name = ThemeName.Light;
          break;
      }
    },
  },
});

/** Actions */
export const { switchTheme } = themeSlice.actions;
