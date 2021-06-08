import User from '../models/User';

export interface IUserCreate {
  name: string;
  address: string;
  dob: Date;
  description: string;
}
export interface IUserDelete {
  id: number;
}

export interface IUserUpdate {
  id: number;
  address: string;
  dob: Date;
  description: string;
  name: string;
}

export default interface IUsersRepository {
  create(user: IUserCreate): Promise<User>;
  find(): Promise<User[]>;
  delete(user: IUserDelete): Promise<void>;
  update(user: IUserUpdate): Promise<User | null>;
}
