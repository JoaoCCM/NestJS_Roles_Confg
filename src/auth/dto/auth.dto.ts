import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
// import { ApiProperty } from '@nestjs/swagger';

export class AuthDTO {
    // @ApiProperty()
    @IsNotEmpty()
    @IsString()
    email: string;

    // @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string;
}

export class AuthResponseDTO {
    email: string;
    token: string;
    refresh_token: string;
}