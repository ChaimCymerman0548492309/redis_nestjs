// address.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AddressInput {
  @Field()
  street: string;

  @Field()
  city: string;
}
