import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from "class-validator"


export class CreateTransactionDetailDto {


    @IsNotEmpty()
    @IsNumber()
    @IsDefined()
    @ApiProperty({
        example: "1",
        description: "id de transaccion",
    })
    transanction_id: number;


    @IsNotEmpty()
    @IsNumber()
    @IsDefined()
    @ApiProperty({
        example: "2",
        description: "id cuenta-tarjeta",
    })
    products_cards_id: number;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "abono|cargo",
        description: "Tipo de accion",
    })
    type: string;



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