// contact-person.input.ts
import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ContactPersonInput {
  @Field()
  name: string;

  @Field()
  phoneNumber: string;
}
