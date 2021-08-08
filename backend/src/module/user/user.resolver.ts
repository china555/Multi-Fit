import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserPerson } from 'src/entity/user/user.entity';
import { UserArgsInput } from './user.dto';
import { UserService } from './user.service';

@Resolver(() => UserPerson)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation(() => UserPerson)
  async createUser(@Args() userData: UserArgsInput): Promise<UserPerson> {
    const { data, error } = await this.userService.createUser(userData);
    if (error) throw new Error('error');
    return data;
  }

  @Query(() => UserPerson)
  async getUsers(): Promise<UserPerson> {
    return null;
  }

  @Query(() => String)
  sayHello(): string {
    return 'Hello World!';
  }
}
