// create-garden.dto.ts
import { IsString, IsNumber, IsArray, IsObject, IsBoolean, IsOptional } from 'class-validator';

export class CreateGardenRestApiDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsObject()
  contact_person: {
    name: string;
    phone_number: string;
  };

  @IsObject()
  gardener: {
    name: string;
    phone: string;
    rating: number;
    gardner_image: string;
  };

  @IsNumber()
  park_size: number;

  @IsString()
  vegetation: string;

  @IsString()
  type: string;

  @IsObject()
  treatment: {
    grass_trimming: boolean;
    tree_pruning: boolean;
    pest_control: boolean;
  };

  @IsArray()
  coordinates: number[];

  @IsObject()
  address: {
    street: string;
    city: string;
  };

  @IsArray()
  garden_img: string[];

  @IsString()
  garden_img_alt: string;

  // Assuming that the 'user' field should be optional
  @IsOptional()
  @IsNumber()
  user_id?: number; // Assuming that 'user' is a foreign key referring to the User entity
}
