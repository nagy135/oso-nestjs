import { Module, OnModuleInit } from '@nestjs/common';
import { MigrationService } from './migration.service';
import { AuthModule } from 'src/auth/auth.module';
import { UsersModule } from 'src/users/users.module';
import { OrganizationsModule } from 'src/organizations/organizations.module';
import { ProjectsModule } from 'src/projects/projects.module';

@Module({
  providers: [MigrationService],
  exports: [MigrationService],
  imports: [AuthModule, UsersModule, OrganizationsModule, ProjectsModule],
})
export class MigrationModule implements OnModuleInit {
  constructor(private readonly migrationService: MigrationService) {}
  onModuleInit() {
    this.migrationService.runMigrations();
  }
}
