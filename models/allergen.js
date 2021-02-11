'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class allergen extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.allergen.belongsToMany(models.bread, {through: 'AllergenBread'})
    }
  };
  allergen.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'allergen',
  });
  return allergen;
};
