import { PartialType } from '@nestjs/swagger';
import { CreateTrasactionDetailDto } from './create-trasaction-detail.dto';

export class UpdateTrasactionDetailDto extends PartialType(CreateTrasactionDetailDto) {}
