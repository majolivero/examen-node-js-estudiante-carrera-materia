import { Request,Response } from 'express';
import { container } from 'tsyringe';
import SubjectService from '../services/subjectServices';

export default class SubjectController{
    static async getAllSubjects(req: Request, res: Response) {
        const subjectService = container.resolve(SubjectService);
        const subjects = await subjectService.getAllSubjects();
        res.json(subjects); 
    }

    static async getSubjectById(req: Request, res: Response) {
        const subjectService = container.resolve(SubjectService);
        const subject = await subjectService.getSubjectById(parseInt(req.params.id));
        res.json(subject); 
    }

    static async getSubjectByUserId(req: Request, res: Response) {
        const subjectService = container.resolve(SubjectService);
        const subjects = await subjectService.getSubjectByUserId(parseInt(req.params.userId));
        res.json(subjects); 
    }

    static async createSubject(req: Request, res: Response) {
        const subjectService = container.resolve(SubjectService);
        const subject = await subjectService.createSubject(req.body);
        res.status(201).json(subject); 
    }

    static async updateSubject(req:Request, res:Response){
        const subjectService = container.resolve(SubjectService);
        const subject = await subjectService.updateSubject(req.body);
        res.status(201).json(subject);
    }

    static async deleteSubject(req:Request, res:Response){
        const subjectService = container.resolve(SubjectService);
        const subject = await subjectService.deleteSubject(parseInt(req.params.id));
        res.status(200).json(subject);
    }
}