import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { NewsEventDto, NewsNoticeDto } from './news.dto';
import { filter, firstValueFrom } from 'rxjs';

@Injectable()
export class NewsService {
  constructor(private readonly httpService: HttpService) {}

  async getNoticeList(parameters?: NewsNoticeDto) {
    const { limit } = parameters;
    const result = await firstValueFrom(
      this.httpService.get('/notices', {
        params: parameters,
      }),
    );
    return limit ? result.data.slice(0, limit) : result.data;
  }

  async getEventList(parameters?: NewsEventDto) {
    const { limit } = parameters;
    const result = await firstValueFrom(this.httpService.get('/events'));
    return limit ? result.data.slice(0, limit) : result.data;
  }
}
