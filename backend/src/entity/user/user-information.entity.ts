import { SEX } from 'src/constants/common';
import { transformEnumValueToArray } from 'src/utility/transform-enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { UserAddress } from './user-address.entity';
import { User } from './user.entity';

@Entity()
@Unique('unique_user_info', ['displayName'])
export class UserInformation extends UserAddress {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => User, (user) => user.id, { cascade: true })
  @JoinColumn()
  user: number;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @Column({ nullable: false })
  displayName: string;

  @Column({ default: null })
  weight: number;

  @Column({ default: null })
  height: number;

  @Column('simple-array', {
    nullable: true,
    default: [],
  })
  connitalDiseases: string[];

  @Column('simple-enum', { enum: transformEnumValueToArray(SEX) })
  sex: SEX;

  @Column('date')
  birthDate: Date;
}
