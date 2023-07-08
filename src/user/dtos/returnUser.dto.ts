import { UserEntity } from "../entities/user.entity";

export class ReturnUserDto {
  id: number;
  cnpj: string;
  cpf: string;
  email: string;
  phone: string;
  matricula: string;
  name: string;
  
  constructor(useEntity: UserEntity){
   this.id = useEntity.id;
   this.cnpj = useEntity.cnpj;
   this.cpf = useEntity.cpf;
   this.email = useEntity.email;
   this.phone = useEntity.phone;
   this.matricula = useEntity.matricula;
   this.name = useEntity.name;
  }
  
}