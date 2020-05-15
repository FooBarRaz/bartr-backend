import {IEvent} from "@nestjs/cqrs";

export class OfferMadeEvent implements IEvent {
    constructor
    (public readonly id: string,
     public readonly userId: string,
     public readonly offer: string,
     public readonly quantity: number,
     public readonly comment: string,
     public readonly location: string,
     public readonly startTime: Date,
     public readonly endTime: Date) {

    }

}
