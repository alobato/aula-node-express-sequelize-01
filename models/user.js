const modelType = require('../types/user')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('User', modelType(DataTypes))

  Model.associate = function(models) {
    models.User.belongsTo(models.Company, { foreignKey: { allowNull: false } })
  }

  return Model
}
