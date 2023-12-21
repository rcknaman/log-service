import { Module } from "@nestjs/common";
import { RabbitMqModule } from "src/utils/rabbitmq/rabbit-mq.module";
import { LogsController } from "./logs.controller";
import { LogsService } from "./logs.service";
import { DatabaseModule } from "src/database/database.module";
import { databaseProviders } from "src/database/database.provider";
import { PROVIDERS } from "src/entities/provider/provider";


@Module({
    imports:[DatabaseModule],
    controllers:[LogsController],
    providers:[LogsService,...PROVIDERS]
})
export class LogsModule {}