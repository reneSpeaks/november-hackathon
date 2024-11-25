import { Sequelize } from 'sequelize';

import UserModel from './models/User.js';

const sequelize = new Sequelize(process.env.DB, { logging: false });

const User = UserModel(sequelize);

try {
  await sequelize.sync({ force: false });
  console.log(`Sequelize database connection successfully.`);
} catch (error) {
  console.error("\x1b[31m%s\x1b[0m", error);
}

export { sequelize, User };