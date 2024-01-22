import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGardenRestApiDto } from './dto/create-garden-rest-api.dto';
import { UpdateGardenRestApiDto } from './dto/update-garden-rest-api.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { GardenRestApi } from './entities/garden-rest-api.entity';

@Injectable()
export class GardenRestApiService {
  constructor(
    @InjectRepository(GardenRestApi)
    public gardenRestApiRepository: Repository<GardenRestApi>,
  ) {}

  async create(createGardenRestApiDto: CreateGardenRestApiDto): Promise<GardenRestApi> {
    const gardenRestApi = this.gardenRestApiRepository.create(createGardenRestApiDto);
    return await this.gardenRestApiRepository.save(gardenRestApi);
  }

  async findAll(): Promise<GardenRestApi[]> {
    return await this.gardenRestApiRepository.find();
  }

  async findOne(id: number): Promise<GardenRestApi | undefined> {
    return await this.gardenRestApiRepository.findOneBy({id});
  }

  async update(id: number, updateGardenRestApiDto: UpdateGardenRestApiDto): Promise<GardenRestApi> {
    const gardenRestApi = await this.gardenRestApiRepository.preload({
      id,
      ...updateGardenRestApiDto,
    });
    if (!gardenRestApi) {
      throw new NotFoundException(`GardenRestApi with ID ${id} not found`);
    }
    return await this.gardenRestApiRepository.save(gardenRestApi);
  }

  async remove(id: number): Promise<void> {
    const gardenRestApi = await this.findOne(id);
    if (!gardenRestApi) {
      throw new NotFoundException(`GardenRestApi with ID ${id} not found`);
    }
    await this.gardenRestApiRepository.remove(gardenRestApi);
  }
}
