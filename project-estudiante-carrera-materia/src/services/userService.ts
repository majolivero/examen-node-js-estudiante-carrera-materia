import UserRepository from "../repositories/userRepository"; 
import { injectable, inject } from "tsyringe"; 
import { User } from "../models/user"; 

@injectable() 
export default class UserService { 
  constructor(@inject(UserRepository) private userRepository: UserRepository) {} 

  async getAllUsers() { 
    return await this.userRepository.findAll(); 
  }

  async getUserById(id: number) {  
    return await this.userRepository.findById(id); 
  }

  async createUser(user: User) { 
    return await this.userRepository.create(user); 
  }

  async updateUser(user:User){
    return await this.userRepository.update(user);
  }

  async deleteUser(id:number){
    return await this.userRepository.delete(id);
  }
}

