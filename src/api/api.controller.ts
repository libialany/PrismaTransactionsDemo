/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateTweetDto } from 'src/modules/dto/create-tweet.dto';
import { TweetsService } from 'src/modules/tweets/tweets.service';

@Controller('api')
export class ApiController {
  constructor(private readonly tweetsService: TweetsService) {}

  @Post(`tweet`)
  async createTweet(@Body() data: CreateTweetDto) {
    return this.tweetsService.createTweet(data)
  }

  @Get('tweets')
  getTweets() {
    return this.tweetsService.getTweets();
  }
}