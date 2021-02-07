module.exports = (Sequelize, DataTypes) => {
  const User = Sequelize.define("User", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
    },
    password_hash: DataTypes.STRING,
  });

  return User;
};
