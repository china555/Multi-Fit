import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserPerson } from '../user/user.entity';
import { TeamMember } from './team-member.entity';

@Entity()
export class Team {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => UserPerson, (user) => user.id)
  @JoinColumn()
  owner: number;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => TeamMember, (member) => member.team)
  teamMembers: TeamMember[];
}
