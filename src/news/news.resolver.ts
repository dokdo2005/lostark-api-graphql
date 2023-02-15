import { Args, Query, Resolver } from '@nestjs/graphql';
import { NewsService } from './news.service';
import { NewsEventDto, NewsNoticeDto } from './news.dto';
import { NewsEventModel, NewsNoticeModel } from './news.model';

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
  async eventList(
    @Args('parameters', { nullable: true }) parameters?: NewsEventDto,
  ) {
    return await this.newsService.getEventList(parameters);
  }
}
