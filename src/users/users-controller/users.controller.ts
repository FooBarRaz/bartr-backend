import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "../users-service/users.service";
import {User} from "../query/models/user";

interface CreateUserDto {
    name: string;
    email: string;
}

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) {
    }

    @Get()
    findAll(): Promise<User[]> {
        return this.userService.getAllUsers();
    }

    @Post()
    createUser(@Body() dto: CreateUserDto) {
        const {name, email} = dto;
        return this.userService.createUser(name, email);
    }

}
