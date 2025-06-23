import { Inject, Injectable, BadRequestException } from '@nestjs/common';
import { Kysely } from 'kysely';
import * as bcrypt from 'bcrypt';
import { DATABASE_CONNECTION } from '@/database/database.module';
import {
  CreateUserRequestDto
} from "./dto/request.dto";

import {
  CreateUserResponseDto,
  findAllUsersResponse
} from "./dto/response.dto";


// Defina a interface da tabela users
interface UserTable {
  id?: number;
  name: string;
  email: string;
  password: string;
}

// Defina o schema do banco
interface DatabaseSchema {
  users: UserTable;
}

@Injectable()
export class UsersService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly db: Kysely<DatabaseSchema>,
  ) { }

  async findAll(): Promise<findAllUsersResponse> {
    const users = await this.db
      .selectFrom('users')
      .selectAll()
      .execute();
    return { users };
  }

  async createUser(params: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    const existingUser = await this.db
      .selectFrom('users')
      .selectAll()
      .where('email', '=', params.email)
      .executeTakeFirst();

    if (existingUser) {
      throw new BadRequestException('E-mail já cadastrado');
    }

    if (params.password !== params.confirmPassword) {
      throw new BadRequestException('As senhas não conferem');
    }

    const hashedPassword = await bcrypt.hash(params.password, 10);

    return await this.db
      .withSchema('public')
      .insertInto('users')
      .values({
        name: params.name,
        email: params.email,
        password: hashedPassword,
      })
      .returningAll()
      .executeTakeFirstOrThrow();
  }
}