import Theme from 'core/assets/theme';

export type ColorsValues = typeof Theme.colors;
export type ColorsEnum = keyof ColorsValues;

export type BreakpointsValues = typeof Theme.breakpoints;
export type BreakpointsEnum = keyof BreakpointsValues;

export type ResponsiveValues = typeof Theme.responsive;
export type ResponsiveEnum = keyof ResponsiveValues;

export type MixinsValues = typeof Theme.mixins;
export type MixinsValuesEnum = keyof MixinsValues;
