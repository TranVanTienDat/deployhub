import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findByProvider(provider: string, providerId: string) {
    return this.prisma.user.findUnique({
      where: { providerId },
    });
  }

  async create(data: {
    email: string;
    name: string;
    avatarUrl: string;
    provider: string;
    providerId: string;
  }) {
    return this.prisma.user.create({ data });
  }
}
