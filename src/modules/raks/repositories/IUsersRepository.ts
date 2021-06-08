import User from '../models/User';

export interface IUserCreate {
  name: string;

  dob: Date;
  description: string;
}

export default interface IUsersRepository {
  create(user: IUserCreate): Promise<User>;
}
