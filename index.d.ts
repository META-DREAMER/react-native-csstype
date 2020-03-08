import * as RN from 'react-native';

// Prop that allows overriding the acceptable values for a style as long
// as it extends it. If not, it returns the union of the given TLength with the original style
type TCustomProp<TLength, TStyle> = TLength extends TStyle
  ? TLength
  : TStyle | TLength;

type TextStyle = Required<RN.TextStyle>;
type ImageStyle = Required<RN.ImageStyle>;
type ViewStyle = Required<RN.ViewStyle>;

type RNStyle = ViewStyle | TextStyle | ImageStyle;

export type Properties = RN.TextStyle | RN.ImageStyle | RN.ViewStyle;
export type StandardProperties = Properties;

export type StyleT<TStyle, TLength extends TStyle = TStyle> = TLength;

export type GlobalsNumber = number;

export type MarginProperty<TLength = never> = RNStyle['margin'] | TLength;
export type MarginTopProperty<TLength = never> =
  | RNStyle['marginTop']
  | TLength;
export type MarginRightProperty<TLength = never> =
  | RNStyle['marginRight']
  | TLength;
export type MarginBottomProperty<TLength = never> =
  | RNStyle['marginBottom']
  | TLength;
export type MarginLeftProperty<TLength = never> =
  | RNStyle['marginLeft']
  | TLength;

export type PaddingProperty<TLength = never> = RNStyle['padding'] | TLength;
export type PaddingTopProperty<TLength = never> =
  | RNStyle['paddingTop']
  | TLength;
export type PaddingRightProperty<TLength = never> =
  | RNStyle['paddingRight']
  | TLength;
export type PaddingBottomProperty<TLength = never> =
  | RNStyle['paddingBottom']
  | TLength;
export type PaddingLeftProperty<TLength = never> =
  | RNStyle['paddingLeft']
  | TLength;

export type FontFamilyProperty = TextStyle['fontFamily'];
export type FontWeightProperty = TextStyle['fontWeight'];
export type ColorProperty = TextStyle['color'];
export type TextAlignProperty = TextStyle['textAlign'];
export type FontSizeProperty<TLength = never> =
  | TextStyle['fontSize']
  | TLength;
export type LineHeightProperty<TLength = never> =
  | TextStyle['lineHeight']
  | TLength;
export type LetterSpacingProperty<TLength = never> =
  | TextStyle['letterSpacing']
  | TLength;

export type OpacityProperty = ViewStyle['opacity'];
export type DisplayProperty = ViewStyle['display'];

export type HeightProperty<TLength = never> = RNStyle['height'] | TLength;
export type MaxHeightProperty<TLength = never> =
  | RNStyle['maxHeight']
  | TLength;
export type MinHeightProperty<TLength = never> =
  | RNStyle['minHeight']
  | TLength;
export type WidthProperty<TLength = never> = RNStyle['width'] | TLength;
export type MaxWidthProperty<TLength = never> = RNStyle['maxWidth'] | TLength;
export type MinWidthProperty<TLength = never> = RNStyle['minWidth'] | TLength;

export type OverflowProperty = RNStyle['overflow'];
export type ZIndexProperty = RNStyle['zIndex'];
export type TopProperty<TLength = never> = RNStyle['top'] | TLength;
export type RightProperty<TLength = never> = RNStyle['right'] | TLength;
export type BottomProperty<TLength = never> = RNStyle['bottom'] | TLength;
export type LeftProperty<TLength = never> = RNStyle['left'] | TLength;
export type PositionProperty = ViewStyle['position'];

export type FlexProperty<TLength = never> = ViewStyle['flex'];
export type FlexBasisProperty<TLength = never> = ViewStyle['flexBasis'];
export type FlexWrapProperty = ViewStyle['flexWrap'];
export type FlexDirectionProperty = ViewStyle['flexDirection'];
export type AlignItemsProperty = ViewStyle['alignItems'];
export type AlignContentProperty = ViewStyle['alignContent'];
export type AlignSelfProperty = ViewStyle['alignSelf'];
export type JustifyContentProperty = ViewStyle['justifyContent'];

export type BorderWidthProperty<TLength = never> = ViewStyle['borderWidth'];
export type BorderTopWidthProperty<
  TLength = never
  > = ViewStyle['borderTopWidth'];
export type BorderBottomWidthProperty<
  TLength = never
  > = ViewStyle['borderBottomWidth'];
export type BorderLeftWidthProperty<
  TLength = never
  > = ViewStyle['borderLeftWidth'];
export type BorderRightWidthProperty<
  TLength = never
  > = ViewStyle['borderRightWidth'];
export type BorderRadiusProperty<TLength = never> = ViewStyle['borderRadius'];
export type BorderStyleProperty = ViewStyle['borderStyle'];
export type BorderColorProperty = ViewStyle['borderColor'];

// Unknown types not valid in RN
export type OverflowXProperty<TLength = never> = unknown;
export type OverflowYProperty<TLength = never> = unknown;
export type JustifySelfProperty = unknown;
export type JustifyItemsProperty = unknown;
export type VerticalAlignProperty = unknown;
export type GridGapProperty = unknown;
export type GridColumnGapProperty = unknown;
export type GridRowGapProperty = unknown;
export type GridColumnProperty = unknown;
export type GridRowProperty = unknown;
export type GridAutoFlowProperty = unknown;
export type GridAutoColumnsProperty = unknown;
export type GridAutoRowsProperty = unknown;
export type GridTemplateColumnsProperty = unknown;
export type GridTemplateRowsProperty = unknown;
export type GridTemplateAreasProperty = unknown;
export type GridAreaProperty = unknown;
export type BorderTopStyleProperty = unknown;
export type BorderBottomStyleProperty = unknown;
export type BorderLeftStyleProperty = unknown;
export type BorderRightStyleProperty = unknown;
export type BorderTopProperty = unknown;
export type BorderBottomProperty = unknown;
export type BorderLeftProperty = unknown;
export type BorderRightProperty = unknown;
export type BorderProperty<T = never> = never;
