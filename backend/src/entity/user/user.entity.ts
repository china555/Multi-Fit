import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { UserFriend } from './user-friend.entity';

@Entity()
@Unique('unique_user', ['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({ nullable: false })
  isActive: boolean;

  @OneToMany(() => UserFriend, (userFriend) => userFriend.friend)
  friends: User[];
}
