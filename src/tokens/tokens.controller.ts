import { Controller, Get } from '@nestjs/common';
import { TokensService } from './tokens.service';

@Controller('tokens')
export class TokensController {
    constructor(private readonly tokensService: TokensService) { }

    //speech-text token
    @Get("speech")
    async getSpeechToken(): Promise<any> {
        return await this.tokensService.speechToken()
    }

    //api token
    @Get("api")
    async getUserToken(): Promise<any> {
        return await this.tokensService.apiToken()
    }
}
