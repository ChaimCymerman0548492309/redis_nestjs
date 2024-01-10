import { Module } from '@nestjs/common';
import { GardensService } from './gardens.service';
import { GardensResolver } from './gardens.resolver';

@Module({
  providers: [GardensResolver, GardensService],
})
export class GardensModule {}
