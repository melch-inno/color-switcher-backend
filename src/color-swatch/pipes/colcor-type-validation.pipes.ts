import { BadRequestException, PipeTransform } from '@nestjs/common';
import { TypesArray } from '../dto/color-swatch.dto';

export class ColorTypeValidationPipe implements PipeTransform {
  readonly allowTypes = TypesArray;

  transform(value: any): any {
    value = value.toUpperCase();
    if (!this.isTypeValid(value)) {
      throw new BadRequestException(`Invalid type: ${value}`);
    }
    return value;
  }

  private isTypeValid(type: any) {
    const indxOf = this.allowTypes.indexOf(type);
    return indxOf !== -1;
  }
}
