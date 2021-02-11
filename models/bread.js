'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class bread extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.bread.belongsTo(models.userbaker)
      models.bread.belongsToMany(models.allergen, {through : 'allergenbread'})
      models.bread.hasMany(models.comment)
    }
  };
  bread.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    bakerId: DataTypes.INTEGER,
    imageurl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'bread',
  });
  return bread;
};
