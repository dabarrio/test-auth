import { Controller, Get, Redirect, Req, UseGuards, Response } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../services/auth.service';

@Controller('google')
export class AuthController {
  constructor(private readonly appService: AuthService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {
    console.log(req);
  }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  @Redirect('http://localhost:3000', 302)
  googleAuthRedirect(@Req() req, @Response() res) {
    // return this.appService.googleLogin(req);
    return res.send({JWT: 'holitas'}).json({ url: 'http://localhost:3000' })
    // return ;
  }
}
