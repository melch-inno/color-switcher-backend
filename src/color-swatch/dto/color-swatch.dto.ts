import { IsIn, IsNotEmpty, IsOptional } from 'class-validator';
import { ColorType } from '../dto/color-type.enum';
import { GetRGBColorSwatch, GetHCLColorSwatch } from '../color-swatch.model';

export class ColorTypeDto {
  @IsNotEmpty()
  @IsOptional()
  @IsIn([ColorType.rgb, ColorType.hsl])
  type: ColorType;
}

export const TypesArray = [ColorType.rgb, ColorType.hsl];
export const ColorTypesMapArray = [GetRGBColorSwatch, GetHCLColorSwatch];
