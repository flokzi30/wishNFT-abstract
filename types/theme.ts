export type ColorShade = 'lighter' | 'light' | 'main' | 'dark' | 'darker';

export type ColorVariant = 
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

export type GreyScale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

export interface ThemeColors {
  primary: Record<ColorShade, string>;
  secondary: Record<ColorShade, string>;
  info: Record<ColorShade, string>;
  success: Record<ColorShade, string>;
  warning: Record<ColorShade, string>;
  error: Record<ColorShade, string>;
  grey: Record<GreyScale, string>;
} 