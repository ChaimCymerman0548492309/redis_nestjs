import { Test, TestingModule } from '@nestjs/testing';
import { GardenRestApiService } from './garden-rest-api.service';

describe('GardenRestApiService', () => {
  let service: GardenRestApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GardenRestApiService],
    }).compile();

    service = module.get<GardenRestApiService>(GardenRestApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
