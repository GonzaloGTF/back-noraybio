import { HttpService } from '@nestjs/axios';
import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TokensService {
    constructor(private readonly httpService: HttpService) { }

    //generate token speech-text
    async speechToken(): Promise<any> {
        const speechKey = process.env.SPEECH_KEY;
        const speechRegion = process.env.SPEECH_REGION;

        const data = {
            'Ocp-Apim-Subscription-Key': speechKey,
            'Content-Type': 'application/x-www-form-urlencoded',
        };
        try {
            const tokenResponse: any = await this.httpService.axiosRef.post(`https://${speechRegion}.api.cognitive.microsoft.com/sts/v1.0/issueToken`, null, { headers: data })
            return { token: tokenResponse.data, region: speechRegion };
        } catch (err) {
            throw new NotFoundException(`Speech service not found: ${err}`);
        }
    }

    //generate api token
    async apiToken(): Promise<any> {
        const username = process.env.user;
        const password = process.env.pass;

        const data = {
            username: username,
            password: password,
        };
        try {
            const tokenUser: any = await this.httpService.axiosRef.post(`http://5.189.132.180:8090/v1/api/token`, data)
            return tokenUser.data.document
        } catch (err) {
            throw new NotFoundException(`Error: ${err}`);
        }
    }
}
