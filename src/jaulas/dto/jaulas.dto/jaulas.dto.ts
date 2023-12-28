import { IsInt, IsString, IsOptional, IsDate, MinLength, MaxLength } from 'class-validator';

export class JaulasDto {
    @IsString()
    @MaxLength(2147483647)
    @MinLength(-2147483648)
    JAULA_ID: string;

    @IsInt()
    @IsOptional()
    JAULA_TJAULA_ID: number;

    @IsString()
    @IsOptional()
    TJAULA_DESC: string;

    @IsInt()
    @IsOptional()
    JAULA_SALA_ID: number;

    @IsString()
    @IsOptional()
    SALA_NOMBRE: string;

    @IsInt()
    @IsOptional()
    JAULA_RACK_ID: number;

    @IsString()
    @IsOptional()
    RACK_NOMBRE: string;

    @IsString()
    @IsOptional()
    JAULA_FILA: string;

    @IsString()
    @IsOptional()
    JAULA_COL: string;

    @IsString()
    @IsOptional()
    JAULA_CODIGO: string;

    @MinLength(1)
    @IsString()
    JAULA_FEC_CREACION: string;

    @IsInt()
    @IsOptional()
    JAULA_FINJAUL_ID: number;

    @IsString()
    @IsOptional()
    FINJAUL_DESC: string;

    @IsInt()
    @IsOptional()
    @MaxLength(2147483647)
    @MinLength(-2147483648)
    JAULA_ESPECIE_ID: number;

    @IsString()
    @IsOptional()
    ESP_NOMBRE: string;

    @IsInt()
    @IsOptional()
    JAULA_CEPA_ID: number;

    @IsString()
    @IsOptional()
    CEPA_ACR: string;

    @IsInt()
    @IsOptional()
    JAULA_SEXO_ID: number;

    @IsString()
    @IsOptional()
    SEXO_DESC: string;

    @IsInt()
    @IsOptional()
    JAULA_RESP_ID: number;

    @IsString()
    @IsOptional()
    USU_USER: string;

    @IsInt()
    @IsOptional()
    JAULA_INVEST_ID: number;

    @IsInt()
    @IsOptional()
    JAULA_RESP_PAGO_ID: number;

    @IsInt()
    @IsOptional()
    JAULA_USUBECA_ID: number;

    @IsString()
    @IsOptional()
    USUBECA_NUM: string;

    @IsInt()
    @IsOptional()
    JAULA_PROC_ID: number;

    @IsString()
    @IsOptional()
    PROC_NOMBRE: string;

    @IsString()
    @IsOptional()
    JAULA_FECHA_FIN: string;

    @IsString()
    @IsOptional()
    JAULA_OBS: string;

    @IsInt()
    @IsOptional()
    JAULA_ESTADO: number;

    @IsInt()
    @IsOptional()
    JAULA_CEN_ID: number;

    @IsString()
    @IsOptional()
    CEN_ACR: string;

    @IsInt()
    @IsOptional()
    JAULA_ALTA_USU_ID: number;

    @IsString()
    @IsOptional()
    JAULA_ALTA_FECHA: string;

    @IsInt()
    @IsOptional()
    JAULA_MODIF_USU_ID: number;

    @IsString()
    @IsOptional()
    JAULA_MODIF_FECHA: string;

    @IsString()
    @IsOptional()
    JAULA_CODIGO2: string;

    @IsDate()
    @IsOptional()
    JAULA_ULT_TRANSFERENCIA: Date;

    @IsString()
    @IsOptional()
    JAULA_TR_STUFF_LINEA_ACR: string;

    @IsString()
    @IsOptional()
    JAULA_TR_STUFF_LINEA_NOMBRE: string;

    @IsInt()
    @IsOptional()
    JAULA_PED_ID: number;

    @IsString()
    @IsOptional()
    JAULA_CAGETALKER_COD: string;

    @IsInt()
    @IsOptional()
    JAULA_ENVIO_DVC: number;
}
