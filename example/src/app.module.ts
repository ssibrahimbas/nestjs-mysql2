import { MySqlModule } from '@ssibrahimbas/nestjs-mysql2';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MySqlModule.forRoot({
      host: 'localhost',
      port: 3306,
      user: 'root',
      password: '12345',
      database: 'mydb',
    }),
    UserModule,
  ],
})
export class AppModule {}
