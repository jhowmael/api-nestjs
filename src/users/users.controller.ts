import { UsersService } from './users.service';
import {
  Controller,
  Get,
  Headers,
  Post,
  Query
} from "@nestjs/common";
import {
  ApiTags,
  ApiCreatedResponse,
  ApiOperation,
  ApiOkResponse,
} from '@nestjs/swagger';
import {
  CreateUserRequestDto
} from "./dto/request.dto";
import {
  CreateUserResponseDto
} from "./dto/response.dto";

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }
  @Post('create-user')
  @ApiOperation({
    summary: "Cria um usuário",
  })
  @ApiOkResponse({
    type: CreateUserResponseDto,
    isArray: false,
  })
  @ApiCreatedResponse({ description: 'Usuário criada com sucesso' })
  async create(@Query() params: CreateUserRequestDto) {
    return await this.usersService.createUser(params);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
