
import { ApiProperty } from "@nestjs/swagger";
import { IsDefined, IsNotEmpty, IsNumber, IsString, isDefined } from "class-validator"


export class CreateAccountDto {

    @IsNotEmpty()
    @IsNumber()
    @IsDefined()
    @ApiProperty({
        example: "1",
        description: "id cliente",
    })
    client_id: number;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "8829773-28777",
        description: "Numero de cuenta",
    })
    number: string;

    @IsNotEmpty()
    @IsString()
    @IsDefined()
    @ApiProperty({
        example: "yes",
        description: "status",
    })
    active: string;
    
}
