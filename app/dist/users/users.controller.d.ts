import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getUsers(): {
        id: number;
        name: string;
    }[];
    printSomething(): string;
}
