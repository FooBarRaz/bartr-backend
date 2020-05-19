import {Inject, Injectable} from '@nestjs/common';
import {User} from "./models/user";
import {Repository} from "typeorm";

@Injectable()
export class UserReadRepository {

    constructor(
        @Inject('USER_REPOSITORY')
        private userRepository: Repository<User>
    ) { }

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async create(newUser: User): Promise<any> {
        const user = this.userRepository.create(newUser);
        return this.userRepository.insert(user);
    }
}
