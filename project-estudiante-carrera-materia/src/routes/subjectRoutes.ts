import { Router } from 'express';
import SubjectController from '../controllers/subjectController';

export const subjectRouter = Router();

subjectRouter.get('/',SubjectController.getAllSubjects);
subjectRouter.get('/:id',SubjectController.getSubjectById);
subjectRouter.get('/user/:userId',SubjectController.getSubjectByUserId); //Trae materias por id de usuario
subjectRouter.post('/',SubjectController.createSubject);
subjectRouter.put('/',SubjectController.updateSubject);
subjectRouter.delete('/:id',SubjectController.deleteSubject);