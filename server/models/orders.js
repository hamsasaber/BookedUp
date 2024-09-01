module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define("orders", {
    status: {
      type: DataTypes.ENUM(
        "Completed",
        "Failed",
        "Pending",
        "Cancelled",
        "Expired",
        "Denied",
        "Refunded"
      ),
      defaultValue: "Completed",
    },
    type: {
      type: DataTypes.BOOLEAN,
    },
    from: {
      type: DataTypes.DATE,
    },
    to: {
      type: DataTypes.DATE,
    },
  });

  orders.associate = (models) => {
    orders.belongsTo(models.customers);
  };
  return orders;
};
