import { Test, TestingModule } from '@nestjs/testing';
import { GardenRestApiController } from './garden-rest-api.controller';
import { GardenRestApiService } from './garden-rest-api.service';

describe('GardenRestApiController', () => {
  let controller: GardenRestApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GardenRestApiController],
      providers: [GardenRestApiService],
    }).compile();

    controller = module.get<GardenRestApiController>(GardenRestApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
