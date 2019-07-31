module.exports = DataTypes => {
  return {
    id: { allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, allowNull: false, validate: { notEmpty: true, isEmail: true } },
    createdAt: { allowNull: false, type: DataTypes.DATE },
    updatedAt: { allowNull: false, type: DataTypes.DATE }
  }
}
