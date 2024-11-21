import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { MigrationModule } from 'src/migration/migration.module';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [MigrationModule],
  exports: [UsersService],
})
export class UsersModule {}
