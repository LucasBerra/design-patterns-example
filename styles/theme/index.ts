export interface CustomTheme {
  colors: {
    white: string;
    deepBlack: string;
    snow: string;
    darkSnow: string;
    sand: string;
    sandGrey: string;
    darkSand: string;
    lightGrey: string;
    grey: string;
    darkGrey: string;
    black: string;
    sky: string;
    lightSky: string;
    darkSky: string;
    garden: string;
    lightGarden: string;
    darkGarden: string;
    sun: string;
    lightSun: string;
    watermelon: string;
    lightWatermelon: string;
    darkWatermelon: string;
    duck: string;
  };
  fontSizes: unknown;
  fontWeight: unknown;
  lineHeights: unknown;
  breakpoints: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
  isEyebrowActive?: boolean;
}

export const theme: CustomTheme = {
  colors: {
    white: '#FFFFFF',
    deepBlack: '#000',
    snow: '#F8F8F7',
    darkSnow: ' #ECE5DD',
    sand: '#F4EFEA',
    sandGrey: '#ECE6DF',
    darkSand: '#E1D6CB',
    lightGrey: '#D7D7D7',
    grey: '#A1A1A1',
    darkGrey: '#818181',
    black: '#383838',
    sky: '#6FC2FF',
    lightSky: '#97D4FF',
    darkSky: '#2BA5FF',
    garden: '#16AA98',
    lightGarden: '#50C7B7',
    darkGarden: '#068475',
    sun: '#FFDE00',
    lightSun: '#F9EE3E',
    watermelon: '#FF7169',
    lightWatermelon: '#FF9A94',
    darkWatermelon: '#E23F35',
    duck: '#FF9538',
  },
  fontSizes: {},
  fontWeight: {},
  lineHeights: {},
  breakpoints: {
    xs: '556px',
    sm: '728px',
    md: '960px',
    lg: '1302px',
    xl: '1600px',
  },
};

export const XS_MIN_MEDIA_QUERY = `@media (min-width: ${theme.breakpoints.xs})`;
export const SM_MIN_MEDIA_QUERY = `@media (min-width: ${theme.breakpoints.sm})`;
export const MD_MIN_MEDIA_QUERY = `@media (min-width: ${theme.breakpoints.md})`;
export const LG_MIN_MEDIA_QUERY = `@media (min-width: ${theme.breakpoints.lg})`;
export const XL_MIN_MEDIA_QUERY = `@media (min-width: ${theme.breakpoints.xl})`;

export const XS_MAX_MEDIA_QUERY = `@media (max-width: calc(${theme.breakpoints.xs} - 1px))`;
export const SM_MAX_MEDIA_QUERY = `@media (max-width: calc(${theme.breakpoints.sm} - 1px))`;
export const MD_MAX_MEDIA_QUERY = `@media (max-width: calc(${theme.breakpoints.md} - 1px))`;
export const LG_MAX_MEDIA_QUERY = `@media (max-width: calc(${theme.breakpoints.lg} - 1px))`;
export const XL_MAX_MEDIA_QUERY = `@media (max-width: calc(${theme.breakpoints.xl} - 1px))`;

export type ColorsType = keyof typeof theme.colors;

export const BREAKPOINTS = {
  XS: 556,
  SM: 728,
  MD: 960,
  LG: 1302,
  XL: 1600,
};

export default theme;
