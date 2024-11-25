import { sequelize, User } from "./db.js";

const databaseSeed = async () => {
  await sequelize.sync({ force: true });

  const users = [
    {
      name: "reneSpeaks",
      email: "rene.weiberlenn@live.de",
      password: "12345678",
    },
  ];

  await User.bulkCreate(users, { individualHooks: true });
}

try {
  await databaseSeed();
  console.log("Database seeded.");
} catch (error) {
  console.log({ error });
} finally {
  void sequelize.close();
  console.log("Database connection closed.");
}