import { Table, Column, Model, DataType } from 'sequelize-typescript';
import { COLOR_REGEX } from '../../../consts/dog';
import { HttpException, HttpStatus } from '@nestjs/common';

@Table({ timestamps: false })
export class Dog extends Model {
  @Column({
    unique: true,
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: {
      isColorValid(value: string) {
        if (!COLOR_REGEX.test(value)) {
          throw new HttpException(
            'Invalid color format',
            HttpStatus.BAD_REQUEST,
          );
        }
      },
    },
  })
  color: string;

  @Column({ type: DataType.FLOAT, validate: { min: 0 }, allowNull: false })
  tail_length: number;

  @Column({ type: DataType.FLOAT, validate: { min: 0 }, allowNull: false })
  weight: number;
}
