import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsResolver } from './news.resolver';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    HttpModule.registerAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        headers: {
          Authorization: `bearer ${configService.get('LOSTARK_API_KEY')}`,
        },
        baseURL: 'https://developer-lostark.game.onstove.com/news/',
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [NewsService, NewsResolver],
})
export class NewsModule {}
