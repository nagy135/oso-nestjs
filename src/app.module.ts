import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MigrationModule } from './migration/migration.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongo:mongo@127.0.0.1:27017', {
      dbName: 'oso-nest',
    }),
    MigrationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
