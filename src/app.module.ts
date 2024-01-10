import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { GardensModule } from './gardens(graphql)/gardens.module';
import { GardensWebSocketsModule } from './gardens_web-sockets/gardens_web-sockets.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5433,
      password: process.env.POSTGRES_PASSWORD || '8114',
      username: process.env.POSTGRES_USER || 'postgres',
      entities: [User],
      synchronize: true,
      logging: true,
    }),
    UserModule,
    GardensModule,
    GardensWebSocketsModule,
  ],
  controllers: [AppController],
  providers: [AppService ,],
})
export class AppModule {}


