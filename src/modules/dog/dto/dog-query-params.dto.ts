import { IsEnum, IsInt, IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderQueryParam } from '../../../types/dog';
import { ATTRIBUTE_ENUM, ORDER_ENUM } from '../../../consts/dog';

export class DogQueryParamsDto {
  @IsOptional()
  @IsEnum(ATTRIBUTE_ENUM, {
    message: `attribute must be one of the following values: ${ATTRIBUTE_ENUM.join(
      ', ',
    )}`,
  })
  attribute: string;

  @IsOptional()
  @IsEnum(ORDER_ENUM, {
    message: `order must be one of the following values: ${ORDER_ENUM.join(
      ', ',
    )}`,
  })
  order: OrderQueryParam;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Type(() => Number)
  pageNumber: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  @IsPositive()
  @Type(() => Number)
  pageSize: number;
}
