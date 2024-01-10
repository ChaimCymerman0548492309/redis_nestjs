import { Injectable } from '@nestjs/common';
import { CreateGardensWebSocketDto } from './dto/create-gardens_web-socket.dto';
import { UpdateGardensWebSocketDto } from './dto/update-gardens_web-socket.dto';

@Injectable()
export class GardensWebSocketsService {
  create(createGardensWebSocketDto: CreateGardensWebSocketDto) {
    return 'This action adds a new gardensWebSocket';
  }

  findAll() {
    return `This action returns all gardensWebSockets`;
  }

  findOne(id: number) {
    return `This action returns a #${id} gardensWebSocket`;
  }

  update(id: number, updateGardensWebSocketDto: UpdateGardensWebSocketDto) {
    return `This action updates a #${id} gardensWebSocket`;
  }

  remove(id: number) {
    return `This action removes a #${id} gardensWebSocket`;
  }
}
