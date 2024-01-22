import { Module } from '@nestjs/common';
import { GardensService } from './gardens.service';
import { GardensResolver } from './gardens.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { GardenSchema } from './gardens.schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: 'Garden',
   schema: GardenSchema }])],
  providers: [GardensResolver, GardensService],
})
export class GardensModule {}
