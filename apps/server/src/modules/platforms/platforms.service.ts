import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { EncryptionService } from '../../shared/utils/encryption.util';
import { PlatformFactory } from './platform.factory';
import { IPlatformProvider } from './interfaces/platform-provider.interface';

@Injectable()
export class PlatformsService {
  constructor(
    private prisma: PrismaService,
    private encryptionService: EncryptionService,
    private platformFactory: PlatformFactory,
  ) {}

  async connectPlatform(
    userId: string,
    type: string,
    name: string,
    token: string,
  ) {
    const provider = this.platformFactory.getProvider(type);

    // 1. Validate token trực tiếp với Provider
    const isValid = await provider.validateToken(token);
    if (!isValid) {
      throw new BadRequestException(`Invalid token for platform ${type}`);
    }

    // 2. Mã hóa token trước khi lưu
    const encryptedToken = this.encryptionService.encrypt(token);

    // 3. Lưu vào Database (Sử dụng kiểu ép để tránh lỗi Prisma chưa generate)
    try {
      return await (this.prisma.platformConnection as any).upsert({
        where: {
          userId_type_name: { userId, type, name },
        },
        update: {
          token: encryptedToken,
          status: 'active',
        },
        create: {
          userId,
          type,
          name,
          token: encryptedToken,
        },
      });
    } catch (error) {
      throw new BadRequestException(
        `Failed to save connection: ${error.message}`,
      );
    }
  }

  async getConnections(userId: string) {
    return this.prisma.platformConnection.findMany({
      where: { userId },
      select: {
        id: true,
        name: true,
        type: true,
        status: true,
        createdAt: true,
      },
    });
  }

  async disconnect(userId: string, connectionId: string) {
    return this.prisma.platformConnection.deleteMany({
      where: { id: connectionId, userId },
    });
  }
}
