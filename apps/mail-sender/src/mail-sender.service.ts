import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { MailInfo } from './interfaces/interfaces';

@Injectable()
export class MailSenderService {

  constructor(private readonly mailerService: MailerService){}

  async sendMail(mailInfo: MailInfo){
    try{
      await this.mailerService.sendMail({
        to: mailInfo.to,
        from: process.env.EMAIL_ID,
        subject: mailInfo.subject,
        text: mailInfo.text,
      });
      console.log('Success')
    }
    catch(err)
    {
      console.log('Failure')
    }
  }
}
