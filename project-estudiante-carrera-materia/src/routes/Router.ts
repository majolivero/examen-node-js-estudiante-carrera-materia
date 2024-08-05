import { Router } from 'express';
import { userRouter, subjectRouter, careerRouter } from './';

const router = Router();

router.use('/users',userRouter);
router.use('/subjects', subjectRouter);
router.use('/careers', careerRouter);

export default router;