import {EventsHandler} from "@nestjs/cqrs";
import {OfferMadeEvent} from "./offer-made-event";
import {Inject, Logger} from "@nestjs/common";
import {OfferEntity} from "../query/models/offer.entity";
import {Repository} from "typeorm";

@EventsHandler(OfferMadeEvent)
export class OfferMadeEventHandler {
    constructor(
        @Inject('OFFER_READ_REPOSITORY')
        private offersRepository: Repository<OfferEntity>) {

    }

    handle(event: OfferMadeEvent) {
        const offerEntity = this.offersRepository.create(event as OfferEntity);
        this.offersRepository.insert(offerEntity)
            .then(entity => Logger.log(`created new Offer: ${JSON.stringify(entity, null, 2)}`));
    }

}
