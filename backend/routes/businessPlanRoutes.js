import { Router } from 'express';
import { generateBusinessPlan } from '../controllers/businessPlanController.js';
const router = Router();

router.post('/', generateBusinessPlan);

export default router;