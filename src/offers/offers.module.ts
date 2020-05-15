import { Module } from '@nestjs/common';
import { OffersController } from './api/offers.controller';
import { OffersService } from './api/offers.service';
import {CqrsModule} from "@nestjs/cqrs";
import {MakeOfferCommandHandler} from "./commands/make-offer-command-handler";
import {OfferMadeEventHandler} from "./events/offer-made-event-handler";

@Module({
  imports: [CqrsModule],
  controllers: [OffersController],
  providers: [OffersService, MakeOfferCommandHandler, OfferMadeEventHandler]
})
export class OffersModule {}
