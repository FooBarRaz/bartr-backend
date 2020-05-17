import {Injectable} from '@nestjs/common';
import CreateOfferDto from "./models/create-offer-dto";
import {CommandBus, EventBus, QueryBus} from "@nestjs/cqrs";
import {MakeOfferCommand} from "../commands/make-offer-command";
import {GetAllOffersQuery} from "../query/get-all-offers-query";

@Injectable()
export class OffersService {
    constructor(
        private commandBus: CommandBus,
        private eventBus: EventBus,
        private queryBus: QueryBus,
    ) {
    }

    createOffer(userId: string, dto: CreateOfferDto) {
        const {
            offering, quantity, comment, location, startTime, endTime
        } = dto;
        return this.commandBus.execute(new MakeOfferCommand(userId, offering, quantity, comment, location, startTime, endTime));
    }

    getAll() {
        return this.queryBus.execute(new GetAllOffersQuery());
    }
}
