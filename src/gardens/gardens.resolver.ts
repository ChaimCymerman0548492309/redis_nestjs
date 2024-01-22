import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { GardensService } from './gardens.service';
import { CreateGardenInput } from './dto/create-garden.input';
import { UpdateGardenInput } from './dto/update-garden.input';
import { GardenType } from './dto/inputs/garden.dto'; // Import the GardenType

@Resolver(() => GardenType)
export class GardensResolver {
  constructor(private readonly gardensService: GardensService) {}

  @Mutation(() => GardenType) // Specify the return type for the createGarden mutation
  createGarden(@Args('createGardenInput') createGardenInput: CreateGardenInput) {
    return this.gardensService.create(createGardenInput);
  }

  @Query(() => [GardenType]) // Specify the return type for the findAll query
  gardens() {
    return this.gardensService.findAll();
  }

  @Query(() => GardenType) // Specify the return type for the findOne query
  garden(@Args('id') id: number) {
    return this.gardensService.findOne(id);
  }

  @Mutation(() => GardenType) // Specify the return type for the updateGarden mutation
  updateGarden(@Args('updateGardenInput') updateGardenInput: UpdateGardenInput) {
    return this.gardensService.update(updateGardenInput.id, updateGardenInput);
  }

  @Mutation(() => GardenType) // Specify the return type for the removeGarden mutation
  removeGarden(@Args('id') id: number) {
    return this.gardensService.remove(id);
  }
}
