import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const connectToQueue = async (queue: string) => {
    console.log({ queue },'');

    try {
      app.connectMicroservice<MicroserviceOptions>({
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@0.0.0.0:5672'],
          queue,
          noAck: false,
          prefetchCount: 1,
        },
      });
    } catch (error) {
      console.log({error});

    }
  };

  await connectToQueue('QUEUE_LOGS');


  await app.startAllMicroservices();
  await app.getMicroservices(); 

  const port=3050;
  await app.listen(port,
    ()=>{
      console.log(`Log server is running on port ${port}`);
      
    });
}
bootstrap();
