import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { NewsNoticeDto } from './dtos/news.dto';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class NewsService {
  constructor(private readonly httpService: HttpService) {}

  async getNoticeList(parameters?: NewsNoticeDto) {
    const result = await firstValueFrom(
      this.httpService.get('/notices', {
        params: parameters,
      }),
    );
    return result.data;
  }

  async getEventList() {
    const result = await firstValueFrom(this.httpService.get('/events'));
    return result.data;
  }
}
