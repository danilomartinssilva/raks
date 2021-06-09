
# Raks API application

This is the boilerplate for creating an API server, it comes pre-configured with.


* Setup
* Migrations

* Run Dev
* Run Test
* Run Production
* Port
* Host

## Setup 

Use the command to install the blueprint

```bash

npm install 

```

or manually clone the repo and then run `yarn`.


### Migrations

Run the following command to run startup migrations.

```js
npx sequelize db:migrate
```

### Run Dev
```js
yarn dev
```

### Run Test
```js
yarn test
```

### Run Production
```js
yarn build
```
### Port
The service is started: 8051


### Host
Go: http://165.227.83.46:8051/api/v1/users


