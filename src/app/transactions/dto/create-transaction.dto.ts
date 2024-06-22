import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString } from "class-validator"


export class CreateTransactionDto {


    @IsNotEmpty()
    @IsNumber()
    @IsDefined()
    @ApiProperty({
        example: "1",
        description: "id cuenta envia",
    })
    product_cards_id_sender: number;


    @IsNotEmpty()
    @IsNumber()
    @IsDefined()
    @ApiProperty({
        example: "2",
        description: "id cuenta recibe",
    })
    product_cards_id_reciver: number;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "Transferencia de prueba",
        description: "descripcion",
    })
    description: string;



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