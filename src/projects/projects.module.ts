import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { MigrationModule } from 'src/migration/migration.module';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
  imports: [MigrationModule],
  exports: [ProjectsService],
})
export class ProjectsModule {}
