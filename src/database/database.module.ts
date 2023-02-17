import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../user/entity/user.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ls-f9f2c60434ab2e2f9ecb9c1ff6b14f6f7f4bb1eb.cb9l0bk24fup.us-east-1.rds.amazonaws.com',
      port: 3306,
      username: 'dbmasteruser',
      password: 'F-,f_)v;i<M{F,2[8zDczHd:N!4Fgs^Z',
      database: 'nest',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
