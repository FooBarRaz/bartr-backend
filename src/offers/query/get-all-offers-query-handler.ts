import {QueryHandler} from "@nestjs/cqrs";
import {GetAllOffersQuery} from "./get-all-offers-query";
import {OfferEntity} from "./models/offer.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";

@QueryHandler(GetAllOffersQuery)
export class GetAllOffersQueryHandler {
    constructor(
        @InjectRepository(OfferEntity)
        private offerRepository: Repository<OfferEntity>) { }

    async execute(query: GetAllOffersQuery) {
        return this.offerRepository.find();
    }

}
