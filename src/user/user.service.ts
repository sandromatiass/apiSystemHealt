import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ){};
  

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const saltOrRouds = 10;
    const passwordHashed = await hash(createUserDto.password, saltOrRouds);

    return this.userRepository.save({
      ...createUserDto,
      typeUser: 1,
      password: passwordHashed,
    });
  };

  async getAlluser(): Promise<UserEntity[]>{
    return this.userRepository.find();
  }
}
