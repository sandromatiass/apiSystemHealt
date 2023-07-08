import { IsString } from "class-validator"

export class LoginDto {
  @IsString()
  cnpj: string;

  @IsString()
  password: string;
}