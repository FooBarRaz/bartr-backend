import {CreateUserCommand} from "./create-user-command";
import {CommandHandler, EventPublisher} from "@nestjs/cqrs";
import {User} from "./models/user";
import {v4 as uuidv4} from 'uuid';
import {Logger} from "@nestjs/common";

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler {
    constructor(
        private publisher: EventPublisher
    ) { }

    async execute(command: CreateUserCommand) {
        const {name, email} = command;
        const user = this.publisher.mergeObjectContext(new User(uuidv4()));
        user.initialize(name, email);
        user.commit();
        Logger.log(`Handled command for creating new user: ${JSON.stringify(command, null, 2)}`)
    }

}
