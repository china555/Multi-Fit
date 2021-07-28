import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Team } from '../team/team.entity';
import { Match } from './match.entity';

@Entity()
export class MatchTeam {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Match, (match) => match.id)
  @JoinColumn()
  match: Match;

  @Column({ default: false })
  isWinner: boolean;

  @Column({ default: 0 })
  score: number;

  @OneToOne(() => Team, (team) => team.id)
  @JoinColumn()
  team: Team;
}
