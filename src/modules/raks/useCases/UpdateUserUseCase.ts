import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';



interface IRequest {
  name: string;
  dob: Date;
  description: string;
  address: string;
  id: number;
}

@injectable()
export default class UpdateUserUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({
    name,
    dob,
    description,
    address,
    id,
  }: IRequest): Promise<any> {
    const userAdd = this.usersRepository.update({
      id,
      dob,
      description,
      address,
      name,
    });
    return userAdd;
  }
}
