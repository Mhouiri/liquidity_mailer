import { Body, Controller, Get, Post } from '@nestjs/common';
import { SendRequest } from './dto/request.dto';
import { EndpointService } from './endpoint.service';

@Controller('mail')
export class EndpointController {
    constructor(private readonly endpointService: EndpointService) {}

    @Post('/send')
    async sendMail(@Body() body: SendRequest) {
        this.endpointService.sendEmail(body);
}
}