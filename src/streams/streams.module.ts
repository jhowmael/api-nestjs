import { Module } from '@nestjs/common';
import { StreamsService } from './streams.service';
import { StreamsController } from './streams.controller';

@Module({
  providers: [StreamsService],
  controllers: [StreamsController]
})
export class StreamsModule {}
