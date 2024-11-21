import { Controller, Get, Param } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  getProjects() {
    console.log('getProjects');
    return this.projectsService.findAll();
  }

  @Get(':id')
  getProject(@Param('id') id: string) {
    return this.projectsService.findById(id);
  }
}
