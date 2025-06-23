import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';

import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

import { StreamsModule } from './streams/streams.module';
import { StreamsController } from './streams/streams.controller';
import { StreamsService } from './streams/streams.service';


@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, StreamsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
