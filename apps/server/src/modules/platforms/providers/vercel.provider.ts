import { Injectable, Logger } from '@nestjs/common';
import axios from 'axios';
import { IPlatformProvider } from '../interfaces/platform-provider.interface';

@Injectable()
export class VercelProvider implements IPlatformProvider {
  private readonly logger = new Logger(VercelProvider.name);
  readonly type = 'vercel';
  private readonly baseUrl = 'https://api.vercel.com';

  async validateToken(token: string): Promise<boolean> {
    try {
      await axios.get(`${this.baseUrl}/v2/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return true;
    } catch (error) {
      this.logger.error(`Vercel token validation failed: ${error.message}`);
      return false;
    }
  }

  async getProfile(token: string): Promise<any> {
    const response = await axios.get(`${this.baseUrl}/v2/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.user;
  }

  async getProjects(token: string): Promise<any[]> {
    const response = await axios.get(`${this.baseUrl}/v9/projects`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.projects;
  }
}
