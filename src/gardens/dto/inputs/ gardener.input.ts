// gardener.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class GardenerInput {
  @Field()
  name: string;

  @Field()
  phone: string;

  @Field()
  rating: number;

  @Field()
  gardnerImage: string;
}
