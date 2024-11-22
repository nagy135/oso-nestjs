import { Oso } from 'oso-cloud';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PolarTypes } from 'src/oso_types';
import * as fs from 'node:fs';

@Injectable()
export class OsoService {
  oso: Oso<PolarTypes>;

  constructor(configService: ConfigService) {
    const apiKey = configService.get('OSO_API_KEY');
    this.oso = new Oso<PolarTypes>('https://cloud.osohq.com', apiKey);

    const osoPolicySrc = fs.readFileSync('./src/lib/oso_policy.polar', 'utf8');

    this.oso.policy(osoPolicySrc);
  }

  getInstance() {
    return this.oso;
  }
}
