import { Controller, Get, Param, Request } from '@nestjs/common';
import { JaulasService } from './jaulas.service';

@Controller('jaulas')
export class JaulasController {
    constructor(private readonly jaulasService: JaulasService) { }

    //get jaulas
    @Get()
    async getJaulas(@Request() headToken: any): Promise<any> {

        const token: string = headToken.headers.tokenapi
        return await this.jaulasService.getJaulas(token)
    }


    //get jaula by id
    @Get(":id")
    async getJaula(@Request() headToken: any, @Param("id") id: string): Promise<any> {

        const token: string = headToken.headers.tokenapi
        return await this.jaulasService.getJaula(id, token)
    }
}
