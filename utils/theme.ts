import { ColorShade, ColorVariant, GreyScale } from '../types/theme';

export const getColor = (variant: ColorVariant, shade: ColorShade = 'main'): string => {
  return `var(--color-${variant}-${shade})`;
};

export const getGrey = (scale: GreyScale): string => {
  return `var(--color-grey-${scale})`;
};

// Tailwind ile kullanım için
export const tailwindTheme = {
  colors: {
    primary: {
      lighter: 'var(--color-primary-lighter)',
      light: 'var(--color-primary-light)',
      main: 'var(--color-primary-main)',
      dark: 'var(--color-primary-dark)',
      darker: 'var(--color-primary-darker)',
    },
    secondary: {
      lighter: 'var(--color-secondary-lighter)',
      light: 'var(--color-secondary-light)',
      main: 'var(--color-secondary-main)',
      dark: 'var(--color-secondary-dark)',
      darker: 'var(--color-secondary-darker)',
    },
    info: {
      lighter: 'var(--color-info-lighter)',
      light: 'var(--color-info-light)',
      main: 'var(--color-info-main)',
      dark: 'var(--color-info-dark)',
      darker: 'var(--color-info-darker)',
    },
    success: {
      lighter: 'var(--color-success-lighter)',
      light: 'var(--color-success-light)',
      main: 'var(--color-success-main)',
      dark: 'var(--color-success-dark)',
      darker: 'var(--color-success-darker)',
    },
    warning: {
      lighter: 'var(--color-warning-lighter)',
      light: 'var(--color-warning-light)',
      main: 'var(--color-warning-main)',
      dark: 'var(--color-warning-dark)',
      darker: 'var(--color-warning-darker)',
    },
    error: {
      lighter: 'var(--color-error-lighter)',
      light: 'var(--color-error-light)',
      main: 'var(--color-error-main)',
      dark: 'var(--color-error-dark)',
      darker: 'var(--color-error-darker)',
    },
    grey: {
      50: 'var(--color-grey-50)',
      100: 'var(--color-grey-100)',
      200: 'var(--color-grey-200)',
      300: 'var(--color-grey-300)',
      400: 'var(--color-grey-400)',
      500: 'var(--color-grey-500)',
      600: 'var(--color-grey-600)',
      700: 'var(--color-grey-700)',
      800: 'var(--color-grey-800)',
      900: 'var(--color-grey-900)',
    },
    // System colors
    border: 'var(--color-border)',
    input: 'var(--color-input)',
    ring: 'var(--color-ring)',
  },
}; 