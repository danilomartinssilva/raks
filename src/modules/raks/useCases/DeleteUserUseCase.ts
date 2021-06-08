import ILogger from '@shared/infra/logger/interfaces/ILogger';
import { inject, injectable } from 'tsyringe';
import IUsersRepository from '../repositories/IUsersRepository';



interface IRequest {
  id: number;
}

@injectable()
export default class DeleteUserUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute({ id }: IRequest): Promise<any> {
    const userAdd = this.usersRepository.delete({ id });
    return userAdd;
  }
}
