import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ColorSwatchService } from './color-swatch.service';
import { ColorTypeDto } from './dto/color-swatch.dto';

@Controller('color-swatch')
export class ColorSwatchController {
  constructor(private colorSwatchService: ColorSwatchService) {}

  @Get()
  async getColorSwatch(): Promise<any> {
    return await this.colorSwatchService.getColorSwatch();
  }

  @Get('/type')
  async getColorSwatchType(
    @Query(ValidationPipe) getType: ColorTypeDto,
  ): Promise<any> {
    const { type } = getType;
    return await this.colorSwatchService.getSingleColorSwatch(type);
  }
}
