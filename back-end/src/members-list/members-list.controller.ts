// Se limiter seulement à la définition d'endpoint au niveau des controllers, et mettre la logique au niveau des services.

import { Controller, Get, Param } from '@nestjs/common';
import { getCurrentMemberListMethod, getInitialMemberListMethod } from "./services/members-list-utils";
import { getInfo } from "./services/developers-utils";
import { dtoMembersListAPI, memberListType } from './services/members-list-type';

@Controller('members')
export class MembersListController {
  @Get('current-list')
  getCurrentMemberList(@Param('apiCallDate') apiCallDate: Date): dtoMembersListAPI {
    return getCurrentMemberListMethod(apiCallDate);
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

