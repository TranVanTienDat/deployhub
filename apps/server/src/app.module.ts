import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatformsModule } from './modules/platforms/platforms.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), PlatformsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
