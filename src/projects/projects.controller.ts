import {
  Controller,
  Request,
  Get,
  Param,
  UseGuards,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { ProjectsService } from './projects.service';
import { AuthGuard } from 'src/auth/auth.guard';
import { RequestWithUser } from 'src/types';
import { OsoService } from 'src/auth/oso.service';
import { typedVar } from 'oso-cloud';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly projectsService: ProjectsService,
    private readonly osoService: OsoService,
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async getProjects(@Request() req: RequestWithUser) {
    const actor = {
      type: 'User',
      id: req.user.name,
    } as const;

    const projectTypedVar = typedVar('Project');

    const allowedProjects = await this.osoService
      .getInstance()
      .buildQuery(['allow', actor, 'view', projectTypedVar])
      .evaluate(projectTypedVar);

    return this.projectsService.findByNameArray(allowedProjects);
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async getProject(@Request() req: RequestWithUser, @Param('id') id: string) {
    const project = await this.projectsService.findById(id);
    if (!project) throw new NotFoundException();

    const actor = {
      type: 'User',
      id: req.user.name,
    } as const;

    const resource = {
      type: 'Project',
      id: project.name,
    } as const;

    if (
      !(await this.osoService.getInstance().authorize(actor, 'view', resource))
    ) {
      throw new ForbiddenException();
    }
    return project;
  }
}
