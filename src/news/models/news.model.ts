import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class NewsCommonDto {
  @Field(() => String)
  Title: string;

  @Field(() => String)
  Link: string;
}

@ObjectType()
export class NewsNoticeModel extends NewsCommonDto {
  @Field(() => String)
  Date: string;

  @Field(() => String)
  Type: string;
}

@ObjectType()
export class NewsEventModel extends NewsCommonDto {
  @Field(() => String)
  Thumbnail: string;

  @Field(() => String)
  StartDate: string;

  @Field(() => String)
  EndDate: string;

  @Field(() => String)
  RewardDate: string;
}
