import express from 'express';
import { BarController } from '../controllers/bar';

const router = express.Router();

router.get('/bar', BarController.bar);

export default router;
