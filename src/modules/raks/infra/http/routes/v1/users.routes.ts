import Joi from '@shared/infra/Joi';
import { celebrate, Segments } from 'celebrate';
import { Router } from 'express';
import UsersController from '../../controllers/UsersController';



const userController = new UsersController();
const userRouter = Router();

userRouter.route('/').post(
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      dob: Joi.string().required(),
      description: Joi.string().required(),
      address: Joi.string().required(),
    },
  }),
  userController.create
);
userRouter.route('/:id').put(
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      dob: Joi.string().required(),
      description: Joi.string().required(),
      address: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  userController.update
);
userRouter.route('/:id').delete(
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  userController.remove
);
userRouter.route('/').get(userController.clistreate);

export default userRouter;
