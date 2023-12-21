import { Controller } from "@nestjs/common";
import { Ctx, MessagePattern, Payload, RmqContext } from "@nestjs/microservices";
import { LogsService } from "./logs.service";


@Controller('logs')
export class LogsController {


    constructor(private readonly logService: LogsService) {}
     
    @MessagePattern('saveLogs')
    public async execute(@Payload() data: any, @Ctx() context: RmqContext) {
        try {
            
            
            console.log("hello");
            console.log("dtatata",data);
            
            
            const channel = context.getChannelRef();
            const orginalMessage = context.getMessage();
            
            channel.ack(orginalMessage);
            if(data){
                await this.logService.saveLogs(data);
            }
        } catch (error) {
            console.log({error});
            
        }
    }
}