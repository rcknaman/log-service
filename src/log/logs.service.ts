import { HttpException, Inject, Injectable } from "@nestjs/common";
import Logs from "src/entities/logs.entity";


@Injectable()
export class LogsService{

    constructor(@Inject('LOGS_REPOSITORY') private readonly logsRepository:typeof Logs){}



    async saveLogs(data):Promise<any>{

        try {
            
            const {path,response}=data;
            await this.logsRepository.create({
                path,response
            });
        } catch (error) {
            throw new HttpException(error.message,error.status);
        }

    }
}