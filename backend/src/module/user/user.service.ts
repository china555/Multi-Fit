import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  findById(userId: string): Promise<User> {
    return this.userRepository.findOne(userId);
  }

  findByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ email });
  }
}
