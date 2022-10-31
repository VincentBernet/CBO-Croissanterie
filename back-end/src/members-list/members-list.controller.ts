// Se limiter seulement à la définition d'endpoint au niveau des controllers, et mettre la logique au niveau des services.

import { Controller, Get } from '@nestjs/common';
import { getCurrentMemberListMethod, getInitialMemberListMethod } from "./services/members-list-utils";
import { getInfo } from "./services/developers-utils";
import { memberListType } from './services/members-list-type';

@Controller('members')
export class MembersListController {
  @Get('current-list')
  getCurrentMemberList(): { currentListMember: memberListType, currentTimeBeforeNextDeletion: number | boolean } {
    return getCurrentMemberListMethod();
  }

  @Get('initial-list')
  getInitialMemberList(): memberListType {
    return getInitialMemberListMethod();
  }

  @Get('info')
  getInfo(): string {
    return getInfo();
  }
}

