import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  let cors = require('cors');
  app.use(cors());
  app.useGlobalPipes(new ValidationPipe({
    transformOptions: {
      enableImplicitConversion: true
    }
  }));
  const config = new DocumentBuilder()
    .setTitle('Simulador banco example')
    .setBasePath('api')
    .setDescription('Simulador banco API description')
    .setVersion('1.0')
    .addServer('http://localhost:3000/', 'Local environment')
    .build();
  console.log(`ambiente local es  = ${process.env.NODE_ENV}`);
  console.log(`PAYWORKS_HOST aws es  = ${process.env.PAYWORKS_HOST}`);
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, document);

  await app.listen(3000);
}
bootstrap();
