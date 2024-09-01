module.exports = (sequelize, DataTypes) => {
  const orderLines = sequelize.define("orderLines", {});
  orderLines.associate = (models) => {
    orderLines.belongsTo(models.customers), orderLines.belongsTo(models.books);
  };
  return orderLines;
};
