import {Module} from '@nestjs/common';
import {UsersController} from './users-controller/users.controller';
import {UsersService} from './users-service/users.service';
import {CreateUserCommandHandler} from "./commands/create-user-command-handler";
import {UserReadRepository} from './query/user-read-repository';
import {GetAllUsersQueryHandler} from './query/get-all-users-query-handler';
import {CqrsModule} from "@nestjs/cqrs";
import {UserCreatedEventHandler} from "./events/user-created-event-handler";
import {userProviders} from "./query/models/user.provider";
import {DbModule} from "@bartr/db";
import {User} from "./query/models/user";
import {ConfigModule} from "@nestjs/config";
import {ConnectionProvider} from "@bartr/db/ConnectionProvider";


const commandHandlers = [CreateUserCommandHandler];
const queryHandlers = [GetAllUsersQueryHandler];

@Module({
    imports: [CqrsModule, DbModule, ConfigModule.forRoot()],
    controllers: [UsersController],
    providers: [
        {
            provide: 'POSTGRES_CONNECTION',
            inject: [ConnectionProvider],
            useFactory: (connectionProvider: ConnectionProvider) => connectionProvider.provide('users', [User])
        },
        UsersService,
        UserReadRepository,
        UserCreatedEventHandler,
        GetAllUsersQueryHandler,
        ...commandHandlers,
        ...queryHandlers,
        ...userProviders
    ]
})
export class UsersModule {
}
