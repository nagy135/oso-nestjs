import {
  Dependencies,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Dependencies(UsersService, JwtService)
@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(
    name: string,
    password: string,
  ): Promise<{ access_token: string }> {
    const user = await this.usersService.findUserByName(name);
    if (user?.password !== password) {
      throw new UnauthorizedException();
    }
    const payload = { name: user.name, sub: user._id };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
