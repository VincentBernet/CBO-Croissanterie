import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersListController } from './members-list/members-list.controller';
import { MembersListService } from './members-list/members-list.service';

@Module({
  imports: [],
  controllers: [AppController, MembersListController],
  providers: [AppService, MembersListService],
})
export class AppModule {}
