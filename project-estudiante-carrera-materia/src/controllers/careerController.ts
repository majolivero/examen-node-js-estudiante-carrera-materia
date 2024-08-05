import { Request,Response } from 'express';
import { container } from 'tsyringe';
import CareerService from '../services/careerServices';

export default class CareerController{
    static async getAllCareers(req: Request, res: Response) {
        const careerService = container.resolve(CareerService);
        const careers = await careerService.getAllCareers();
        res.json(careers); 
    }

    static async getCareerById(req: Request, res: Response) {
        const careerService = container.resolve(CareerService);
        const career = await careerService.getCareerById(parseInt(req.params.id));
        res.json(career); 
    }

    static async getCareerByUserId(req: Request, res: Response) {
        const careerService = container.resolve(CareerService);
        const careers = await careerService.getCareerByUserId(parseInt(req.params.userId));
        res.json(careers); 
    }

    static async createCareer(req: Request, res: Response) {
        const careerService = container.resolve(CareerService);
        const career = await careerService.createCareer(req.body);
        res.status(201).json(career); 
    }

    static async updateCareer(req:Request, res:Response){
        const careerService = container.resolve(CareerService);
        const career = await careerService.updateCareer(req.body);
        res.status(201).json(career);
    }

    static async deleteCareer(req:Request, res:Response){
        const careerService = container.resolve(CareerService);
        const career = await careerService.deleteCareer(parseInt(req.params.id));
        res.status(200).json(career);
    }
}