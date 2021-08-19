import { Module } from '@nestjs/common';
import { ColorSwatchController } from './color-swatch.controller';
import { ColorSwatchService } from './color-swatch.service';

@Module({
  controllers: [ColorSwatchController],
  providers: [ColorSwatchService],
})
export class ColorSwatchModule {}
