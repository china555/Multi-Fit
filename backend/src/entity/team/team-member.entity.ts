import {
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserPerson } from '../user/user.entity';
import { Team } from './team.entity';

@Entity()
export class TeamMember {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => UserPerson, (user) => user.id)
  @JoinColumn()
  member: number;

  @ManyToOne(() => Team, (team) => team.id)
  @JoinColumn()
  team: Team;
}
