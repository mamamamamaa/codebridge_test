import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class Dog extends Model {
  @Column({ unique: true, type: DataType.STRING })
  name: string;

  @Column(DataType.STRING)
  color: string;

  @Column({ type: DataType.FLOAT, validate: { min: 0 } })
  tail_length: number;

  @Column({ type: DataType.FLOAT, validate: { min: 0 } })
  weight: number;
}
