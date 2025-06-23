import { ApiProperty } from '@nestjs/swagger';

export class CreateUserResponseDto {
    @ApiProperty()
    name!: string;

    @ApiProperty()
    email: string;

    @ApiProperty()
    password!: string;
}

export class findUsersResponseDto {
    @ApiProperty()
    name!: string;

    @ApiProperty()
    email!: string;

    @ApiProperty()
    password!: string;
}

export class findAllUsersResponse {
    @ApiProperty({ type: [findUsersResponseDto] })
    users: findUsersResponseDto[];
}