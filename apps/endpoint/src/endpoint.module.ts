import { RmqModule } from '@app/common/rmq/rmq.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EndpointController } from './endpoint.controller';
import { EndpointService } from './endpoint.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './apps/endpoint/.env'
    }),
    RmqModule.register({name: 'MAIL_SERVICE'})
  ],
  controllers: [EndpointController],
  providers: [EndpointService],
})
export class EndpointModule {}
