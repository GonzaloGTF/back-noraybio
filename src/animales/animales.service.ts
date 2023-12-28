import { Injectable, NotFoundException } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { AnimalesDto } from './dto/animales.dto/animales.dto';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AnimalesService {
    constructor(private readonly httpService: HttpService) { }

    //get animales by jaulaId
    async getAnimales(id: string, token: string): Promise<any> {

        const data: Record<string, any> = {
            url: `http://5.189.132.180:8090/v1/api/V_Retobootcamp_Animales/filter?andOr=AND&page=1&itemsPerPage=100`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: [{
                columnName: "JAULA_CODIGO",
                columnCondition: 1,
                columnValue: id
            }]
        }

        try {
            const animales: AxiosResponse<AnimalesDto> = await this.httpService.axiosRef.post(data.url, data.body, { headers: data.headers })
            return animales.data
        } catch (err) {
            throw new NotFoundException(`Error: ${err}`);
        }
    }



    //get incidencias-anim
    async getIncidencias(token: string): Promise<any> {

        const data: Record<string, any> = {
            url: `http://5.189.132.180:8090/v1/api/INCIDENCIAS_ANIMALES?page=1&itemsPerPage=100`,
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }

        try {
            const animales: AxiosResponse<AnimalesDto> = await this.httpService.axiosRef.get(data.url, { headers: data.headers })
            return animales.data
        } catch (err) {
            throw new NotFoundException(`Error: ${err}`);
        }
    }
}
