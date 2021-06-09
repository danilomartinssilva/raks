import User from '@modules/raks/models/User';
import app from '@shared/infra/http/app';
import request from 'supertest';



require('mysql2/node_modules/iconv-lite').encodingExists('foo');

jest.useFakeTimers();

const userFactory = {
  name: 'Usuário A',
  description: 'Descrição do usuário',
  // eslint-disable-next-line no-octal
  dob: new Date('2012-06-22 05:40:06'),
  address: 'Rua Sebastiao Ferreira de Souza nº 134',
};

describe('user.update', () => {
  beforeEach(async () => {
    await User.truncate();
  });
  it('should create and update and list', async () => {
    const userCreated = await User.create({
      name: userFactory.name,
      address: userFactory.address,
      dob: userFactory.dob,
      description: userFactory.description,
    });

    const response = await request(app)
      .put(`/api/v1/users/${userCreated.id}`)
      .send({
        name: 'Felipe',
        address: 'Jardim das Margaridas',
        dob: userCreated.dob,
        description: userCreated.description,
      });

    expect(response.status).toBe(201);
    expect(response.body.id).toBe(userCreated.id)
    expect(response.body.description).toBe(userCreated.description)
    expect(response.body.address).not.toBe(userCreated.address)

  });
});
