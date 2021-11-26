exports.VendorsModel = (db) => {
  const sequelize = db.sequelize;
  const Sequelize = db.Sequelize;
  const { STRING, DATE } = Sequelize;

  return sequelize.define(
    "vendors",
    {
      name: {
        type: STRING,
        required: true,
        trim: true,
      },
      email: {
        type: STRING,
        trim: true,
        required: true,
        index: true,
        unique: true,
      },
      password: {
        type: STRING,
        trim: true,
        required: true,
      },
      created_at: {
        type: DATE,
      },
      updated_at: {
        type: DATE,
      },
    },
    {
      tableName: "vendors",
      underscored: true,
    }
  );
};
