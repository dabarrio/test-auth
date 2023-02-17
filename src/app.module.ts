import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';
import { AuthModuleOptions } from '@nestjs/passport';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [DatabaseModule, UserModule, AuthModuleOptions, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
