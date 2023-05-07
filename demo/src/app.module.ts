import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetsModule } from './modules/tweets/tweets.module';
import { ApiModule } from './api/api.module';

@Module({
  imports: [TweetsModule, ApiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
