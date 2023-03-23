import { Router } from 'express';

const router = Router();

router.post('/', (req, res) => CarsController(req, res).create());

export default router;