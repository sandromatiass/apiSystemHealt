import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
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
    })
  }
  
  async getUserByIdUsingRelations(userId: number): Promise<UserEntity>{
    return this.userRepository.findOne({
      where: {
        id: userId,
      },
      relations: ['addresses'],
    });
  }

  async getAlluser(): Promise<UserEntity[]>{
    return this.userRepository.find();
  }

  async findUserById(userId: number): Promise<UserEntity>{
    const user = await this.userRepository.findOne({
      where:{
        id: userId,
      }
    });

    if (!user){
      throw new NotFoundException(`UserId: ${userId} Not Found`);
    }
    return user;
  }
}
