import {Module} from '@nestjs/common';
import {OffersController} from './api/offers.controller';
import {OffersService} from './api/offers.service';
import {CqrsModule} from "@nestjs/cqrs";
import {MakeOfferCommandHandler} from "./commands/make-offer-command-handler";
import {OfferMadeEventHandler} from "./events/offer-made-event-handler";
import {TypeOrmModule} from "@nestjs/typeorm";
import {OfferEntity} from "./query/models/offer.entity";
import {Connection} from "typeorm";
import {offerProviders} from "./query/models/offer.provider";
import {GetAllOffersQueryHandler} from "./query/get-all-offers-query-handler";

const postgresDbOptions: any =  {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'bartr',
    password: 'testytest',
    database: 'offers',
    entities: [ OfferEntity ],
    synchronize: true,
};

@Module({
  imports: [CqrsModule, TypeOrmModule.forRoot( postgresDbOptions ), TypeOrmModule.forFeature([OfferEntity])],
  controllers: [OffersController],
  providers: [OffersService,
      MakeOfferCommandHandler,
      GetAllOffersQueryHandler,
      OfferMadeEventHandler,
      ...offerProviders]
})
export class OffersModule {
    constructor(private connection: Connection) {
    }
}
