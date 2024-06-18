import { PartialType } from '@nestjs/mapped-types';
import { CreateClientDto } from './create-client.dto';
import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateClientDto extends PartialType(CreateClientDto) {
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
