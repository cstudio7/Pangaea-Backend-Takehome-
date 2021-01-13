module.exports = (sequelize, DataTypes) => {
  const subscriber = sequelize.define('subscriber', {
    url: DataTypes.STRING,
    topic: DataTypes.STRING,
  }, {});
  subscriber.associate = (models) => {
    // association goes here
  };
  return subscriber
};
