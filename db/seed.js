import { sequelize, User } from "./db.js";

const databaseSeed = async () => {
  await sequelize.sync({ force: true });

  const users = [
    {
      name: "reneSpeaks",
      email: "rene.weiberlenn@live.de",
      password: "12345678",
    },
    {
      name: "Alice Smith",
      email: "alice.smith@live.de",
      password: "12345678",
    },
    {
      name: "Bob Johnson",
      email: "bob.johnson@live.de",
      password: "12345678",
    },
    {
      name: "Charlie Williams",
      email: "charlie.williams@live.de",
      password: "12345678",
    },
    {
      name: "Diana Brown",
      email: "diana.brown@live.de",
      password: "12345678",
    },
    {
      name: "Eve Davies",
      email: "eve.davies@live.de",
      password: "12345678",
    },
    {
      name: "Frank Miller",
      email: "frank.miller@live.de",
      password: "12345678",
    },
    {
      name: "Grace Wilson",
      email: "grace.wilson@live.de",
      password: "12345678",
    },
    {
      name: "Hannah Moore",
      email: "hannah.moore@live.de",
      password: "12345678",
    },
    {
      name: "Ian Taylor",
      email: "ian.taylor@live.de",
      password: "12345678",
    },
    {
      name: "Jack Anderson",
      email: "jack.anderson@live.de",
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