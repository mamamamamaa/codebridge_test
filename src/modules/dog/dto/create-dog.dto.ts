import { IsString, Matches, Min } from 'class-validator';
import { COLOR_REGEX } from '../../../consts/dog';

export class CreateDogDto {
  @IsString()
  readonly name: string;

  @Matches(COLOR_REGEX)
  readonly color: string;

  @Min(0)
  readonly tail_length: number;

  @Min(0)
  readonly weight: number;
}
