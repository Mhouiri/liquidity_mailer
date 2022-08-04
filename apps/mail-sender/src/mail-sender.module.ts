import { RmqModule } from '@app/common/rmq/rmq.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MailSenderController } from './mail-sender.controller';
import { MailSenderService } from './mail-sender.service';

@Module({
  imports: [
    ConfigModule.forRoot( {
      isGlobal: true,
      envFilePath: './apps/mail-sender/.env'
    }),
    MailerModule.forRoot({
      transport: {
        host: process.env.SERVICE_HOST,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASS,
        },
    },
    }),
    RmqModule
  ],
  controllers: [MailSenderController],
  providers: [MailSenderService],
})
export class MailSenderModule {}
