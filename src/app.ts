import express from 'express';

import CarsRouter from './router/carRouter';

const app = express();

app.use('/cars', CarsRouter);

export default app;
