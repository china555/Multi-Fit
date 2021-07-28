import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class UserInformation {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToMany(() => User, (user) => user.id)
  userId: number;
}
