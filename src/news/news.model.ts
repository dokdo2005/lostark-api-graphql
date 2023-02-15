import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NewsNoticeModel {
  @Field(() => String)
  Title: string;

  @Field(() => String)
  Date: string;

  @Field(() => String)
  Link: string;

  @Field(() => String)
  Type: string;
}

@ObjectType()
export class NewsEventModel {
  @Field(() => String)
  Title: string;

  @Field(() => String)
  Thumbnail: string;

  @Field(() => String)
  Link: string;

  @Field(() => String)
  StartDate: string;

  @Field(() => String)
  EndDate: string;

  @Field(() => String)
  RewardDate: string;
}
