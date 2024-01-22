import { InputType, Field, Float, PartialType } from '@nestjs/graphql';
import { GardenerInput } from './inputs/ gardener.input';
import { ContactPersonInput } from './contact-person.input';
import { TreatmentInput } from './inputs/treatment.input';
import { AddressInput } from './inputs/ address.input';


@InputType()
export class CreateGardenInput {
    @Field({ nullable: true })
    id?: number;

    @Field()
    name: string;

    // @Field()
    // description: string;

    // @Field(() => ContactPersonInput)
    // contactPerson: ContactPersonInput;

    // @Field(() => GardenerInput)
    // gardener: GardenerInput;

    // @Field()
    // parkSize: number;

    // @Field()
    // vegetation: string;

    // @Field()
    // type: string;

    // @Field(() => TreatmentInput)
    // treatment: TreatmentInput;

    // @Field(() => [Float])
    // coordinates: number[];

    // @Field(() => AddressInput)
    // address: AddressInput;

    // @Field(() => [String])
    // gardenImages: string[];

    // @Field()
    // gardenImagesAlt: string;
}

