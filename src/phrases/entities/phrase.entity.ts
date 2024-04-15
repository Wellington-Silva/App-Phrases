import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Phrase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @Column()
  author: string;

  @Column()
  createdAt: string;
}
