import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExercisePose {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;
}
