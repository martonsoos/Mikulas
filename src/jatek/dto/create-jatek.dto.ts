import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateJatekDto {
  @IsString()
  @IsNotEmpty()
  nev: string;

  @IsString()
  @IsIn(['fa', 'fém', 'műanyag', 'egyéb'])
  anyag: string;

  @IsNumber()
  suly: number;
}
