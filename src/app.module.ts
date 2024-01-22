import { Logger, MiddlewareConsumer, Module, NestMiddleware } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
// import { GardensModule } from './gardens/gardens.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { GraphQLModule } from '@nestjs/graphql';
// import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
// import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ConfigModule } from '@nestjs/config';
import { TweetsService } from './tweets/tweets.service';
import { Request, Response, NextFunction } from 'express';
import { GardenRestApiModule } from './garden-rest-api/garden-rest-api.module';
import { GardenRestApi } from './garden-rest-api/entities/garden-rest-api.entity';
@Module({
  imports: [
     // configuration
     ConfigModule.forRoot({isGlobal: true}),

     // caching
    //  CacheModule.registerAsync(RedisOptions),
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5433,
      password: process.env.POSTGRES_PASSWORD || '8114',
      username: process.env.POSTGRES_USER || 'postgres',
      entities: [User, GardenRestApi],
      synchronize: true,
      logging: true,
    }),
    MongooseModule.forRoot('mongodb+srv://ido:tgbyhn67@cluster0.11bdobw.mongodb.net/Project'),
    GardenRestApiModule,

    // graphql + apollo playground configuration
    
    // GraphQLModule.forRoot<ApolloDriverConfig>({
    //   driver: ApolloDriver,
    //   autoSchemaFile:'scema.gql',
    //   playground: true,
    //   plugins: [ApolloServerPluginLandingPageLocalDefault()],
    // }),
    // GardensModule,
    
  ],
  controllers: [AppController],
  providers: [AppService, TweetsService ,],
})


export class AppModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RequestLoggerMiddleware).forRoutes('*');
  }
}


export class RequestLoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger('HTTP');

  use(req: Request, res: Response, next: NextFunction) {
    const start = new Date();
    const { method, originalUrl } = req;
    res.on('finish', () => {
      const end = new Date();
      const duration = end.getTime() - start.getTime();
      const statusCode = res.statusCode;
      const statusMessage = res.statusMessage;

      statusCode >= 400 ?
        this.logger.error(`${method} ${originalUrl} - ${statusCode} - ${duration}ms ${statusMessage}`)
        :
        this.logger.log(`${method} ${originalUrl} - ${duration}ms`);

    });

    next();
  }
}

