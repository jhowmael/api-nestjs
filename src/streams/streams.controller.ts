import { Controller, Post, Body, Get } from '@nestjs/common';
import { StreamsService } from './streams.service';
import { CreateStreamDto } from './dto/request.dto';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';

@ApiTags('streams')
@Controller('streams')
export class StreamsController {
  constructor(private readonly streamsService: StreamsService) { }

  @Post()
  @ApiCreatedResponse({ description: 'Stream criada com sucesso' })
  async create(@Body() createStreamDto: CreateStreamDto) {
    return await this.streamsService.create(createStreamDto);
  }

  @Get()
  findAll() {
    return this.streamsService.findAll();
  }
}
