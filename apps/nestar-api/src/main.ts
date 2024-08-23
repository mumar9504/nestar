import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // GLOBAL INTEGRATIONS
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT_API ?? 3000);
  
}
bootstrap();
