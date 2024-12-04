import {  IsBoolean, IsString } from "class-validator"

export class CreateGyerekDto {
    @IsString()
    nev: string;
  
    @IsString()
    cim: string;
  
    @IsBoolean()
    jovolte: boolean;
  
}
