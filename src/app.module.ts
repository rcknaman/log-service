import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { LogsModule } from './log/logs.module';
import { RabbitMqModule } from './utils/rabbitmq/rabbit-mq.module';

@Module({
  imports: [DatabaseModule,RabbitMqModule,LogsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
