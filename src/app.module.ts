import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ConfigModule } from '@nestjs/config';
import { JaulasModule } from './jaulas/jaulas.module';

import { TokensModule } from './tokens/tokens.module';
import { AnimalesModule } from './animales/animales.module';
import { PreguntasModule } from './preguntas/preguntas.module';

@Module({
  imports: [ConfigModule.forRoot(), JaulasModule, TokensModule, AnimalesModule, PreguntasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
