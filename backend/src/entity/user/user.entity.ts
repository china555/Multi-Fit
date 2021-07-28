import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserFriend } from './user-friend.entity';

@Entity()
export class UserPerson extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false, unique: true })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  isActive: boolean;

  @OneToMany(() => UserFriend, (userFriend) => userFriend.friend)
  friends: UserPerson[];
}
