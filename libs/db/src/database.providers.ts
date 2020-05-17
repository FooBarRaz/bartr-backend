import * as mongoose from 'mongoose';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {createConnection} from "typeorm";

export const databaseProviders = [
    {
        provide: 'MONGODB_CONNECTION',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService): Promise<typeof mongoose> =>
            mongoose.connect(configService.get<string>('MONGO_CONNECTION_STRING'))
    },
    // {
    //     provide: 'POSTGRES_CONNECTION',
    //     imports: [ConfigModule],
    //     inject: [ConfigService],
    //     useFactory: (configService: ConfigService) => createConnection({
    //         type: configService.get('TYPEORM_CONNECTION'),
    //         host: configService.get('TYPEORM_HOST'),
    //         port: configService.get('TYPEORM_PORT'),
    //         username: configService.get('TYPEORM_USERNAME'),
    //         password: configService.get('TYPEORM_PASSWORD'),
    //         database: configService.get('TYPEORM_DATABASE'),
    //         synchronize: true,
    //         entities: [
    //             // __dirname + '/../**/*.entity{.ts,.js}',
    //         ]
    //     })
    // }
];
