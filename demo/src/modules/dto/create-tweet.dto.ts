import { User } from '@prisma/client';
import { IsNotEmpty } from 'class-validator';
export class CreateTweetDto {
  @IsNotEmpty()
  updatedAt: Date;
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  user: User;
}
