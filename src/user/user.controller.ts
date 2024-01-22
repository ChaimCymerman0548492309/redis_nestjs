import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, Header, Headers, HttpCode, UnauthorizedException, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RedisService } from './redis/redis.service';
import { LoginUserDto } from './dto/login-user.dto';
import { CacheTTL } from '@nestjs/cache-manager';
// import { AuthGuard } from 'src/auth/auth.guard';
// import chalk from 'chalk';


@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly redisService: RedisService
  ) { }

  @Get()
  @HttpCode(200)
  @CacheTTL(10)
  @Header('token', 'validTokenValue') // שים לב לערכים המתאימים לך
  async findAll(@Headers() headers: Headers) {
    // const token = headers['authorization'];
    // if (!headers) {
    //   throw new UnauthorizedException('Missing authorization header, please provide a valid token');
    // }

    const cachedUsers = await this.redisService.client.keys('*');

    if (cachedUsers.length > 0) {
      const usersFromRedis = await Promise.all(cachedUsers.map((key) => this.redisService.client.get(key)));
      console.log('Users from Redis:',
      // usersFromRedis ,
      //  usersFromRedis.map((user) => JSON.parse(user))
       );
      return usersFromRedis.map((userString) => JSON.parse(userString));
    } else {
      const usersFromDatabase = await this.userService.findAllUser();
      console.log(('Users from Database:'),
      //  usersFromDatabase
       );

      usersFromDatabase.forEach((user) =>
        this.redisService.client.set('user : ' + user.id.toString(), JSON.stringify(user))
      );

      return usersFromDatabase;
    }
  }


  @Post()
  async create(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    const createdUser = await this.userService.createUser(createUserDto);
    await this.redisService.client.set('user : ' + createdUser.id.toString(), JSON.stringify(createdUser));
    return createdUser;
  }
  @Post('/login')
async loginUser(@Body(new ValidationPipe()) loginUserDto: LoginUserDto) {
  const loggedInUser = await this.userService.login(loginUserDto);
  return loggedInUser;
}


 

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const cachedUser = await this.redisService.client.get('user : ' + id);

    if (cachedUser) {
      console.log('User from Redis:', JSON.parse(cachedUser));
      return JSON.parse(cachedUser);
    } else {
      const userFromDatabase = await this.userService.viewUser(+id);
      await this.redisService.client.set('user : ' + userFromDatabase.id.toString(), JSON.stringify(userFromDatabase));
      console.log('User from Database:', userFromDatabase);
      return userFromDatabase;
    }
  }
  @Patch(':id')
  // @UseGuards(AuthGuard)
  async update(@Param('id') id: string, @Body(new ValidationPipe()) updateUserDto: UpdateUserDto) {
    const updatedUser = await this.userService.updateUser(+id, updateUserDto);
    await this.redisService.client.set('user : ' + updatedUser.id.toString(), JSON.stringify(updatedUser));
    return updatedUser;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.userService.removeUser(+id);
    await this.redisService.client.del('user : ' + id);
    return { message: 'User deleted successfully' };
  }
}
