import {EventsHandler, IEventHandler} from "@nestjs/cqrs";
import {UserCreatedEvent} from "./user-created-event";
import {UserReadRepository} from "../query/user-read-repository";
import {Logger} from "@nestjs/common";
import {User} from "../query/models/user";

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventHandler implements  IEventHandler<UserCreatedEvent>{
    constructor(private repository: UserReadRepository) { }

    handle(event: UserCreatedEvent) {
        //save new user
        Logger.log(`Saved new user: ${JSON.stringify(event, null, 2)}`);
        return this.repository.create(event as User);
    }




}
