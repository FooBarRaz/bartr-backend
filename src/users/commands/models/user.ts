import {AggregateRoot} from "@nestjs/cqrs";
import {UserCreatedEvent} from "../../events/user-created-event";
import {Logger} from "@nestjs/common";

export class User extends AggregateRoot {
    constructor(private id: string) {
        super();
    }

    initialize(name: string, email: string) {
        this.apply(new UserCreatedEvent(this.id, name, email))
        Logger.log(`Published UserCreatedEvent for ${name}`)
    }
}
