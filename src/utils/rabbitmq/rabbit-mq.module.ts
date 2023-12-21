import { Module } from '@nestjs/common';

import { ClientsModule, Transport } from '@nestjs/microservices';
import { RabbitMqService } from './rabbit-mq.service';
console.log("process.env.RABBITMQ_URL",process.env.RABBITMQ_URL,Transport.RMQ);

@Module({
  imports: [],
  exports: [RabbitMqService],
  providers: [RabbitMqService],
})
export class RabbitMqModule {}
