import User from '@modules/raks/models/User';
import IUsersRepository, { IUserCreate } from '../IUsersRepository';


export default class SequelizeRaksRepository implements IUsersRepository {
  public async create(user: IUserCreate): Promise<User> {
    const addUser = await User.create(user);
    return addUser;
  }
}
