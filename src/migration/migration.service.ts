import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from 'src/schemas/organization';
import { Project } from 'src/schemas/project';
import { User } from 'src/schemas/user';

@Injectable()
export class MigrationService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
    @InjectModel(Organization.name)
    private readonly organizationModel: Model<Organization>,
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}
  async runMigrations() {
    Logger.log('Running migrations...');
    if (await this.userModel.exists({ name: 'Viktor' })) {
      Logger.log('Migrations already completed!');
      return;
    }
    const organizations = await this.organizationModel.create([
      {
        name: 'Tesla',
        description: "Viktor's Organization",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Mercedes',
        description: "Viktor's Other Organization",
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await this.userModel.create({
      name: 'Viktor',
      email: 'viktor@gmail.com',
      password: '123',
      organizations,
    });

    await this.projectModel.create({
      name: 'Viktor Project',
      description: 'Viktor Project Description',
      organizationId: organizations[0]._id,
      status: 'PLANNING',
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    Logger.log('Migrations completed!');
  }
}
