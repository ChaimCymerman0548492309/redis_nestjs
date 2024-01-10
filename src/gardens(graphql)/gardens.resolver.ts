import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GardensService } from './gardens.service';
import { CreateGardenInput } from './dto/create-garden.input';
import { UpdateGardenInput } from './dto/update-garden.input';

@Resolver('Garden')
export class GardensResolver {
  constructor(private readonly gardensService: GardensService) {}

  @Mutation('createGarden')
  create(@Args('createGardenInput') createGardenInput: CreateGardenInput) {
    return this.gardensService.create(createGardenInput);
  }

  @Query('gardens')
  findAll() {
    return this.gardensService.findAll();
  }

  @Query('garden')
  findOne(@Args('id') id: number) {
    return this.gardensService.findOne(id);
  }

  @Mutation('updateGarden')
  update(@Args('updateGardenInput') updateGardenInput: UpdateGardenInput) {
    return this.gardensService.update(updateGardenInput.id, updateGardenInput);
  }

  @Mutation('removeGarden')
  remove(@Args('id') id: number) {
    return this.gardensService.remove(id);
  }
}
