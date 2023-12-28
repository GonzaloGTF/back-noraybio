import { Module } from '@nestjs/common';
import { PreguntasController } from './preguntas.controller';
import { PreguntasService } from './preguntas.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [PreguntasController],
  providers: [PreguntasService]
})
export class PreguntasModule { }
