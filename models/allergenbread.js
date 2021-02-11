'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AllergenBread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  AllergenBread.init({
    allergenId: DataTypes.INTEGER,
    breadId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AllergenBread',
  });
  return AllergenBread;
};