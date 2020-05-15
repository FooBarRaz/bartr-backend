import {Body, Controller, Post} from '@nestjs/common';
import {OffersService} from "./offers.service";
import CreateOfferDto from "./models/create-offer-dto";
import {v4 as uuidv4 } from 'uuid';

@Controller('offers')
export class OffersController {
    constructor(private offersService: OffersService) {

    }

    @Post()
    create(@Body() dto: CreateOfferDto) {
        return this.offersService.createOffer(uuidv4(), dto);
    }

}
