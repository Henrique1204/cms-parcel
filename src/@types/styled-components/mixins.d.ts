import * as StyleTypes from './styles';

type ImageRepeat =
  | 'repeat'
  | 'repeat-x'
  | 'repeat-y'
  | 'no-repeat'
  | 'space'
  | 'round'
  | StyleTypes.GlobalProps;

type ImagePosition =
  | 'left'
  | 'top'
  | 'right'
  | 'bottom'
  | 'center'
  | 'left top'
  | 'left center'
  | 'left bottom'
  | 'right top'
  | 'right center'
  | 'right bottom'
  | 'center top'
  | 'center center'
  | 'center bottom';

export type BackgroundImageProps = {
  url: string | string[];
  repeat?: ImageRepeat;
  size?: 'cover' | 'contain' | string;
  position?: ImagePosition;
};

export type HoverEffectProps = {
  isActive?: boolean;
  transitionProperty?: string;
  transitionDuration?: string;
  selector?: string;
  backgroundColor?: string;
  color?: string;
  fill?: string;
  borderColor?: string;
  opacity?: number;
  customStyles?: CSSText;
};

export type FlexboxProps = {
  justifyContent: StyleTypes.Justify;
  alignItems: StyleTypes.Align;
  flexDirection: 'column' | 'row';
  flexWrap: StyleTypes.Wrap;
  gap: StyleTypes.Gap;
};

export type ScrollbarProps = {
  thumb: string;
  thumbHover: string;
};
