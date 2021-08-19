import { Module } from '@nestjs/common';
import { ColorSwatchModule } from './color-swatch/color-swatch.module';

@Module({
  imports: [ColorSwatchModule],
})
export class AppModule {}
