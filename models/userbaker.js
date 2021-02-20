'use strict';
const bcrypt = require('bcrypt')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class userbaker extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.userbaker.hasMany(models.bread, {onDelete: 'CASCADE'})
      models.userbaker.hasMany(models.comment)

    }
  };
  userbaker.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2,25],
          msg: 'Name must be 2-25 characters long.'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Please enter a valid email address'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8,99],
          msg: 'password must be 8-99 characters'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'userbaker',
  });



  userbaker.addHook('beforeCreate',async (pendingUser,options)=>{
    await bcrypt.hash(pendingUser.password,10)
    .then(hashedPassword=>{
      pendingUser.password = hashedPassword;
    })
  })

  userbaker.prototype.validPassword = async function(passwordInput){
    try{
      let match = await bcrypt.compare(passwordInput, this.password);
      return match;
    }  catch(error){
      console.log(error)
    }
  }

  return userbaker;
};
