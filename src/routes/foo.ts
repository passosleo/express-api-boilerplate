import express from 'express';
import { FooController } from '../controllers/foo';

const router = express.Router();

router.get('/foo', FooController.foo);

export default router;
