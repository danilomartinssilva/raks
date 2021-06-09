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

describe('user.create', () => {
  beforeEach(async () => {
    await User.truncate();
  });
  it('should create user and list', async () => {

    const response = await request(app)
      .post('/api/v1/users')
      .send({
        ...userFactory,
      });

    expect(response.status).toBe(201);
    
  });
  it('should create but not validate, when parameters incorrect', async () => {

    const response = await request(app)
      .post('/api/v1/users')
      .send({
        ...userFactory,
        description:undefined
      });

    expect(response.status).toBe(400);
    
  });
});
