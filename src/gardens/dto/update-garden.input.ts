import { InputType, PartialType } from '@nestjs/graphql';
import { CreateGardenInput } from './create-garden.input';


@InputType()
export class UpdateGardenInput extends PartialType(
  CreateGardenInput
) {}
