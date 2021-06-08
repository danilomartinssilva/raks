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
export default class ListUsersUseCase {
  constructor(
    @inject('logger') private logger: ILogger,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  public async execute(): Promise<any> {
    const users = await this.usersRepository.find().catch((err)=>{
      console.log('Error',err)
    });
    return users;
  }
}
