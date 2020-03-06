'use strict';
module.exports = (sequelize, DataTypes) => {
  const Refreshtoken = sequelize.define('Refreshtoken', {
    userId: {
      type:DataTypes.INTEGER,
      allowNull:false,
      references:{
        model:'User',
        key:'id'
      }
    },
    refreshToken:{
      type:DataTypes.TEXT,
      unique:true,
      allowNull:false,
    }
  }, {});

  Refreshtoken.associate = function(models) {
      Refreshtoken.belongsTo( models.User, {
        foreignKey: 'userId',
      } );
  };
  return Refreshtoken;
};