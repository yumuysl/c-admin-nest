import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { NestExpressApplication } from '@nestjs/platform-express'
import helmet from 'helmet'
// import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule)

  // app.enableCors()
  app.enableCors({
    origin: ['http://localhost:5173'],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: [
      'Origin',
      'X-Requested-With',
      'Content-Type',
      'Accept',
      'Authorization',
      'x-lang',
    ],
    maxAge: 86400, // 预检请求结果缓存时间（秒）
  })

  app.use(helmet())

  // 使用 Winston logger 作为全局日志
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER))

  // const config = new DocumentBuilder()
  //   .setTitle('Web Crawler')
  //   .setDescription('api 接口文档')
  //   .setVersion('1.0')
  //   .addBearerAuth({
  //     type: 'http',
  //     description: '基于 jwt 的认证'
  //   })
  //   .build()
  // const document = SwaggerModule.createDocument(app, config)
  // SwaggerModule.setup('api-doc', app, document)

  const configService = app.get(ConfigService)

  const port = configService.get('NEST_SERVER_PORT')
    ? Number.parseInt(configService.get('NEST_SERVER_PORT'), 10)
    : 3000

  await app.listen(port, '0.0.0.0')
}

bootstrap()
