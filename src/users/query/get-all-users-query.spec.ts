import {GetAllUsersQuery} from './get-all-users-query';
import * as faker from "faker";
import {v4 as uuidv4} from 'uuid';

describe('GetAllUsersQuery', () => {
  it('should be defined', () => {
    expect(new GetAllUsersQuery()).toBeDefined();
  });

  it('should be defined', () => {

    const user = {
      id: uuidv4(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      email: faker.internet.email()
    }

    console.log(JSON.stringify(user, null, 2))

  });
});
