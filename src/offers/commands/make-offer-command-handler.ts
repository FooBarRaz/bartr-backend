import {MakeOfferCommand} from "./make-offer-command";
import {CommandHandler, EventPublisher} from "@nestjs/cqrs";
import {Offer} from "./models/offer";
import {v4 as uuidv4} from 'uuid';
import {Logger} from "@nestjs/common";
import {of} from "rxjs";

@CommandHandler(MakeOfferCommand)
export class MakeOfferCommandHandler {
    constructor(
        private publisher: EventPublisher
    ) { }

    async execute(command: MakeOfferCommand) {
        const offer = this.publisher.mergeObjectContext(new Offer(uuidv4()));
        const { offering, comment, location, startTime, endTime, userId, quantity } = command;
        offer.initialize(userId, offering, quantity, comment, location, startTime, endTime);
        offer.commit();
        Logger.log(`Handled command for creating new offer: ${JSON.stringify(command, null, 2)}`)
    }

}
