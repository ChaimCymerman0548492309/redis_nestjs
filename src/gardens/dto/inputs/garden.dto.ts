import { Field, Float, ID, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class GardenType {
    @Field(() => ID)
    readonly id: string;
    
    @Field()
    readonly name: string;
    
    @Field(() => Int)
    readonly parkSize: number;
    
    @Field()
    readonly vegetation: string;
    
    @Field()
    readonly type: string;

    @Field()
    readonly description: string;

    @Field(() => Int)
    readonly rating: number;

    @Field()
    readonly gardenerName: string;

    @Field()
    readonly gardenerPhone: string;

    @Field(() => Int)
    readonly treatment: number;

    @Field(() => [Float])
    readonly coordinates: number[];

    @Field()
    readonly street: string;

    @Field()
    readonly city: string;

    @Field(() => [String])
    readonly gardenImages: string[];

    @Field()
    readonly gardenImagesAlt: string;
}
