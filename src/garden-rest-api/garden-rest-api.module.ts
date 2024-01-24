import { Module } from '@nestjs/common';
import { GardenRestApiService } from './garden-rest-api.service';
import { GardenRestApiController } from './garden-rest-api.controller';
import { MongooseModule } from '@nestjs/mongoose';  // וודא שמיובא כמו שצריך
import { GardenSchema } from './gardens.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'GardenRestApi', schema: GardenSchema }])],
  controllers: [GardenRestApiController],
  providers: [GardenRestApiService],
})
export class GardenRestApiModule {}
