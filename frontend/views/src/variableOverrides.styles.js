// @flow strict
/* eslint-disable import/export */
import color from "color";
import {
    btnDefaultGradientStart,
    btnDefaultGradientEnd
} from "atg-ui/css/overridableVariables.styles";

export * from "atg-ui/css/overridableVariables.styles";
export * from "atg-ui-input/css/overridableVariables.styles";
export * from "atg-brand/variables.styles";

export const btnHeight = "40px";
export const btnDefaultGradientHoverStart = color(btnDefaultGradientStart)
    .lighten(-0.05)
    .hex();
export const btnDefaultGradientHoverEnd = color(btnDefaultGradientEnd)
    .lighten(-0.05)
    .hex();
export const btnSuccessBorderColor = "#167a01";
export const btnSuccessGradientStart = "#5dc633";
export const btnSuccessGradientEnd = "#4da52a";
export const btnBuyGradientStart = "#22ac07";
export const btnBuyGradientEnd = "#218f0b";
export const btnBuyHoverGradientStart = "#1d9206";
export const btnBuyHoverGradientEnd = "#1c7a09";
export const receiptBg = "#fff6cf";
export const receiptTextColor = "#324c69";
export const receiptBorderColor = "#d7d1ba";
export const receiptResultBg = "#fffdeb";
export const receiptCorrectColor = "#4ebb35";
export const receiptPlacementCorrectColor = "#808080";
export const takeoverSidePadding = "20px";
export const takeoverHeaderHeight = "70px";
export const takeoverBannerHeight = "95px";

/* Receipt color codes */
