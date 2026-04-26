import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateOAuthUser(profile: any) {
    const { emails, displayName, photos, provider, id } = profile;
    const email = emails[0].value;

    let user = await this.usersService.findByProvider(provider, id);

    if (!user) {
      // Tự động liên kết nếu cùng email (theo US-01)
      user = await this.usersService.findByEmail(email);

      if (!user) {
        user = await this.usersService.create({
          email,
          name: displayName,
          avatarUrl: photos[0]?.value,
          provider,
          providerId: id,
        });
      } else {
        // Cập nhật provider ID nếu user tồn tại qua email
        // (Có thể thêm logic update ở đây)
      }
    }

    return user;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
