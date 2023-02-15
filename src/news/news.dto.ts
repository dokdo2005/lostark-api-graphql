import { Field, InputType } from '@nestjs/graphql';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { NewsNoticeType } from './news.constants';

@InputType()
export class NewsEventDto {
  @Field({ nullable: true })
  @IsNumber()
  @IsOptional()
  limit?: number;
}

@InputType()
export class NewsNoticeDto extends NewsEventDto {
  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  searchText?: string;

  @Field({ nullable: true })
  @IsEnum(NewsNoticeType)
  @IsOptional()
  type?: string;
}
