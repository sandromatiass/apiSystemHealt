import { IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  cpf: string;
  @IsString()
  cnpj: string;
  @IsString()
  email: string;
  @IsString()
  phone: string;
  @IsString()
  matricula: string;
  @IsString()
  name: string;
  @IsString()
  password: string;
}