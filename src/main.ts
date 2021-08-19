import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  if (process.env.NODE_ENV === 'development') {
    app.enableCors();
  } else {
    app.enableCors();
    console.log(`accepting request from origin`);
  }
  await await app.listen(process.env.PORT || 3000);
}
bootstrap();
