import { Module } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Redis } from 'ioredis';

@Injectable()
export class RedisService {
  public client: Redis;

  constructor() {
    this.client = new Redis({
      host: 'redis-12557.c274.us-east-1-3.ec2.cloud.redislabs.com',
      port: 12557,
      password: 'N4iUV3oiaYOVg86Brt0mX2vKSx7lj36b',
    });
    this.client.connect().catch((error) => 
    console.error('Redis connection error:', error));
  }

}
// password: 'N4iUV3oiaYOVg86Brt0mX2vKSx7lj36b',
//     socket: {
//         host: 'redis-12557.c274.us-east-1-3.ec2.cloud.redislabs.com',
//         port: 12557