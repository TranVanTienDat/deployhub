import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  Param,
  UseGuards,
  Request,
} from '@nestjs/common';
import { PlatformsService } from './platforms.service';

@Controller('platforms')
export class PlatformsController {
  constructor(private readonly platformsService: PlatformsService) {}

  @Post('connect')
  async connect(
    @Request() req,
    @Body() body: { type: string; name: string; token: string },
  ) {
    // Tạm thời lấy userId từ req (sẽ tích hợp Auth Guard sau)
    const userId = req.user?.id || 'temp-user-id';
    return this.platformsService.connectPlatform(
      userId,
      body.type,
      body.name,
      body.token,
    );
  }

  @Get()
  async getConnections(@Request() req) {
    const userId = req.user?.id || 'temp-user-id';
    return this.platformsService.getConnections(userId);
  }

  @Delete(':id')
  async disconnect(@Request() req, @Param('id') id: string) {
    const userId = req.user?.id || 'temp-user-id';
    return this.platformsService.disconnect(userId, id);
  }
}
