export enum ThemeName {
  Light,
  Dark,
}

export const isLightTheme = (theme: ThemeName) => theme === ThemeName.Light;

export const isDarkTheme = (theme: ThemeName) => theme === ThemeName.Dark;
