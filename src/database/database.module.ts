import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import User from '../user/entity/user.entity';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'secret',
      database: 'nest',
      entities: [User],
      synchronize: true,
    }),
  ],
})
export class DatabaseModule {}
