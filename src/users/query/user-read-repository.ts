import {Inject, Injectable} from '@nestjs/common';
import {User} from "./models/user";
import {Model} from "mongoose";

@Injectable()
export class UserReadRepository {

    constructor(
        @Inject('USER_MODEL')
        private userModel: Model<User>
    ) { }

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async create(newUser: User): Promise<User> {
        return this.userModel.create(newUser);
    }
}
