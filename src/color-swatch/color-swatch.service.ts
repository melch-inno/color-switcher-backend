import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { ColorTypesMapArray } from './dto/color-swatch.dto';
import { log } from 'console';

@Injectable()
export class ColorSwatchService {
  private colorSwatch = [];

  /**
   * @ function getColorSwatch random color service
   */
  async getColorSwatch() {
    try {
      const func = ColorTypesMapArray;
      for (let i = 0; i < 5; i++) {
        this.colorSwatch.push(
          await func[Math.floor(Math.random() * func.length)](),
        );
      }
      const colors = this.colorSwatch;
      this.colorSwatch = [];
      return colors;
    } catch (error) {
      log(InternalServerErrorException);
      return InternalServerErrorException;
    }
  }

  /**
   * @ function getSingleColorSwatch single color service
   */

  async getSingleColorSwatch(type: string) {
    let func: any;
    if (type === 'rgb') {
      func = ColorTypesMapArray[0];
    } else if (type === 'hsl') {
      func = ColorTypesMapArray[1];
    } else {
      return BadRequestException;
    }

    try {
      for (let i = 0; i < 5; i++) {
        this.colorSwatch.push(await func());
      }
      const rgbColors = this.colorSwatch;
      this.colorSwatch = [];
      return rgbColors;
    } catch (error) {
      log(InternalServerErrorException);
      return InternalServerErrorException;
    }
  }
}
