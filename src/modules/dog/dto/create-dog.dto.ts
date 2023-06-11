import { IsString, Matches, Min } from 'class-validator';

export class CreateDogDto {
  @IsString()
  readonly name: string;

  @Matches(/^(?:[a-zA-Z]+(?:&|$))+$/g)
  readonly color: string;

  @Min(0)
  readonly tail_length: number;

  @Min(0)
  readonly weight: number;
}
