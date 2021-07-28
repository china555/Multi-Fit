import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserPerson } from './user.entity';

@Entity()
export class UserFriend {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserPerson, (user) => user.id)
  @JoinColumn()
  user: UserPerson;

  @OneToOne(() => UserPerson, (user) => user.id)
  @JoinColumn()
  friend: UserPerson;
}
