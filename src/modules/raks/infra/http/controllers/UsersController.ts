import CreateUserUseCase from '@modules/raks/useCases/CreateUserUseCase';
import DeleteUserUseCase from '@modules/raks/useCases/DeleteUserUseCase';
import ListUsersUseCase from '@modules/raks/useCases/ListUsersUseCase';
import UpdateUserUseCase from '@modules/raks/useCases/UpdateUserUseCase';
import { Request, Response } from 'express';
import { container } from 'tsyringe';


export default class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, dob, description, address } = request.body;
    const userCreate = container.resolve(CreateUserUseCase);
    const userCreated = await userCreate.execute({
      name,
      dob,
      description,
      address,
    });
    return response.status(201).json(userCreated);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const { name, dob, description, address } = request.body;
    const userUpdate = container.resolve(UpdateUserUseCase);
    const { id } = request.params;
    const userUpdated = await userUpdate.execute({
      address,
      id,
      description,
      dob,
      name,
    });
    return response.status(201).json(userUpdated);
  }

  public async remove(request: Request, response: Response): Promise<Response> {
    
    const deleteUser = container.resolve(DeleteUserUseCase);
    const { id } = request.params;
      await deleteUser.execute({
      id,
    });
    return response.status(204).send()
  }

  public async clistreate(
    request: Request,
    response: Response
  ): Promise<Response> {
    /*  const { name, dob, description, address } = request.body; */
    const userListing = container.resolve(ListUsersUseCase);
    const usersListed = await userListing.execute();
    return response.status(200).json(usersListed);
  }
}
