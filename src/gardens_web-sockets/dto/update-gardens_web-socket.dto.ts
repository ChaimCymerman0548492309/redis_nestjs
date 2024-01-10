import { PartialType } from '@nestjs/mapped-types';
import { CreateGardensWebSocketDto } from './create-gardens_web-socket.dto';

export class UpdateGardensWebSocketDto extends PartialType(CreateGardensWebSocketDto) {
  id: number;
}
