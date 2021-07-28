import { SEX } from 'src/constants/common';
import { transformEnumValueToArray } from 'src/utility/transform-enum';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserAddress } from './user-address.entity';
import { UserPerson } from './user.entity';

@Entity()
export class UserInformation extends UserAddress {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => UserPerson, (user) => user.id, { cascade: true })
  user: number;

  @Column({ nullable: false })
  firstname: string;

  @Column({ nullable: false })
  lastname: string;

  @Column({ nullable: false, unique: true })
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
