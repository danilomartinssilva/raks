import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';



interface IRequest {
  name: string;
  dob: Date;
  description: string;
  address: string;
}

@injectable()
export default class CreateUserUseCase {
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
  }: IRequest): Promise<any> {
    const userAdd = this.usersRepository.create({
      name,
      dob,
      description,
      address,
    });
    return userAdd;
  }
}
