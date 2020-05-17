import {OfferEntity} from "./offer.entity";
import {Connection} from "typeorm";

export const offerProviders = [
    {
        provide: 'OFFER_REPOSITORY',
        useFactory: (connection: Connection) => connection.getRepository(OfferEntity),
        inject: ['POSTGRES_CONNECTION'],
    }
]
