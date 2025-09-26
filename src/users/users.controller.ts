import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { IsEmail, IsString } from 'class-validator';
import { UsersService } from './users.service';

// DTO para la validación de login
class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('login')
  async login(@Body() body: LoginDto) {
    const { email, password } = body;
    const user = await this.usersService.validateUser(email, password);
    
    if (!user) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    return {
      ok: true,
      user,
      token: null
    };
  }
}