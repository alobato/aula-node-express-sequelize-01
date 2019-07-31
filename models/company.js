const modelType = require('../types/company')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.define('Company', modelType(DataTypes))

  Model.associate = function(models) {
    models.Company.hasMany(models.User)
  }

  return Model
}
