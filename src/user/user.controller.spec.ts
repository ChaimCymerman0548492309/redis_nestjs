import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserModule, } from './user.module';
import { DynamicModule } from '@nestjs/common';
import { Type } from '@nestjs/passport';
import { TypeOrmModule, getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';

interface ExtendedUser extends User {
  address: string;
  city: string;
  paymentMethod: string;
  creditCardNumber: string;
  expirationDate: string;
  cvv: string;
  bankAccountNumber: string;
  bankName: string;
  accountHolderName: string;
  contactPhoneNumber: string;
}
const user = {
  id: 1,
  "name": "John Doe",
  "isAdmin": false,
  "email": "john.doe@example.com",
  "password": "hashedPassword",
  "userType": "customer",
  "address": "123 Main St",
  "city": "Anytown",
  "paymentMethod": "Credit Card",
  "creditCardNumber": "1234-5678-9012-3456",
  "expirationDate": "12/25",
  "cvv": "123",
  "bankAccountNumber": "9876543210",
  "bankName": "My Bank",
  "accountHolderName": "John Doe",
  "contactPhoneNumber": "555-1234"
}
describe('UserController', () => {
  let controller: UserController;
  let userService: UserService;
  let userModule: UserModule;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [UserModule, TypeOrmModule.forRoot({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
      })],
       controllers: [UserController],
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: JwtService,
          useValue: 'JWjwtService',
        },]
    }).compile();

    controller = module.get<UserController>(UserController);
    userService = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of users', async () => {
    const users: ExtendedUser[] = [user];
    jest.spyOn(userService, 'findAllUser').mockImplementation(() => users as unknown as Promise<ExtendedUser[]>);
    expect(await controller.findAll({} as Headers)).toEqual(users);
  });


});
