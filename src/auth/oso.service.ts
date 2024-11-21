import { Oso } from 'oso-cloud';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PolarTypes } from 'src/oso_types';

@Injectable()
export class OsoService {
  oso: Oso<PolarTypes>;

  constructor(configService: ConfigService) {
    const apiKey = configService.get('OSO_API_KEY');
    this.oso = new Oso<PolarTypes>('https://cloud.osohq.com', apiKey);

    const osoPolicySrc = `
actor User {}

resource Organization {
  roles = ["viewer", "owner"];
}

resource Project {
  roles = ["viewer", "owner"];
  permissions = ["view", "edit"];
  relations = { project_container: Organization };
  "view" if "viewer";
  "edit" if "owner";
  "viewer" if "owner";
  "viewer" if "viewer" on "project_container";
  "owner" if "owner" on "project_container";
}

resource UnusedResource {
  roles = ["viewer", "owner"];
}
    `;

    this.oso.policy(osoPolicySrc);
  }

  getInstance() {
    return this.oso;
  }
}
