import { WebSocketGateway, SubscribeMessage, MessageBody } from '@nestjs/websockets';
import { GardensWebSocketsService } from './gardens_web-sockets.service';
import { CreateGardensWebSocketDto } from './dto/create-gardens_web-socket.dto';
import { UpdateGardensWebSocketDto } from './dto/update-gardens_web-socket.dto';

@WebSocketGateway()
export class GardensWebSocketsGateway {
  constructor(private readonly gardensWebSocketsService: GardensWebSocketsService) {}

  @SubscribeMessage('createGardensWebSocket')
  create(@MessageBody() createGardensWebSocketDto: CreateGardensWebSocketDto) {
    return this.gardensWebSocketsService.create(createGardensWebSocketDto);
  }

  @SubscribeMessage('findAllGardensWebSockets')
  findAll() {
    return this.gardensWebSocketsService.findAll();
  }

  @SubscribeMessage('findOneGardensWebSocket')
  findOne(@MessageBody() id: number) {
    return this.gardensWebSocketsService.findOne(id);
  }

  @SubscribeMessage('updateGardensWebSocket')
  update(@MessageBody() updateGardensWebSocketDto: UpdateGardensWebSocketDto) {
    return this.gardensWebSocketsService.update(updateGardensWebSocketDto.id, updateGardensWebSocketDto);
  }

  @SubscribeMessage('removeGardensWebSocket')
  remove(@MessageBody() id: number) {
    return this.gardensWebSocketsService.remove(id);
  }
}
