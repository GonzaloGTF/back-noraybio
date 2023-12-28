import { Module } from '@nestjs/common';
import { JaulasController } from './jaulas.controller';
import { JaulasService } from './jaulas.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [JaulasController],
  providers: [JaulasService]
})
export class JaulasModule { }
