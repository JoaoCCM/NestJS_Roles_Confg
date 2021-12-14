import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as compression from 'compression';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(compression());
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.use(helmet());
  app.enableCors();

  const PORT = process.env.PORT || 5000;

  await app.listen(PORT);
}
bootstrap();
