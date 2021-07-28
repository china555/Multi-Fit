import { UserPerson } from 'src/entity/user/user.entity';

import { MockDbConnection } from '../../../test/db-connection';
import { UserService } from './user.service';

describe('create-user', () => {
  beforeAll(async () => {
    await MockDbConnection.create();
  });

  afterAll(async () => {
    await MockDbConnection.close();
  });

  beforeEach(async () => {
    await MockDbConnection.clear();
  });

  it('creates a user', () => {
    const userService = new UserService(
      MockDbConnection.getRepostory<UserPerson>('user_person'),
    );
    console.log(userService);
  });
});
