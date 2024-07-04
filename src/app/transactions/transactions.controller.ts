import { Controller, Get, Post, Body, Patch, Param, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductsCardsService } from '../products_cards/products_cards.service';
import { TransactionDetailsService } from './transaction-details/transaction-details.service';
import { Transaction } from './entities/transaction.entity';
import { TransactionDetail } from './transaction-details/entities/transaction-detail.entity';

@Controller('transactions')
@ApiTags("transactions")
export class TransactionsController {
  constructor(
    private readonly transactionsService: TransactionsService,
    private readonly productsCardsService: ProductsCardsService,
    private readonly transactionDetailsService: TransactionDetailsService,

  ) { }

  @Post()
  @ApiOperation({ description: "Servicio para obtener lista de trasacciones" })
  @ApiResponse({ status: 201, description: 'The record has been successfully created.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createTransactionDto: CreateTransactionDto) {

    const productCardSend = await this.productsCardsService.findOne(createTransactionDto.product_cards_id_sender);
    if (createTransactionDto.amount < 1) {
      throw new HttpException('Error : Transferencia debe ser mayor a 0', HttpStatus.CONFLICT);
    }

    if (productCardSend.amount < 1) {
      throw new HttpException('Error : Cuenta sin fondos', HttpStatus.CONFLICT);
    }

    if (+productCardSend.amount < createTransactionDto.amount) {
      throw new HttpException('Error : Transaccion mayor que fondos en la cuenta', HttpStatus.CONFLICT);
    }
    const productCardReciver = await this.productsCardsService.findOne(createTransactionDto.product_cards_id_reciver);
    const createdTransaction = await this.transactionsService.create(createTransactionDto)

    if (createdTransaction) {
      const degreeAmount = await this.transaction({
        "transanction_id": createdTransaction.raw['insertId'],
        "products_cards_id": createTransactionDto.product_cards_id_sender,
        "type": "cargo",
        "amount": +createTransactionDto.amount,
        "intial_amount": +productCardSend.amount
      })
      const agreeAmount = await this.transaction({
        "transanction_id": createdTransaction.raw['insertId'],
        "products_cards_id": createTransactionDto?.product_cards_id_reciver,
        "type": "abono",
        "amount": +createTransactionDto?.amount,
        "intial_amount": +productCardReciver?.amount
      })
      console.log("degreeAmount", degreeAmount)
      console.log("degreeAagreeAmountmount", agreeAmount)
    }
    return createdTransaction;
  }

  @Get()
  findAll() {
    return this.transactionsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.transactionsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTransactionDto: UpdateTransactionDto) {
    return this.transactionsService.update(+id, updateTransactionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.transactionsService.remove(+id);
  }

  private async transaction(transactionData) {
    const transactionDetails = await this.transactionDetailsService.create({
      "transanction_id": transactionData.transanction_id,
      "products_cards_id": transactionData.products_cards_id,
      "type": transactionData.type,
      "amount": transactionData.amount,
      "active": "yes"
    });
    let finalAmount = 0;
    if (transactionData.type == "cargo") {
      finalAmount = parseInt(transactionData.intial_amount) - parseInt(transactionData.amount)
    } else {
      finalAmount = parseInt(transactionData.intial_amount) + parseInt(transactionData.amount)
    }
    const productCardUpdate = await this.productsCardsService.update(transactionData.products_cards_id, { amount: finalAmount })
    return { transactionDetails, productCardUpdate }

  }
}
