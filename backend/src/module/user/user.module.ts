import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserPerson } from 'src/entity/user/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  providers: [UserService, UserResolver],
  imports: [TypeOrmModule.forFeature([UserPerson])],
  exports: [UserService],
})
export class UserModule {}
