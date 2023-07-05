import { Injectable } from '@nestjs/common';
import { User, Book } from '@prisma/client';

@Injectable()
export class AuthService {
  login() {
    return 'This action is login';
  }

  register() {
    return 'This action is register';
  }
}
