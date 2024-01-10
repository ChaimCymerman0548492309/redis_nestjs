import { Module } from '@nestjs/common';
import { GardensWebSocketsService } from './gardens_web-sockets.service';
import { GardensWebSocketsGateway } from './gardens_web-sockets.gateway';

@Module({
  providers: [GardensWebSocketsGateway, GardensWebSocketsService],
})
export class GardensWebSocketsModule {}
