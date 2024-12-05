import { IsEnum, Length } from 'class-validator';

export class CreateNinjaDto {
  @Length(2, 10)
  name: string;

  @IsEnum(['stars', 'nunchunks'])
  weapon: 'stars' | 'nunchunks';
}
