import { Injectable } from '@nestjs/common';
import { User, Book } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  login() {
    return 'This action is login';
  }

  register() {
    return 'This action is register';
  }
}
