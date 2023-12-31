import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';
import { themeSlice } from './slices/ThemeSlice';
import { todoSlice } from './slices/TodoSlice';

export const store = configureStore({
  reducer: {
    [themeSlice.name]: themeSlice.reducer,
    [todoSlice.name]: todoSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
