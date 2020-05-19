import {Connection} from "typeorm";
import {User} from "./user";

export const userProviders = [
    {
        provide: 'USER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(User),
        inject: ['POSTGRES_CONNECTION']
    }
]
