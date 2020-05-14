import {QueryHandler} from "@nestjs/cqrs";
import {GetAllUsersQuery} from "./get-all-users-query";
import {UserReadRepository} from "./user-read-repository";

@QueryHandler(GetAllUsersQuery)
export class GetAllUsersQueryHandler {
    constructor(private usersRepository: UserReadRepository) { }

    async execute(query: GetAllUsersQuery) {
        return this.usersRepository.findAll();
    }

}
