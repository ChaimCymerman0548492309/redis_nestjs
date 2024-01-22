import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { LoginResponse } from './interface/interface';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) public readonly userRepository: Repository<User>,
    private jwtService: JwtService // הוספת JwtService כתלות
  ) { }

  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  
  viewUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return this.userRepository.save(user);
  }
 
  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({id});

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  
    const updatedFields: Partial<User> = {};
  
    if (updateUserDto.name !== undefined) {
      updatedFields.name = updateUserDto.name;
    }
  
    if (updateUserDto.isAdmin !== undefined) {
      updatedFields.isAdmin = updateUserDto.isAdmin;
    }
  
    if (updateUserDto.email !== undefined) {
      updatedFields.email = updateUserDto.email;
    }
  
    if (updateUserDto.password !== undefined) {
      updatedFields.password = updateUserDto.password;
    }
  
    if (updateUserDto.userType !== undefined) {
      updatedFields.userType = updateUserDto.userType;
    }
  
    if (updateUserDto.address !== undefined) {
      updatedFields.address = updateUserDto.address;
    }
  
    if (updateUserDto.city !== undefined) {
      updatedFields.city = updateUserDto.city;
    }
  
    if (updateUserDto.paymentMethod !== undefined) {
      updatedFields.paymentMethod = updateUserDto.paymentMethod;
    }
  
    if (updateUserDto.creditCardNumber !== undefined) {
      updatedFields.creditCardNumber = updateUserDto.creditCardNumber;
    }
  
    if (updateUserDto.expirationDate !== undefined) {
      updatedFields.expirationDate = updateUserDto.expirationDate;
    }
  
    if (updateUserDto.cvv !== undefined) {
      updatedFields.cvv = updateUserDto.cvv;
    }
  
    if (updateUserDto.bankAccountNumber !== undefined) {
      updatedFields.bankAccountNumber = updateUserDto.bankAccountNumber;
    }
  
    if (updateUserDto.bankName !== undefined) {
      updatedFields.bankName = updateUserDto.bankName;
    }
  
    if (updateUserDto.accountHolderName !== undefined) {
      updatedFields.accountHolderName = updateUserDto.accountHolderName;
    }
  
    if (updateUserDto.contactPhoneNumber !== undefined) {
      updatedFields.contactPhoneNumber = updateUserDto.contactPhoneNumber;
    }
  
    // Save the updated user to the database
    return this.userRepository.save(user);
  }

  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }

  async login(loginUserDto: LoginUserDto): Promise<LoginResponse> {
    const { id, email, password } = loginUserDto;
    const user = await this.userRepository.findOneBy({ id });
  
    if (!user) {
      throw new UnauthorizedException('User not found');
    }
  
    if (user.password !== password) {
      throw new UnauthorizedException('Invalid password');
    }
  
    const payload = { email: user.email, sub: user.id };
    const access_token = await this.jwtService.signAsync(payload);
    
    return {
      access_token,
      user,
    };
  }

  
}
