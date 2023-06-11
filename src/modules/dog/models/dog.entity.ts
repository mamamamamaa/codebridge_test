import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ timestamps: false })
export class Dog extends Model {
  @Column({
    unique: true,
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  color: string;

  @Column({ type: DataType.FLOAT, validate: { min: 0 }, allowNull: false })
  tail_length: number;

  @Column({ type: DataType.FLOAT, validate: { min: 0 }, allowNull: false })
  weight: number;
}
