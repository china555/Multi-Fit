import { Column } from 'typeorm';

export abstract class UserAddress {
  @Column()
  address: string;

  @Column()
  subDistrict: string;

  @Column()
  district: string;

  @Column()
  province: string;

  @Column()
  zipcode: string;
}
