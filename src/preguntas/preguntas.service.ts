import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';
import { AxiosResponse } from 'axios';

@Injectable()
export class PreguntasService {
    constructor(private readonly httpService: HttpService) { }

    private data(url: string, token: string, body: any): Record<string, any> {
        return {
            url: url,
            headers: {
                Authorization: `Bearer ${token}`,
            },
            body: body,
        };
    }


    //preguntas by optionSelected
    async getPreguntas(option: string, token: string): Promise<any> {
        const url: string = `http://5.189.132.180:8090/v1/api/QUESTONS/filter?andOr=AND&page=1&itemsPerPage=100`
        const body: any = [{
            columnName: "QUEST_EVENT",
            columnCondition: 1,
            columnValue: option
        }]
        const data = this.data(url, token, body)

        try {
            const preguntas: AxiosResponse<any> = await this.httpService.axiosRef.post(data.url, data.body, { headers: data.headers })
            return preguntas.data
        } catch (err) {
            throw new NotFoundException(`Error: ${err}`);
        }
    }


    //tipos
    async getTipos(option: string, token: string): Promise<any> {

        if (option == "incidencia") {
            const url: string = `http://5.189.132.180:8090/v1/api/TIPO_INCIDENCIAS?page=1&itemsPerPage=100`
            const data = this.data(url, token, null)
            try {
                const tipos: AxiosResponse<any> = await this.httpService.axiosRef.get(data.url, { headers: data.headers })
                return tipos.data
            } catch (err) {
                throw new NotFoundException(`Error: ${err}`);
            }
        }
    }



    //post respuestas
    async respuestas(token: string, update: any): Promise<any> {
        const actualDate = new Date().getDate() + "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()
        const url: string = `http://5.189.132.180:8090/v1/api/INCIDENCIAS`
        const body: any = {
            inciD_CODIGO: `${Math.floor(Math.random() * 9) + 1}-${Math.floor(Math.random() * 99) + 1}`,
            inciD_TINCID_ID: update[0],
            inciD_DESC: update[2],
            INCID_FECHA_INCID: actualDate
        }

        const data = this.data(url, token, body)

        try {
            const updateDone: AxiosResponse<any> = await this.httpService.axiosRef.post(data.url, data.body, { headers: data.headers })
            return updateDone.data
        } catch (err) {
            throw new NotFoundException(`Error: ${err}`);
        }
    }


    //conseguir id
    async idOpt(token: string): Promise<any> {

        const url: string = `http://5.189.132.180:8090/v1/api/INCIDENCIAS?page=1&itemsPerPage=100`
        const data = this.data(url, token, null)
        try {
            const tipos: AxiosResponse<any> = await this.httpService.axiosRef.get(data.url, { headers: data.headers })
            return tipos.data
        } catch (err) {
            throw new NotFoundException(`Error: ${err}`);
        }

    }


    async inciAnimales(token: string, ids: any): Promise<any> {

        const url: string = `http://5.189.132.180:8090/v1/api/INCIDENCIAS_ANIMALES`
        const body: any = {
            incaniM_ID: (Math.floor(Math.random() * 9999) + 1),
            incaniM_INCID_ID: ids.incId,
            incaniM_ANIM_ID: ids.aniId
        }

        const data = this.data(url, token, body)
        console.log(data)
        try {
            const updateDone: AxiosResponse<any> = await this.httpService.axiosRef.post(data.url, data.body, { headers: data.headers })
            return updateDone.data
        } catch (err) {
            throw new NotFoundException(`Error: ${err}`);
        }
    }
}
