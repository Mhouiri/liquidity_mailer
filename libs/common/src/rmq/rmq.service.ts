import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { RmqOptions, Transport } from "@nestjs/microservices";

@Injectable()

export class RmqService {
    constructor(private readonly configService: ConfigService) {}

    getOptions() : RmqOptions{
        return {
            transport: Transport.RMQ,
            options: {
                urls: [this.configService.get<string>('RMQ_URI')],
                queue: this.configService.get<string>('RMQ_MAILING_QUEUE'),
                // persistent: true,
                queueOptions: {
                    durable: false
                },
              },
        }
    }
}