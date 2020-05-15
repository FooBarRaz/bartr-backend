import {Test, TestingModule} from '@nestjs/testing';
import {OffersController} from './offers.controller';
import CreateOfferDto from "./models/create-offer-dto";

describe('Offers Controller', () => {
    let controller: OffersController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [OffersController],
        }).compile();

        controller = module.get<OffersController>(OffersController);
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });

});
