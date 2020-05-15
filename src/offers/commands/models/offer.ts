import {AggregateRoot} from "@nestjs/cqrs";
import {OfferMadeEvent} from "../../events/offer-made-event";

export class Offer extends AggregateRoot {
    constructor(private id: string) {
        super();
    }

    initialize(
        userId: string,
        offering: string,
        quantity: number,
        comment: string,
        location: string,
        startTime: Date,
        endTime: Date) {
        this.apply(new OfferMadeEvent(this.id, userId, offering, quantity, comment, location, startTime, endTime));
    }
}
