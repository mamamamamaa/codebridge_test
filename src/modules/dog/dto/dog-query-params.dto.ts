import { IsEnum, IsInt, IsOptional, IsPositive, Min } from 'class-validator';

export class DogQueryParamsDto {
  @IsOptional()
  @IsEnum(['name', 'color', 'tail_length', 'weight'], {
    message:
      "attribute must be one of the following values: 'name', 'color', 'tail_length' or 'weight'",
  })
  attribute: string;

  @IsOptional()
  @IsEnum(['asc', 'desc'], {
    message: "order must be one of the following values: 'asc' or 'desc'",
  })
  order: 'asc' | 'desc';

  @IsOptional()
  @IsInt()
  @Min(1)
  pageNumber: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @IsPositive()
  pageSize: number;
}
