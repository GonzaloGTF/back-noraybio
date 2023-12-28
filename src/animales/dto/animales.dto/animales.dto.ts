import { IsDate, IsOptional, IsString } from "class-validator";

export class AnimalesDto {

    @IsString()
    @IsOptional()
    ANIM_CODIGO: string;

    @IsString()
    @IsOptional()
    ESP_NOMBRE: string;

    @IsString()
    @IsOptional()
    ESTANIM_NOMBRE: string;

    @IsString()
    @IsOptional()
    SEXO_DESC: string;

    @IsDate()
    @IsOptional()
    ANIM_FECHA_NAC: Date;
}
