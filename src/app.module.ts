import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NewsModule } from './news/news.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

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
    GraphQLModule.forRoot({
      driver: ApolloDriver,
    }),
    NewsModule,
  ],
})
export class AppModule {}
