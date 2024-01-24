import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GardenRestApiService } from './garden-rest-api.service';
import { CreateGardenRestApiDto } from './dto/create-garden-rest-api.dto';
import { UpdateGardenRestApiDto } from './dto/update-garden-rest-api.dto';

@Controller('garden-rest-api')
export class GardenRestApiController {
  constructor(private readonly gardenRestApiService: GardenRestApiService) {}

  @Post()
  createGarden(@Body() createGardenRestApiDto: CreateGardenRestApiDto) {
    return this.gardenRestApiService.create(createGardenRestApiDto);
  }

  @Get()
  findAll() {
    return this.gardenRestApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.gardenRestApiService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateGardenRestApiDto: UpdateGardenRestApiDto) {
    return this.gardenRestApiService.update(+id, updateGardenRestApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.gardenRestApiService.remove(+id);
  }
}
