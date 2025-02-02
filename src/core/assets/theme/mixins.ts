import { css } from 'styled-components';

import * as Types from '@Types/styled-components/mixins';

export const mixins = {
  scrollbar: (props?: Types.ScrollbarProps) => css`
    &::-webkit-scrollbar {
      width: 7px;
    }

    &::-webkit-scrollbar-button {
      width: 0px;
      height: 0px;
    }

    &::-webkit-scrollbar-thumb {
      background: ${props?.thumb || '#e1e1e1'}!important;
      border: 0px none transparent;
      border-radius: 8px;
    }

    &::-webkit-scrollbar-thumb:hover {
      background: ${props?.thumbHover || '#d1d1d1'}!important;
    }

    &::-webkit-scrollbar-thumb:active {
      background: ${props?.thumbHover || '#d1d1d1'}!important;
    }

    &::-webkit-scrollbar-track {
      border: 0px none transparent;
      border-radius: 0px;
    }
    &::-webkit-scrollbar-track:hover {
      background: transparent;
    }

    &::-webkit-scrollbar-track:active {
      background: transparent;
    }

    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  `,
  noScrollBar: () => css`
    ::-webkit-scrollbar {
      display: none;
    }
  `,
  circle: (size: string) => css`
    width: ${size};
    height: ${size};

    min-width: ${size};
    max-width: ${size};

    min-height: ${size};
    max-height: ${size};

    border-radius: 100%;
  `,
  backgroundImage: ({
    url,
    repeat = 'no-repeat',
    position = 'center',
    size = 'cover',
  }: Types.BackgroundImageProps) => {
    const urlFormatted =
      typeof url === 'string' ? `url('${url}')` : url.map((url) => `url('${url}')`).join(', ');

    return css`
      background: ${`${urlFormatted} ${repeat} ${position}`};
      background-size: ${size};
    `;
  },
  hover: ({
    transitionProperty = 'all',
    transitionDuration = '0.3s',
    isActive = true,
    selector = '&',
    backgroundColor,
    borderColor,
    color,
    opacity,
    customStyles,
    fill,
  }: Types.HoverEffectProps) => {
    if (!isActive) return '';

    return css`
      ${selector} {
        transition: ${transitionProperty} ${transitionDuration} ease;
        cursor: pointer;
      }

      ${selector}:hover, ${selector}:active {
        ${backgroundColor ? `background-color: ${backgroundColor};` : ''}
        ${borderColor ? `border-color: ${borderColor};` : ''}
        ${color ? `color: ${color};` : ''}
        ${opacity ? `opacity: ${opacity};` : ''}

        ${customStyles ? customStyles : ''}

        svg, svg * {
          ${fill ? `fill: ${fill};` : ''}
        }
      }
    `;
  },
  unSelected: () => css`
    -webkit-user-select: none;
    -moz-user-select: -moz-none;
    -ms-user-select: none;
    user-select: none;
  `,
  textEllipsis: (lines: number = 1) => css`
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
  flex: (options?: Partial<Types.FlexboxProps>) => css`
    display: flex;
    flex-direction: ${options?.flexDirection || 'row'};
    flex-wrap: ${options?.flexWrap || 'initial'};
    align-items: ${options?.alignItems || 'center'};
    justify-content: ${options?.justifyContent || 'center'};
    gap: ${options?.gap || 'initial'};
  `,
};
