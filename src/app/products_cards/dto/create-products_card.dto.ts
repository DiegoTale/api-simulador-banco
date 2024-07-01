import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from "class-validator"


export class CreateProductsCardDto {


    @IsNotEmpty()
    @IsNumber()
    @IsDefined()
    @ApiProperty({
        example: "1",
        description: "id cliente",
    })
    account_id: number;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "credit",
        description: "credito o debito",
    })
    type: string;


    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "3678987654327654",
        description: "Numero de tarjeta",
    })
    number: string;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "01",
        description: "mes de expiracion",
    })
    expire_month: string;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "2030",
        description: "año de expiracion",
    })
    expire_year: string;


    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "124",
        description: "Numero secreto",
    })
    cvv: string;

    @IsNotEmpty()
    @IsNumber()
    @IsDefined()
    @ApiProperty({
        example: 1000,
        description: "Limite de credito",
    })
    limit: number;

    @IsNotEmpty()
    @IsNumber()
    @IsDefined()
    @ApiProperty({
        example: 1000,
        description: "Monto a trasaccionar",
    })
    amount: number;


    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "yes",
        description: "status",
    })
    active: string;
}
