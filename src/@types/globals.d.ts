import React from 'react';

import { css } from 'styled-components';

declare global {
  export type CSSText = string | ReturnType<typeof css>;

  export type DefaultProps = {
    testId?: string;
    className?: string;
  };

  export type Component<T = {}> = React.FC<React.PropsWithChildren<DefaultProps & T>>;

  export type MFEProps = {
    appName: string;
    onLogout: () => void;
  };

  namespace NodeJS {
    export interface ProcessEnv {
      [key: string]: string | undefined;
    }
  }

  interface Window {
    isNativeApp: boolean;
  }

  type MergeTypes<T extends any[]> = T extends [infer First, ...infer Rest]
    ? First & MergeTypes<Rest>
    : unknown;

  type UnionTypes<T extends any[]> = T[number];
}
