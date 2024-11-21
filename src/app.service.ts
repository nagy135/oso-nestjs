import { Injectable } from '@nestjs/common';
import { User } from './schemas/user';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async getUsers(): Promise<User[]> {
    return await this.userModel.find();
  }
}
