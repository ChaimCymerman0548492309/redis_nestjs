import { Module } from '@nestjs/common';
import { GardenRestApiService } from './garden-rest-api.service';
import { GardenRestApiController } from './garden-rest-api.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GardenRestApi } from './entities/garden-rest-api.entity'; // Make sure to import your entity

@Module({
  imports: [TypeOrmModule.forFeature([GardenRestApi])], // Import and include your entity here

  controllers: [GardenRestApiController],
  providers: [GardenRestApiService], // Use GardenRestApiService as a provider
})
export class GardenRestApiModule {}
