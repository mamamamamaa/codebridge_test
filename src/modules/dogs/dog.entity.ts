import { Table, Column, Model, Unique, Min } from 'sequelize-typescript';

@Table
export class Dog extends Model {
  @Column
  @Unique
  name: string;

  @Column
  color: string[];

  @Column
  @Min(0)
  tail_length: number;

  @Column
  @Min(0)
  weight: number;
}
