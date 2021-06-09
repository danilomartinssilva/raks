require('mysql2/node_modules/iconv-lite').encodingExists('foo');

import User from '@modules/raks/models/User';
import app from '@shared/infra/http/app';
import request from 'supertest';



jest.useFakeTimers();

const userFactory = {
  name: 'Usuário A',
  description: 'Descrição do usuário',
  // eslint-disable-next-line no-octal
  dob: new Date('2012-06-22 05:40:06'),
  address: 'Rua Sebastiao Ferreira de Souza nº 134',
};

describe('user.list', () => {
  beforeEach(async()=>{
    await User.truncate()

  })
  it('should create user and list', async () => {
      await User.create({
      name: userFactory.name,
      address: userFactory.address,
      dob: userFactory.dob,
      description: userFactory.description,
    });
   
    const response = await request(app).get('/api/v1/users');   

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(1)
  });
  it('should create user and list', async () => {
      await User.create({
      name: userFactory.name,
      address: userFactory.address,
      dob: userFactory.dob,
      description: userFactory.description,
    });
      await User.create({
      name: userFactory.name,
      address: userFactory.address,
      dob: userFactory.dob,
      description: userFactory.description,
    });
      await User.create({
      name: userFactory.name,
      address: userFactory.address,
      dob: userFactory.dob,
      description: userFactory.description,
    });
   
    const response = await request(app).get('/api/v1/users');   

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(3)
  });
  it(' list empty', async () => {
 
   
    const response = await request(app).get('/api/v1/users');   

    expect(response.status).toBe(200)
    expect(response.body.length).toBe(0)
  });
});
