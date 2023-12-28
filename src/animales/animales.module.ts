import { Module } from '@nestjs/common';
import { AnimalesController } from './animales.controller';
import { AnimalesService } from './animales.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [AnimalesController],
  providers: [AnimalesService]
})
export class AnimalesModule { }
