import { Global, Module } from '@nestjs/common';
import { Pool } from 'pg';
import { Kysely, PostgresDialect } from 'kysely';

export const DATABASE_CONNECTION = "DATABASE_CONNECTION";

@Global()
@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      useFactory: () => {
        const pool = new Pool({
          host: 'localhost',
          port: 5432,
          user: 'postgres',
          password: '123123',
          database: 'postgres',
        });

        return new Kysely({
          dialect: new PostgresDialect({
            pool,
          }),
        });
      },
    },
  ],
  exports: [DATABASE_CONNECTION],
})
export class DatabaseModule { }