import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RedisService } from './redis/redis.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([User]),
  JwtModule.register({ 
    secret: 'mySuperSecretKey', 
    signOptions: { expiresIn: '24h' },
  }),
],

  controllers: [UserController],
  providers: [UserService ,RedisService],
})
export class UserModule {}

