import {
  Controller,
  Get,
  Redirect,
  Req,
  UseGuards,
  Response,
  Header,
} from '@nestjs/common';
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
  @Redirect('http://127.0.0.1:3000/', 302)
  @Header('CONTROL', 'VALUE')
  googleAuthRedirect(@Req() req) {
    // return this.appService.googleLogin(req);
    // res.headers({ JWT: 'holitas' }).redirect({url: 'http://127.0.0.1:3000/'});
    // return { url: 'http://127.0.0.1:3000/' };
    return;
  }
}
