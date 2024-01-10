import { Test, TestingModule } from '@nestjs/testing';
import { GardensWebSocketsService } from './gardens_web-sockets.service';

describe('GardensWebSocketsService', () => {
  let service: GardensWebSocketsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GardensWebSocketsService],
    }).compile();

    service = module.get<GardensWebSocketsService>(GardensWebSocketsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
