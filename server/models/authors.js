module.exports = (sequelize, DataTypes) => {
  const authors = sequelize.define("authors", {
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    authorName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    authorEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  return authors;
};
