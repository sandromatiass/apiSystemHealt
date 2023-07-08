import { Injectable, NotFoundException } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { UserEntity } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
  
  constructor(
    private readonly userService: UserService
  ) {}
     
//aqui vamos ter que ver como fazer a validação primeiro por cpf, cnpj, matricula no caso do 
//coloborado dps a gente ver o lado do paciente
//colocar os requerimento como unico aqueles de autenticação

  async login(loginDto: LoginDto): Promise<UserEntity>{
    const user: UserEntity | undefined = await this.userService.findUserByCnpj(loginDto.cnpj).catch(() => undefined)

    const isMatch = await compare(loginDto.password, user?.password || '');


    if(!user || !isMatch){
      throw new NotFoundException(`CNPJ or password invalid!`)
    }

    return user;
  }
}
