import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    HttpModule.register({
      headers: {
        Authorization: `bearer ${process.env.LOSTARK_API_KEY}`,
      },
    }),
    NewsModule,
  ],
})
export class AppModule {}
