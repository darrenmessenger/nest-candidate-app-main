import { Controller, Get } from '@nestjs/common';
import { User } from './interfaces/users.interface'; //User interface
import { UsersService } from './users.service'; //User data

@Controller('users')
export class UsersController {
    @Get()
    getAllSorted(): string {
        let sortedUsers: User[];
        let usersService = new UsersService;
        sortedUsers = usersService.getUsers();

        // Sort the users by firstName then lastName
        let sortedUsersArray = sortedUsers.sort(function (a,b){
            if (a.firstName < b.firstName)
                return -1;
            else if (a.firstName == b.firstName)
            {
                if (a.lastName < b.lastName) //if the firstNames match then check the lastNames and sort accordingly
                    return -1;
                else if (a.lastName == b.lastName)
                    return 0;
                else
                    return 1;
            }else
                return 1;
        })
        
        return JSON.stringify(sortedUsersArray);  //return the users sorted by firstName then lastName
    }
}
