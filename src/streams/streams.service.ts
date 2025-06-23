import { Injectable } from '@nestjs/common';
import { CreateStreamDto } from './dto/request.dto';

@Injectable()
export class StreamsService {
  create(createStreamDto: CreateStreamDto) {
    return {
      message: 'Stream criada com sucesso',
      data: createStreamDto,
    };
  }

  findAll() {
    return [{ id: 1, title: 'Exemplo de stream' }];
  }
}
