import { Test, TestingModule } from '@nestjs/testing';
import { OffersService } from './offers.service';
import CreateOfferDto from "./models/create-offer-dto";
import * as faker from "faker";

describe('OffersService', () => {
  let service: OffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffersService],
    }).compile();

    service = module.get<OffersService>(OffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should ', () => {

    const offer: CreateOfferDto = {
      comment: faker.random.words(6),
      location: faker.random.alphaNumeric(6),
      startTime: faker.date.past(),
      endTime: faker.date.future(),
      quantity: faker.random.number(5),
      offering: faker.random.words(3)
    }

    console.log(JSON.stringify(offer, null, 2))

  });
});
