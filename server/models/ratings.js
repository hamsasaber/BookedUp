module.exports = (sequelize, DataTypes) => {
  const ratings = sequelize.define("ratings", {
    rating: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      validate: {
        min: 0,
        max: 5,
      },
    },
  });
  ratings.associate = (models) => {
    ratings.belongsTo(models.customers), ratings.belongsTo(models.books);
  };
  return ratings;
};
