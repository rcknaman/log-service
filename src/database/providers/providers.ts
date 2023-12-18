import { Database } from "../entities/database.entity";

export const PROVIDERS = [
    {
      provide: 'ADMIN_REPOSITORY',
      useValue: Database,
    },]