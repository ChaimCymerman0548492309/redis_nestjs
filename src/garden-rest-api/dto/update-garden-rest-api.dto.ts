import { PartialType } from '@nestjs/mapped-types';
import { CreateGardenRestApiDto } from './create-garden-rest-api.dto';

export class UpdateGardenRestApiDto extends PartialType(CreateGardenRestApiDto) {}
