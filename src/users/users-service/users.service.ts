import {Injectable} from '@nestjs/common';
import {CommandBus, QueryBus} from "@nestjs/cqrs";
import {CreateUserCommand} from "../commands/create-user-command";
import {GetAllUsersQuery} from "../query/get-all-users-query";
import {User} from "../query/models/user";


@Injectable()
export class UsersService {
    constructor(private commandBus: CommandBus, private queryBus: QueryBus) {
    }

    async createUser(name: string, email: string) {
        return this.commandBus.execute( new CreateUserCommand(name, email) );
    }


    async getAllUsers(): Promise<User[]> {
        return this.queryBus.execute(new GetAllUsersQuery());
    }

}
