module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define("books", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    coverImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    path: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nbRead: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Pending", "Accepted", "Rejected"),
      defaultValue: "Pending",
    },
    salesPrice: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    rentPrice: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
    },
    publishDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  books.associate = (models) => {
    books.belongsTo(models.authors);
  };
  return books;
};
