import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString } from "class-validator";

export class CreateUserDto {

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
        example: "castillo@castillo.com",
        description: "email",
    })
    email: string;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "1111111111111",
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

