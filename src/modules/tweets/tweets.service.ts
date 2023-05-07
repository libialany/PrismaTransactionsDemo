/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { TweetsRepository } from './tweets.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateTweetDto } from '../dto/create-tweet.dto';
@Injectable()
export class TweetsService {
    constructor(private repository: TweetsRepository,
        private readonly prismaService: PrismaService) { }
    async createTweet(createTweet: CreateTweetDto) {
        const data = await this.prismaService.$transaction(
            async (prismaCtx) => {
                const userCreated = await prismaCtx.user.create({
                    data: {
                        updatedAt: new Date(createTweet.user.updatedAt),
                        username: createTweet.user.username
                    }
                })
                const tweetCreated = await prismaCtx.tweet.create({
                    data: {
                        updatedAt: new Date(createTweet.updatedAt),
                        content: createTweet.content,
                        userId: userCreated.id
                    },
                    include: {
                        user: false
                    },
                })
                return { userCreated, tweetCreated };
            }
        );
        return data;
    }

    async getTweets() {
        const tweets = await this.repository.getTweets({});
        return tweets;
    }
    
    // do other things in the service layer.
}
