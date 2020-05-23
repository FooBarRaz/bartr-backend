import {Inject, Module} from '@nestjs/common';
import {OffersController} from './api/offers.controller';
import {OffersService} from './api/offers.service';
import {CqrsModule} from "@nestjs/cqrs";
import {MakeOfferCommandHandler} from "./commands/make-offer-command-handler";
import {OfferMadeEventHandler} from "./events/offer-made-event-handler";
import {Connection} from "typeorm";
import {offerProviders} from "./query/models/offer.provider";
import {GetAllOffersQueryHandler} from "./query/get-all-offers-query-handler";
import {ConfigModule} from "@nestjs/config";
import {OfferEntity} from "./query/models/offer.entity";
import {DbModule} from "@bartr/db/db.module";
import {ConnectionProvider} from "@bartr/db/ConnectionProvider";

@Module({
  imports: [CqrsModule, ConfigModule.forRoot(), DbModule],
  controllers: [OffersController],
  providers: [OffersService,
      MakeOfferCommandHandler,
      GetAllOffersQueryHandler,
      OfferMadeEventHandler,
      {
          provide: 'POSTGRES_CONNECTION',
          inject: [ConnectionProvider],
          useFactory: (connectionProvider: ConnectionProvider) => connectionProvider.provide('offers', [OfferEntity])
      },
      ...offerProviders]
})
export class OffersModule { }
