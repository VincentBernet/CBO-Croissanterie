// Se limiter seulement à la définition d'endpoint au niveau des controllers, et mettre la logique au niveau des services.

import { Controller, Get } from '@nestjs/common';
const cron = require('node-cron');

const getCurrentMemberListMethod = () => {
    let MockTeamMembers: string[] =
    ["Vincent", "Kevin", "Jean", "Jean-Christophe", "Hakima", "Aya", "Virgil", "Stéphane", "Wendy", "Oum", "Jeremy", "Claudia"]
    ;
    let timer: number = 0;
    cron.schedule('* * * * *', function () {
    MockTeamMembers.pop();
    timer += 1;
    return(MockTeamMembers + " after " + timer + " eliminations");
    });
}

@Controller('members-list')
export class MembersListController {
    @Get('')
    getCurrentMemberList() {
      return getCurrentMemberListMethod();
    }
}

