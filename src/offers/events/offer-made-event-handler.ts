import {EventsHandler} from "@nestjs/cqrs";
import {OfferMadeEvent} from "./offer-made-event";
import {Logger} from "@nestjs/common";
import {OfferEntity} from "../query/models/offer.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@EventsHandler(OfferMadeEvent)
export class OfferMadeEventHandler {
    constructor(
        @InjectRepository(OfferEntity)
        private offersRepository: Repository<OfferEntity>) {

    }

    handle(event: OfferMadeEvent) {
        const offerEntity = this.offersRepository.create(event as OfferEntity);
        this.offersRepository.insert(offerEntity)
            .then(entity => Logger.log(`created new Offer: ${JSON.stringify(entity, null, 2)}`));
    }

}
