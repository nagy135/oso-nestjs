import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types, Schema as MongoSchema } from 'mongoose';

export type ProjectDocument = HydratedDocument<Project>;

@Schema()
export class Project {
  @Prop({ required: true })
  name: string;

  @Prop({ type: MongoSchema.Types.ObjectId, ref: 'Organization' })
  organizationId: Types.ObjectId;

  @Prop({
    default: 'PLANNING',
    enum: ['PLANNING', 'IN_PROGRESS', 'ON_HOLD', 'COMPLETED'],
  })
  status: string;

  @Prop()
  description: string;

  @Prop()
  endDate: Date;

  @Prop({ default: true })
  isActive: boolean;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
