const Sequelize = require("sequelize");

exports.connectDb = (req, res, next) => {
  const dbname = req.headers.dbname || process.env.DB_NAME1;
  const dbuser = process.env.DB_USER;
  const dbpass = process.env.DB_PASS;

  const sequelize = new Sequelize(dbname, dbuser, dbpass, {
    host: "localhost",
    dialect: "postgres",
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  });
  sequelize
    .authenticate()
    .then(() => {
      console.log(`Database '${dbname}' has been connected!`);
      req.db = { sequelize, Sequelize };
      next();
    })
    .catch((err) => {
      console.error("Unable to connect to the database:", err);
      return res
        .status(500)
        .json({ message: "Database connection was not established" });
    });
};
