import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
    // @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;

    // @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
    
}