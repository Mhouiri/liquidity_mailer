import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { SendRequest } from './dto/request.dto';

@Injectable()
export class EndpointService {
  constructor(@Inject('MAIL_SERVICE') private mailingClient: ClientProxy) {}

  async sendEmail(requestBody: SendRequest) {
    try {
        this.mailingClient.emit('mail-handler', requestBody)
    } catch (err) {
      throw err;
    }
  }
}
