const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testdb", "myuser", "password", {
  host: "localhost",
  dialect: "postgres",
});

sequelize.sync({ alter: true });

(async () => {
  try {
    sequelize.authenticate();
    console.log("connection established with DB");
  } catch (err) {
    console.log("Unable to connect to db", err);
  }
})();

module.exports = sequelize;
