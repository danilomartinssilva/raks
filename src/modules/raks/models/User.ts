import { Model } from 'sequelize';

type UserAttributes = {
  id?: number;
  name: string;
  dob: Date;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
};

class User extends Model<UserAttributes> implements UserAttributes {
  public id!: number;

  public name!: string;

  public dob!: Date;

  public description!: string;

  public createdAt!: Date;

  public updatedAt!: Date;
}
export default User;
