import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class CreateUserRequestDto {
  @ApiProperty()
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty()
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty()
  @Type(() => String)
  @IsString()
  @IsNotEmpty()
  confirmPassword: string;
}