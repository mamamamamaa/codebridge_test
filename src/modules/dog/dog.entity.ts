import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Dog extends Model {
  @Column
  name: string;

  @Column
  color: string;

  @Column
  tail_length: number;

  @Column
  weight: number;
}
