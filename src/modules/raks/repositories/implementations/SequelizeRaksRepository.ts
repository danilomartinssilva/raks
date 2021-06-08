import User from '@modules/raks/models/User';
import IUsersRepository, {
  IUserCreate,
  IUserDelete,
  IUserUpdate
} from '../IUsersRepository';


export default class SequelizeRaksRepository implements IUsersRepository {
  public async create(user: IUserCreate): Promise<User> {
    const addUser = await User.create(user);
    return addUser;
  }

  public async find(): Promise<User[]> {
    const users = await User.findAll();
    return users;
  }

  public async update(user: IUserUpdate): Promise<User | null> {
    const upDateUser = await User.findByPk(user.id);
    if (upDateUser) {
      await upDateUser.update(user);
      return upDateUser;
    }
    return null;
  }

  public async delete({ id }: IUserDelete): Promise<void> {
    await User.destroy({
      where: {
        id,
      },
    });
  }
}
