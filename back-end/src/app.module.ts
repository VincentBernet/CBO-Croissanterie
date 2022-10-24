import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MembersListController } from './members-list/members-list.controller';

@Module({
  imports: [],
  controllers: [AppController, MembersListController],
  providers: [AppService, ],
})
export class AppModule {}
