import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { NewsNoticeType } from './news.constants';

@InputType()
export class NewsNoticeDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  searchText?: string;

  @Field({ nullable: true })
  @IsEnum(NewsNoticeType)
  @IsOptional()
  type?: string;
}
