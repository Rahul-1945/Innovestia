// routes/investment.js
import express from 'express'
const router = express.Router();
import { InvestWant,GetInvest } from '../controllers/Investmentwant';

router.post('/',InvestWant)
router.get('/:startupId', GetInvest);

export default router;