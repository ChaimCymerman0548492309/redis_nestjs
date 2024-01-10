import { Injectable } from '@nestjs/common';
import { CreateGardenInput } from './dto/create-garden.input';
import { UpdateGardenInput } from './dto/update-garden.input';

@Injectable()
export class GardensService {
  create(createGardenInput: CreateGardenInput) {
    return 'This action adds a new garden';
  }

  findAll() {
    return `This action returns all gardens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} garden`;
  }

  update(id: number, updateGardenInput: UpdateGardenInput) {
    return `This action updates a #${id} garden`;
  }

  remove(id: number) {
    return `This action removes a #${id} garden`;
  }
}
