import { ArgsType, Field } from '@nestjs/graphql';
import { IsEmail, MinLength } from 'class-validator';
import { ILogin } from 'src/@types/common';

@ArgsType()
export class UserArgsInput implements ILogin {
  @Field({ nullable: false })
  @IsEmail()
  email: string;

  @Field({ nullable: false })
  @MinLength(8)
  password: string;
}
