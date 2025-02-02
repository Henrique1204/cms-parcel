import 'styled-components';

import { css } from 'styled-components';

import { ColorsValues, MixinsValues, BreakpointsValues, ResponsiveValues } from './theme-enum';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorsValues;
    mixins: MixinsValues;
    breakpoints: BreakpointsValues;
    responsive: ResponsiveValues;
  }
}
