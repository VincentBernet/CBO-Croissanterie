import { Injectable } from '@nestjs/common';
const cron = require('node-cron');

@Injectable()
export class AppService {
  getHello(): string {
    let MockTeamMembers: string[] =
      ["Vincent", "Kevin", "Jean", "Jean-Christophe", "Hakima", "Aya", "Virgil", "Stéphane", "Wendy", "Oum", "Jeremy", "Claudia"]
      ;
    let timer: number = 0;
    cron.schedule('* * * * *', function () {
      MockTeamMembers.pop();
      timer += 1;
      console.log(MockTeamMembers + " after " + timer + " eliminations");
    });
    return 'Hello World!';
  }
}
