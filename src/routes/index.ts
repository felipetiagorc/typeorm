import { Router } from 'express';
import cursoRouter from './curso.routes';

const routes = Router();

routes.use('/curso', cursoRouter);

export default routes;
