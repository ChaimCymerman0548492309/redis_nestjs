// update-user.dto.ts
import { IsString, IsEmail, IsOptional, IsBoolean, IsInt } from 'class-validator';
import { GardenRestApi } from 'src/garden-rest-api/entities/garden-rest-api.entity';
import { OneToOne, PrimaryGeneratedColumn } from 'typeorm';

export class CreateUserDto {
  @PrimaryGeneratedColumn()
  id: number;


  @IsString()
  @IsOptional()
  name?: string;

  @IsBoolean()
  @IsOptional()
  isAdmin?: boolean;

  @IsEmail({}, { message: 'Please provide a valid email address.' })
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  userType?: string;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  paymentMethod?: string;

  @IsString()
  @IsOptional()
  creditCardNumber?: string;

  @IsString()
  @IsOptional()
  expirationDate?: string;

  @IsString()
  @IsOptional()
  cvv?: string;

  @IsString()
  @IsOptional()
  bankAccountNumber?: string;

  @IsString()
  @IsOptional()
  bankName?: string;

  @IsString()
  @IsOptional()
  accountHolderName?: string;

  @IsString()
  @IsOptional()
  contactPhoneNumber?: string;
  
  @OneToOne(() => GardenRestApi, (garden) => garden.user)
  garden: GardenRestApi;
}
