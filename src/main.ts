import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuração do CORS
  app.enableCors({
    origin: 'http://localhost:3000',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
  });
  
  await app.listen(8080);
}

bootstrap();
