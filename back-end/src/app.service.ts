import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Croissanterie backend is responding ! \n Please check the swagger documentation for more information on our API : https://ucare-backend.herokuapp.com/swagger';
  }
}
