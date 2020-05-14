import * as mongoose from 'mongoose';
import {ConfigModule, ConfigService} from "@nestjs/config";

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        imports: [ConfigModule],
        useFactory: (configService: ConfigService): Promise<typeof mongoose> =>
            mongoose.connect(configService.get<string>('MONGO_CONNECTION_STRING')),
        inject: [ConfigService]
    }
];
