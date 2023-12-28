import { Controller, Get, Param, Request } from '@nestjs/common';
import { AnimalesService } from './animales.service';

@Controller('animales')
export class AnimalesController {
    constructor(private readonly animalesService: AnimalesService) { }

    //get animales by jaulaId
    @Get("jaula/:id")
    async getJaula(@Request() headToken: any, @Param("id") id: string): Promise<any> {

        const token: string = headToken.headers.tokenapi
        return await this.animalesService.getAnimales(id, token)
    }


    @Get("incidencias")
    async getIncidencias(@Request() headToken: any): Promise<any> {

        const token: string = headToken.headers.tokenapi
        return await this.animalesService.getIncidencias(token)
    }
}
