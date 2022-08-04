import { RmqService } from '@app/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { MailSenderModule } from './mail-sender.module';

async function bootstrap() {
  const app = await NestFactory.create(MailSenderModule);
  const rmqService = app.get<RmqService>(RmqService);
  app.connectMicroservice(rmqService.getOptions());
  await app.startAllMicroservices();
}
bootstrap();
