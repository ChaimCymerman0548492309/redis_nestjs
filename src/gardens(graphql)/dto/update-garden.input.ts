import { CreateGardenInput } from './create-garden.input';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateGardenInput extends PartialType(CreateGardenInput) {
  id: number;
}
