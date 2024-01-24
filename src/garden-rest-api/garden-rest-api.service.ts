// garden-rest-api.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGardenRestApiDto } from './dto/create-garden-rest-api.dto';
import { UpdateGardenRestApiDto } from './dto/update-garden-rest-api.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { GardenSchema } from './gardens.schema' // השלם את הנתיב לתיקייה
import { GardenRestApi } from './entities/garden-rest-api.entity';

@Injectable()
export class GardenRestApiService {
  constructor(
    @InjectModel('GardenRestApi') private readonly gardenRestApiModel: Model<GardenRestApi>,
    ) {}

  async create(createGardenRestApiDto: CreateGardenRestApiDto): Promise<GardenRestApi> {
    const gardenRestApi = new this.gardenRestApiModel(createGardenRestApiDto);
    return await gardenRestApi.save();
  }

  async findAll(): Promise<GardenRestApi[]> {
    return await this.gardenRestApiModel.find().exec();
  }

  async findOne(id: number): Promise<GardenRestApi | undefined> {
    return await this.gardenRestApiModel.findOne({ id }).exec();
  }

  async update(id: number, updateGardenRestApiDto: UpdateGardenRestApiDto): Promise<GardenRestApi> {
    const gardenRestApi = await this.gardenRestApiModel.findOneAndUpdate(
      { id },
      updateGardenRestApiDto,
      { new: true, useFindAndModify: false },
    ).exec();

    if (!gardenRestApi) {
      throw new NotFoundException(`GardenRestApi with ID ${id} not found`);
    }

    return gardenRestApi;
  }
  async remove(id: number): Promise<void> {
    const gardenRestApi = await this.gardenRestApiModel.findOneAndDelete({ id }).exec();
    if (!gardenRestApi) {
      throw new NotFoundException(`GardenRestApi with ID ${id} not found`);
    }
  }
}
