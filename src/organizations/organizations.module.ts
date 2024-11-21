import { Module } from '@nestjs/common';
import { OrganizationsController } from './organizations.controller';
import { OrganizationsService } from './organizations.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Organization, OrganizationSchema } from 'src/schemas/organization';

@Module({
  controllers: [OrganizationsController],
  providers: [OrganizationsService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Organization.name,
        schema: OrganizationSchema,
      },
    ]),
  ],
  exports: [OrganizationsService, MongooseModule],
})
export class OrganizationsModule {}
