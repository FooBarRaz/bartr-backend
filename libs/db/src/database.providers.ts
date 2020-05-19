import * as mongoose from 'mongoose';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {createConnection} from "typeorm";
import {Logger} from "@nestjs/common";

export const databaseProviders = [
    {
        provide: 'POSTGRES_CONNECTION_PROVIDER',
        imports: [ConfigModule.forRoot()],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => (entities, database) => {
            const options = {
                type: 'postgres',
                host: configService.get('BARTR_POSTGRES_HOST'),
                port: configService.get('BARTR_POSTGRES_PORT'),
                username: configService.get('BARTR_POSTGRES_USERNAME'),
                password: configService.get('BARTR_POSTGRES_PASSWORD'),
                database: database,
                entities: entities,
                synchronize: true
            };
            Logger.log(JSON.stringify(options));
            return createConnection(options as any);
        }
    }
];

