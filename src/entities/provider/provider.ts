import Logs from "../logs.entity";

export const PROVIDERS = [
    {
      provide: 'LOGS_REPOSITORY',
      useValue: Logs,
    },]