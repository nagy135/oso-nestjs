import { Module, OnModuleInit } from '@nestjs/common';
import { MigrationService } from './migration.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/schemas/user';
import { Organization, OrganizationSchema } from 'src/schemas/organization';
import { Project, ProjectSchema } from 'src/schemas/project';

@Module({
  providers: [MigrationService],
  exports: [MigrationService],
  imports: [
    MongooseModule.forFeature([
      {
        name: User.name,
        schema: UserSchema,
      },
      {
        name: Organization.name,
        schema: OrganizationSchema,
      },
      {
        name: Project.name,
        schema: ProjectSchema,
      },
    ]),
  ],
})
export class MigrationModule implements OnModuleInit {
  constructor(private readonly migrationService: MigrationService) {}
  onModuleInit() {
    this.migrationService.runMigrations();
  }
}
