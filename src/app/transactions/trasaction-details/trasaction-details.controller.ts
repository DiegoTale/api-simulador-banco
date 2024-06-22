import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrasactionDetailsService } from './trasaction-details.service';
import { CreateTrasactionDetailDto } from './dto/create-trasaction-detail.dto';
import { UpdateTrasactionDetailDto } from './dto/update-trasaction-detail.dto';

@Controller('trasaction-details')
export class TrasactionDetailsController {
  constructor(private readonly trasactionDetailsService: TrasactionDetailsService) {}

  @Post()
  create(@Body() createTrasactionDetailDto: CreateTrasactionDetailDto) {
    return this.trasactionDetailsService.create(createTrasactionDetailDto);
  }

  @Get()
  findAll() {
    return this.trasactionDetailsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trasactionDetailsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrasactionDetailDto: UpdateTrasactionDetailDto) {
    return this.trasactionDetailsService.update(+id, updateTrasactionDetailDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trasactionDetailsService.remove(+id);
  }
}
