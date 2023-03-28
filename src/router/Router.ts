import { Router } from 'express';
import CarController from '../Controllers/CarsController';
import MotorcycleController from '../Controllers/MotorCyclesController';

const routes = Router();

routes.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routes.get(
  '/cars',
  (req, res, next) => new CarController(req, res, next).getAllid(),
);

routes.get(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getbyId(),
);

routes.put(
  '/cars/:id',
  (req, res, next) => new CarController(req, res, next).getUpId(),
);

// Criando a parte de Motorcycles

routes.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routes.get(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).getAllid(),
);

routes.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getbyId(),
);

export default routes;