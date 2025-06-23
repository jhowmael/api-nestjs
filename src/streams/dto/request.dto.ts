import { ApiProperty } from '@nestjs/swagger';

export class CreateStreamDto {
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  description?: string;

  @ApiProperty()
  video_url: string;

  @ApiProperty()
  user_id: number;
}
