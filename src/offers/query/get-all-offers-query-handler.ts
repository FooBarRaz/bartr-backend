import {QueryHandler} from "@nestjs/cqrs";
import {GetAllOffersQuery} from "./get-all-offers-query";
import {OfferEntity} from "./models/offer.entity";
import {Repository} from "typeorm";
import {Inject} from "@nestjs/common";

@QueryHandler(GetAllOffersQuery)
export class GetAllOffersQueryHandler {
    constructor(
        @Inject('OFFER_READ_REPOSITORY')
        private offerRepository: Repository<OfferEntity>) { }

    async execute(query: GetAllOffersQuery) {
        return this.offerRepository.find();
    }

}
