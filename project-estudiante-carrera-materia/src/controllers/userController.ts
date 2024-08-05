import { Request, Response } from 'express';
import { container } from 'tsyringe';
import UserService from '../services/userService';

export default class UserController{
    static async getAllUsers(_:Request, res: Response) {
        const userService = container.resolve(UserService);
        const users = await userService.getAllUsers();
        res.json(users);
    }

    static async getUserById(req:Request, res: Response){
        const userService = container.resolve(UserService);
        const user = await userService.getUserById(parseInt(req.params.id));
        res.json(user);
    }

    static async createUser(req:Request, res:Response){
        const userService = container.resolve(UserService);
        const user = await userService.createUser(req.body);
        res.status(201).json(user); 
    }

    static async updateUser(req:Request, res:Response){
        const userService = container.resolve(UserService);
        const user = await userService.updateUser(req.body);
        res.status(201).json(user);
    }

    static async deleteUser(req:Request, res:Response){
        const userService = container.resolve(UserService);
        const user = await userService.deleteUser(parseInt(req.params.id));
        res.status(200).json(user);
    }
}