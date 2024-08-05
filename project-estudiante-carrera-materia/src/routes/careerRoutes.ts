import { Router } from 'express';
import CareerController from '../controllers/careerController';

export const careerRouter = Router();

careerRouter.get('/',CareerController.getAllCareers);
careerRouter.get('/:id',CareerController.getCareerById);
careerRouter.get('/user/:userId',CareerController.getCareerByUserId);
careerRouter.post('/',CareerController.createCareer);
careerRouter.put('/',CareerController.updateCareer);
careerRouter.delete('/:id',CareerController.deleteCareer);


