import { sequelize } from '@shared/infra/sequelize';
import { DataTypes, Model } from 'sequelize';



type UserAttributes = {
  id?: number;
  name: string;
  dob: Date;
  description: string;
  address: string;
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

  public address!: string;
}
 User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dob: {
      type: DataTypes.DATE,
    },
    description: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { tableName: 'users', sequelize }
); 
export default User;
