import { Injectable, NotFoundException } from '@nestjs/common';
import { IPlatformProvider } from './interfaces/platform-provider.interface';
import { RenderProvider } from './providers/render.provider';
import { VercelProvider } from './providers/vercel.provider';

@Injectable()
export class PlatformFactory {
  private providers: Map<string, IPlatformProvider> = new Map();

  constructor(
    private renderProvider: RenderProvider,
    private vercelProvider: VercelProvider,
  ) {
    // Đăng ký các providers vào Map
    this.registerProvider(this.renderProvider);
    this.registerProvider(this.vercelProvider);
  }

  private registerProvider(provider: IPlatformProvider) {
    this.providers.set(provider.type, provider);
  }

  getProvider(type: string): IPlatformProvider {
    const provider = this.providers.get(type);
    if (!provider) {
      throw new NotFoundException(
        `Platform provider for type "${type}" not found`,
      );
    }
    return provider;
  }

  /**
   * Cho phép đăng ký thêm provider động nếu cần (với các plugin sau này)
   */
  addProvider(provider: IPlatformProvider) {
    this.registerProvider(provider);
  }
}
