import {Inject, Module} from '@nestjs/common';
import {OffersController} from './api/offers.controller';
import {OffersService} from './api/offers.service';
import {CqrsModule} from "@nestjs/cqrs";
import {MakeOfferCommandHandler} from "./commands/make-offer-command-handler";
import {OfferMadeEventHandler} from "./events/offer-made-event-handler";
import {Connection, createConnection} from "typeorm";
import {offerProviders} from "./query/models/offer.provider";
import {GetAllOffersQueryHandler} from "./query/get-all-offers-query-handler";
import {ConfigModule, ConfigService} from "@nestjs/config";
import {OfferEntity} from "./query/models/offer.entity";

@Module({
  imports: [CqrsModule, ConfigModule.forRoot()],
  controllers: [OffersController],
  providers: [OffersService,
      MakeOfferCommandHandler,
      GetAllOffersQueryHandler,
      OfferMadeEventHandler,
      {
          provide: 'POSTGRES_CONNECTION',
          inject: [ConfigService],
          useFactory: (configService: ConfigService) => {
              return createConnection({
                  type: configService.get('TYPEORM_CONNECTION'),
                  host: configService.get('TYPEORM_HOST'),
                  port: configService.get('TYPEORM_PORT'),
                  username: configService.get('TYPEORM_USERNAME'),
                  password: configService.get('TYPEORM_PASSWORD'),
                  database: configService.get('TYPEORM_DATABASE'),
                  synchronize: true,
                  entities: [ OfferEntity ]
              });
          }
      },
      ...offerProviders]
})
export class OffersModule {
    constructor(
        @Inject('POSTGRES_CONNECTION')
        private connection: Connection) {
    }
}
