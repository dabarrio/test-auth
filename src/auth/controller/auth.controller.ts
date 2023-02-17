import { Controller, Get, HttpStatus, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
@UseGuards(AuthGuard('google'))
export class AuthController {
  @Get('/google')
  async facebookLogin() {
    return HttpStatus.OK;
  }

  @Get('/google/redirect')
  @UseGuards(AuthGuard('google'))
  @Redirect('', 302)
  async facebookLoginRedirect(@Req() req: Request) {
    const { user } = <any>req;
    console.log(user);
    return { url: 'http:localhost:3000' };
  }
}
