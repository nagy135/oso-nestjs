import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Organization } from 'src/schemas/organization';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(Organization.name)
    private readonly organizationModel: Model<Organization>,
  ) {}
  async findAll(): Promise<Organization[]> {
    return await this.organizationModel.find();
  }

  async findById(id: string): Promise<Organization | null> {
    return await this.organizationModel.findOne({ _id: id });
  }
}
