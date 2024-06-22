import { Module } from '@nestjs/common';
import { TrasactionDetailsService } from './trasaction-details.service';
import { TrasactionDetailsController } from './trasaction-details.controller';

@Module({
  controllers: [TrasactionDetailsController],
  providers: [TrasactionDetailsService],
})
export class TrasactionDetailsModule {}
