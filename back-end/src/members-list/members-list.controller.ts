// Se limiter seulement à la définition d'endpoint au niveau des controllers, et mettre la logique au niveau des services.

import { Controller, Get } from '@nestjs/common';
import { getCurrentMemberListMethod, getInitialMemberListMethod } from "./members-list-utils";

@Controller('members')
export class MembersListController {
    @Get('current-list')
    getCurrentMemberList(): [currentListMember: string[], currentTimeBeforeNextDeletion: number | boolean] {
      return getCurrentMemberListMethod();
    }

    @Get('initial-list')
    getInitialMemberList(): string[] {
      return getInitialMemberListMethod();
    }
}

