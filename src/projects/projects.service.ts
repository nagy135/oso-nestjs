import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Project } from 'src/schemas/project';

@Injectable()
export class ProjectsService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}
  async findAll(): Promise<Project[]> {
    return await this.projectModel.find();
  }

  async findById(id: string): Promise<Project | null> {
    return await this.projectModel.findOne({ _id: id });
  }
}
