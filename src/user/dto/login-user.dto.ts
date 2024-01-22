
import {
    IsAlphanumeric,
    IsEmail,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsString,
    Matches,
    MinLength,
} from 'class-validator';

export const validationMessages = {
    isEmail: 'Please provide a valid email address.',
  };

const passwordRegEx =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class LoginUserDto {
   
    @IsNotEmpty()
    id: number;


    @IsNotEmpty()
    @IsEmail({}, { message: validationMessages.isEmail })
    email: string;

    @IsNotEmpty()
    // @Matches(passwordRegEx, {
    //     message: `Password must contain Minimum 8 and maximum 20 characters, 
    //   at least one uppercase letter, 
    //   one lowercase letter, 
    //   one number and 
    //   one special character`,
    // })
    password: string;
}

