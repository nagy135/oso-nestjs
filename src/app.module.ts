import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ProjectsModule } from './projects/projects.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { ConfigModule } from '@nestjs/config';
import { MigrationModule } from './migration/migration.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot('mongodb://mongo:mongo@127.0.0.1:27017', {
      dbName: 'oso-nest',
    }),
    AuthModule,
    UsersModule,
    ProjectsModule,
    OrganizationsModule,
    MigrationModule,
  ],
})
export class AppModule {}
