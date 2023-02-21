import {
  Controller,
  Get,
  Redirect,
  Req,
  UseGuards,
  Response,
  Header,
  Res,
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
  async googleLoginCallback(@Req() req, @Res() res) {
    // Aquí es donde puedes agregar los encabezados de respuesta que necesites
    res.header('Mi-Encabezado', 'Valor-Encabezado');

    // Redireccionar a la página deseada después de autenticar al usuario
    res.redirect('http://localhost:3000');
  }
}
