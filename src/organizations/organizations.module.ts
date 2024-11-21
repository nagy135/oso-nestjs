import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { MigrationModule } from 'src/migration/migration.module';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
  imports: [MigrationModule],
  exports: [OrganizationsService],
})
export class OrganizationsModule {}
