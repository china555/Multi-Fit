import { MATCH_MODE } from 'src/constants/common';
import { transformEnumValueToArray } from 'src/utility/transform-enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ExercisePose } from '../exercise/exercise-pose.entity';
import { MatchTeam } from './match-team.entity';

@Entity()
export class Match {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => ExercisePose, (exercise) => exercise.id)
  @JoinColumn()
  exercise: ExercisePose;

  @Column('simple-enum', { enum: transformEnumValueToArray(MATCH_MODE) })
  mode: MATCH_MODE;

  @OneToMany(() => MatchTeam, (match) => match.match)
  matchTeams: MatchTeam[];
}
