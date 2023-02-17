'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fuel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fuel.belongsTo(models.Car, {
        foreignKey: 'carId',
      })
    }
  }
  Fuel.init({
    brand: DataTypes.STRING,
    gas: {
      type: DataTypes.ENUM('87', '89', '93'),
      defaultValue: '87'
    },
    carId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Cars',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Fuel',
  });
  return Fuel
}
