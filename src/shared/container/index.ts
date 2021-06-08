import SequelizeRaksRepository from '@modules/raks/repositories/implementations/SequelizeRaksRepository';
import IUsersRepository from '@modules/raks/repositories/IUsersRepository';
import PinoLogger from '@shared/infra/logger/implementations/PinoLogger';
import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { container } from 'tsyringe';



container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  SequelizeRaksRepository
);

/* container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  TypeormCategoriesRepository
);

container.registerSingleton<IClassificationsRepository>(
  'ClassificationsRepository',
  TypeormClassificationsRepository
); */

container.registerInstance<ILogger>('logger', PinoLogger);
