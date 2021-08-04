import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserFriend } from './user-friend.entity';

@ObjectType()
@Entity()
export class UserPerson extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field({ nullable: false })
  @Column({ nullable: false, unique: true })
  email: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  password: string;

  @Field({ nullable: false })
  @Column({ nullable: false })
  isActive: boolean;

  @Field(() => [UserFriend])
  @OneToMany(() => UserFriend, (userFriend) => userFriend.friend)
  friends: UserFriend[];
}
