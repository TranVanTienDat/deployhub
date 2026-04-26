import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { IPlatformProvider } from '../interfaces/platform-provider.interface';

@Injectable()
export class RenderProvider implements IPlatformProvider {
  private readonly logger = new Logger(RenderProvider.name);
  readonly type = 'render';
  private readonly baseUrl = 'https://api.render.com/v1';

  async validateToken(token: string): Promise<boolean> {
    try {
      await axios.get(`${this.baseUrl}/services?limit=1`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return true;
    } catch (error) {
      this.logger.error(
        `Render token validation failed: ${error.response?.data?.message || error.message}`,
      );
      return false;
    }
  }

  async getProfile(token: string): Promise<any> {
    // Render API không có endpoint profile cá nhân trực tiếp,
    // chúng ta sẽ lấy thông tin từ danh sách services
    const response = await axios.get(`${this.baseUrl}/services?limit=1`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data[0]?.service?.owner || { name: 'Render User' };
  }

  async getProjects(token: string): Promise<any[]> {
    const response = await axios.get(`${this.baseUrl}/services`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  }
}
