import { Module } from '@nestjs/common';
import { PlatformsService } from './platforms.service';
import { PlatformsController } from './platforms.controller';
import { PlatformFactory } from './platform.factory';
import { RenderProvider } from './providers/render.provider';
import { VercelProvider } from './providers/vercel.provider';
import { EncryptionService } from '../../shared/utils/encryption.util';
import { PrismaService } from '../../prisma/prisma.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [PlatformsController],
  providers: [
    PlatformsService,
    PlatformFactory,
    RenderProvider,
    VercelProvider,
    EncryptionService,
    PrismaService,
  ],
  exports: [PlatformsService],
})
export class PlatformsModule {}
