import { ColorType } from './dto/color-type.enum';
import {
  RBGColorSwatchGenerate,
  HSLColorSwatchGenerate,
} from './color-swatch.generator';
import { log } from 'console';

/**
 * RGB Color Swatch Interface
 * @interface RBGColorSwatchPayload
 * @property {ColorType} type - Color type
 * @property {number} r - Red value
 * @property {number} g - Green value
 * @property {number} b - Blue value
 */

export interface RBGColorSwatchPayload {
  type: ColorType;
  red: number;
  green: number;
  blue: number;
}

/**
 * HSL ColorSwatch interface
 * @interface HSLColorSwatchPayload
 * @property {ColorType} type - Color type
 * @property {number} hue - Hue
 * @property {number} saturation - Saturation
 * @property {number} lightness - Lightness
 */
export interface HSLColorSwatchPayload {
  type: ColorType;
  hue: number;
  saturation: number;
  lightness: number;
}

/**
 * @function GetRGBColorSwatch sync function
 * @description Get RGB Color Swatch
 * @returns {Promise<RBGColorSwatchPayload>}
 * @memberof ColorSwatch
 */
export async function GetRGBColorSwatch(): Promise<RBGColorSwatchPayload> {
  const rgbColorSwatch = await RBGColorSwatchGenerate();

  const payload: RBGColorSwatchPayload = {
    type: ColorType.rgb,
    red: rgbColorSwatch.r,
    green: rgbColorSwatch.g,
    blue: rgbColorSwatch.b,
  };
  return payload;
}

/**
 * @function GetHCLColorSwatch sync function
 * @description Get HCL Color Swatch
 * @returns {Promise<HSLColorSwatchPayload>}
 * @memberof ColorSwatch
 */
export async function GetHCLColorSwatch(): Promise<HSLColorSwatchPayload> {
  const hslColorSwatch = await HSLColorSwatchGenerate();

  const payload: HSLColorSwatchPayload = {
    type: ColorType.hsl,
    hue: hslColorSwatch.h,
    saturation: hslColorSwatch.s,
    lightness: hslColorSwatch.l,
  };
  return payload;
}
