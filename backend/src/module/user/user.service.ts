import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import argon2 from 'argon2';
import { ILogin, IServiceResult } from '../../@types/common';
import { ServiceErrorCode } from '../../constants/service-error';
import { UserPerson } from '../../entity/user/user.entity';
import { ServiceError } from '../../utility/custom-error/service-error';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserPerson)
    private userRepository: Repository<UserPerson>,
  ) {}

  async createUser({
    email,
    password,
  }: ILogin): Promise<IServiceResult<UserPerson, ServiceError>> {
    try {
      const user = new UserPerson();
      user.email = email;
      user.password = await argon2.hash(password);
      const userResult = await this.userRepository.save(user);

      return {
        data: userResult,
        error: null,
      };
    } catch (e) {
      console.error('createUser', e);
      return {
        data: null,
        error: new ServiceError(ServiceErrorCode.DUPLICATE_FIELD, 'email'),
      };
    }
  }

  findById(userId: string): Promise<UserPerson> {
    return this.userRepository.findOne(userId);
  }

  findByEmail(email: string): Promise<UserPerson> {
    return this.userRepository.findOne({ email });
  }
}
