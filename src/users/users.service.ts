import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}
  async getUsers(): Promise<User[]> {
    return await this.userModel.find();
  }

  async findUserByName(name: string): Promise<User | null> {
    return await this.userModel.findOne({ name });
  }
}
