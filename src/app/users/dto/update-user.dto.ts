import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    
    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "luis",
        description: "nombre",
    })
    name: string;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "castillo",
        description: "apellido",
    })
    lastname: string;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "1111111",
        description: "password",
    })
    password: string;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "yes",
        description: "status",
    })
    active: string;
}
