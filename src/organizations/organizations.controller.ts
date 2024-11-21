import { Controller, Get, Param } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  getProjects() {
    return this.organizationsService.findAll();
  }

  @Get(':id')
  getProject(@Param('id') id: string) {
    return this.organizationsService.findById(id);
  }
}
