module.exports = (sequelize, DataTypes) => {
  const customers = sequelize.define("customers", {
    cardName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiryMonth: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    expiryYear: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cvv: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  customers.associate = (models) => {
    customers.belongsTo(models.users);
  };
  return customers;
};
