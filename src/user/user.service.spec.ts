// user.service.spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';  // הוספת הייבוא הנדרש

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
const user =  {
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
describe('UserService', () => {
  let service: UserService;
  let jwtService: JwtService; // שינוי של JWjwtService ל־JwtService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: Repository,
        },
        {
          provide: JwtService,
          useValue: 'JWjwtService',
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    jwtService = module.get<JwtService>(JwtService); // הוספת אימות JwtService
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of users', async () => {
    const users: ExtendedUser[] = [ user
     ,
    ];
    jest.spyOn(service.userRepository, 'find').mockImplementation(() => users as unknown as Promise<ExtendedUser[]>);
    expect(await service.findAllUser()).toEqual(users);
  });

  it('should return a single user', async () => {
    jest.spyOn(service.userRepository, 'findOneBy').mockImplementation(() => user as unknown as Promise<ExtendedUser>);
    expect(await service.viewUser(1)).toEqual(user);
  });
});
