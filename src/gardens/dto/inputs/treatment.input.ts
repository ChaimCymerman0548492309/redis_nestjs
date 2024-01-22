// treatment.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class TreatmentInput {
  @Field()
  grassTrimming: boolean;

  @Field()
  treePruning: boolean;

  @Field()
  pestControl: boolean;
}
