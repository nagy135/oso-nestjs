import { Oso } from 'oso-cloud';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OsoService {
  oso: Oso;

  constructor(configService: ConfigService) {
    const apiKey = configService.get('OSO_API_KEY');
    this.oso = new Oso('https://cloud.osohq.com', apiKey);
  }

  getInstance() {
    return this.oso;
  }
}
