import { IsEnum, IsInt, IsOptional, IsPositive, Min } from 'class-validator';
import { Type } from 'class-transformer';
import { OrderQueryParam } from '../../../types/dog';

const attributeEnum = ['name', 'color', 'tail_length', 'weight'];
const orderEnum = ['asc', 'desc'];

export class DogQueryParamsDto {
  @IsOptional()
  @IsEnum(attributeEnum, {
    message: `attribute must be one of the following values: ${attributeEnum.join(
      ', ',
    )}`,
  })
  attribute: string;

  @IsOptional()
  @IsEnum(orderEnum, {
    message: `order must be one of the following values: ${orderEnum.join(
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
