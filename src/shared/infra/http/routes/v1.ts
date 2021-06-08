import usersRouter from '@modules/raks/infra/http/routes/v1/users.routes';
import { Router } from 'express';


const routes = Router();
routes.use('/users', usersRouter);

export default routes;
