import { Injectable, Scope } from '@nestjs/common';
import { Redis } from 'ioredis';
import * as chalk from 'chalk';

@Injectable({ scope: Scope.DEFAULT })
export  class RedisService {
  public client: Redis;

  constructor() {
    this.client = new Redis({
      host: 'localhost',
      port: 6379,
    });

    if (!this.client || !this.client.connect) {
      this.client = new Redis();
     this.client.connect();
    }  }

  private connectToRedis(): void {
    this.client
      .connect()
      .then(() => {
        console.log(chalk.blue('Connected to Redis successfully!'));
      })
      .catch((error) => {
        console.error(chalk.red('Redis connection error:'), error);
      });
  }

  // Set a key-value pair with a TTL
  public async setWithTTL(key: string, value: string, ttlSeconds: number): Promise<void> {
    await this.client.set(key, value);
    await this.client.expire(key, ttlSeconds);
  }
}

// Example of using RedisService in another class
import { Headers } from '@nestjs/common';

@Injectable()
export class YourService {
  constructor(private readonly redisService: RedisService) {}

  async yourFunction(userId: string, user: any): Promise<any> {
    const ttlSeconds = 10; // Set your desired TTL value
    const userKey = 'user:' + userId; // Assuming userId is the unique identifier for a user
    const userValue = JSON.stringify(user); // Convert user object to string
    await this.redisService.setWithTTL(userKey, userValue, ttlSeconds);

    // Rest of your function logic
  }
}
