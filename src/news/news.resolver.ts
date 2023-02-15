import { Args, Query, Resolver } from '@nestjs/graphql';
import { NewsService } from './news.service';
import { NewsNoticeDto } from './dtos/news.dto';
import { NewsEventModel, NewsNoticeModel } from './models/news.model';

@Resolver()
export class NewsResolver {
  constructor(private readonly newsService: NewsService) {}

  @Query(() => [NewsNoticeModel])
  async noticeList(
    @Args('parameters', { nullable: true }) parameters?: NewsNoticeDto,
  ) {
    return await this.newsService.getNoticeList(parameters);
  }

  @Query(() => [NewsEventModel])
  async eventList() {
    return await this.newsService.getEventList();
  }
}
