import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TransactionDetailsService } from './transaction-details.service';
import { CreateTransactionDetailDto } from './dto/create-transaction-detail.dto';
import { UpdateTransactionDetailDto } from './dto/update-transaction-detail.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('transactions/:idTransaction/trasaction-details')
@ApiTags("transactions/:idTransaction/trasaction-details")
export class TransactionDetailsController {
  constructor(private readonly transactionDetailsService: TransactionDetailsService) {}

  @Post()
  create(@Param('idTransaction') idTransaction: string, @Body() createTrasactionDetailDto: CreateTransactionDetailDto) {
    return this.transactionDetailsService.create(createTrasactionDetailDto);
  }

  @Get()
  findAll(@Param('idTransaction') idTransaction: string ) {
    return this.transactionDetailsService.findAll(+idTransaction);
  }

  @Get(':id')
  findOne(@Param('idTransaction') idTransaction: string, @Param('id') id: string) {
    return this.transactionDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('idTransaction') idTransaction: string, @Param('id') id: string, @Body() updateTrasactionDetailDto: UpdateTransactionDetailDto) {
    return this.transactionDetailsService.update(+id, updateTrasactionDetailDto);
  }

  @Delete(':id')
  remove(@Param('idTransaction') idTransaction: string, @Param('id') id: string) {
    return this.transactionDetailsService.remove(+id);
  }
}
