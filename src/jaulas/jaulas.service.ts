import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { JaulasDto } from './dto/jaulas.dto/jaulas.dto';

@Injectable()
export class JaulasService {
    constructor(private readonly httpService: HttpService) { }

    private data(token: string): Record<string, string> {
        return {
            Authorization: `Bearer ${token}`,
        };
    }



    //get jaulas
    async getJaulas(token: string): Promise<any> {

        const data = this.data(token)

        try {
            const jaula: AxiosResponse<JaulasDto> = await this.httpService.axiosRef.get(`http://5.189.132.180:8090/v1/api/JAULAS`, { headers: data })
            return jaula.data
        } catch (err) {
            throw new NotFoundException(`Error: ${err}`);
        }
    }



    //get jaula by id
    async getJaula(id: string, token: string): Promise<any> {

        const data = this.data(token)

        try {
            const jaula: AxiosResponse<JaulasDto> = await this.httpService.axiosRef.get(`http://5.189.132.180:8090/v1/api/JAULAS/${id}`, { headers: data })
            return jaula.data
        } catch (err) {
            throw new NotFoundException(`Error: ${err}`);
        }
    }
}
