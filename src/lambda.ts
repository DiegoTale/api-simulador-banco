import { configure as serverlessExpress } from '@codegenie/serverless-express';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

let cachedServer;

export const handler = async (event, context) => {
    if (!cachedServer) {
        const nestApp = await NestFactory.create(AppModule);
        nestApp.setGlobalPrefix("api");
        const cors = require('cors');
        nestApp.use(cors());

        const config = new DocumentBuilder()
            .setTitle('Simulador banco  example')
            .setBasePath('api')
            .setDescription('Simulador banco API description')
            .setVersion('1.0')
            .addServer('http://localhost:3000/', 'Local environment')
            //.addServer('https://zelk2038g2.execute-api.us-east-2.amazonaws.com/dev/', 'Development')
            //.addServer('https://ide6gvm83d.execute-api.us-east-2.amazonaws.com/prod/', 'Production')
            .build();
        const document = SwaggerModule.createDocument(nestApp, config);
        SwaggerModule.setup('doc', nestApp, document);
        console.log(`ambiente aws es  = ${process.env.NODE_ENV}`);
        await nestApp.init();
        cachedServer = serverlessExpress({ app: nestApp.getHttpAdapter().getInstance() });
    }

    return cachedServer(event, context);
}