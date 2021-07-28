import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ILogin } from 'src/@types/common';
import { UserPerson } from 'src/entity/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(UserPerson)
    private userRepository: Repository<UserPerson>,
  ) {}
}
