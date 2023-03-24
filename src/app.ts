import express from 'express';
import ErrorHandler from './middlewares/ErrorHandler';

import routes from './router/Router';

const app = express();
app.use(express.json());
app.use(routes);
app.use(ErrorHandler.handle);

export default app;
