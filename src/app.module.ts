import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:mongo@127.0.0.1:27017', {
      dbName: 'oso-nest',
    }),
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
