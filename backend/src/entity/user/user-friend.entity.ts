import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserPerson } from './user.entity';

@ObjectType()
@Entity()
export class UserFriend {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => [UserPerson])
  @OneToOne(() => UserPerson, (user) => user.id)
  @JoinColumn()
  user: UserPerson;

  @Field(() => [UserPerson])
  @OneToOne(() => UserPerson, (user) => user.id)
  @JoinColumn()
  friend: UserPerson;
}
