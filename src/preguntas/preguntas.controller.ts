import { Body, Controller, Get, Param, Post, Request } from '@nestjs/common';
import { PreguntasService } from './preguntas.service';

@Controller('preguntas')
export class PreguntasController {
    constructor(private readonly preguntasService: PreguntasService) { }

    //get preguntas by optionSelected
    @Get("select/:select")
    async getJaula(@Request() headToken: any, @Param("select") select: string): Promise<any> {

        const option: string = select.toUpperCase()
        const token: string = headToken.headers.tokenapi
        return await this.preguntasService.getPreguntas(option, token)
    }

    //tipos de (select)
    @Get("tipo/:select")
    async getTipos(@Request() headToken: any, @Param("select") select: string): Promise<any> {

        const option: string = select.toUpperCase()
        const token: string = headToken.headers.tokenapi
        return await this.preguntasService.getTipos(select, token)
    }

    //respuestas
    @Post("update/:select")
    async respuestas(@Request() headToken: any, @Body("respuestas") body: any): Promise<any> {

        const token: string = headToken.headers.tokenapi
        return await this.preguntasService.respuestas(token, body)
    }

    @Get("id")
    async idOpt(@Request() headToken: any): Promise<any> {

        const token: string = headToken.headers.tokenapi
        return await this.preguntasService.idOpt(token)
    }


    @Post("animalInc")
    async inciAnimales(@Request() headToken: any, @Body() body: any): Promise<any> {
        console.log(body)
        const token: string = headToken.headers.tokenapi
        return await this.preguntasService.inciAnimales(token, body)
    }
}
