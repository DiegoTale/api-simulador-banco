
import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsString, isDefined } from "class-validator"


export class CreateClientDto {

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
        example: "22935654674",
        description: "telefono",
    })
    phone: string;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "yes",
        description: "status",
    })
    active: string;
}
