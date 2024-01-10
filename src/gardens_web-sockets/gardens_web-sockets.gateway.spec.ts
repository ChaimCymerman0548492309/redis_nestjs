import { Test, TestingModule } from '@nestjs/testing';
import { GardensWebSocketsGateway } from './gardens_web-sockets.gateway';
import { GardensWebSocketsService } from './gardens_web-sockets.service';

describe('GardensWebSocketsGateway', () => {
  let gateway: GardensWebSocketsGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GardensWebSocketsGateway, GardensWebSocketsService],
    }).compile();

    gateway = module.get<GardensWebSocketsGateway>(GardensWebSocketsGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
