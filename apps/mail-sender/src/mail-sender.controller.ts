import { RmqService } from '@app/common';
import { Controller, Get } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { MailInfo } from './interfaces/interfaces';
import { MailSenderService } from './mail-sender.service';

@Controller()
export class MailSenderController {
  public constructor(private mailService: MailSenderService,
    private rmqService: RmqService,
    ){}

  @MessagePattern('mail-handler')
    async getNotifications(@Payload() data: MailInfo) {
      await this.mailService.sendMail(data)
    }
}

