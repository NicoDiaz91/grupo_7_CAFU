'use strict';
module.exports = (sequelize, DataTypes) => {

    let alias = 'states';

    let cols = {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        state: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
  };

  let config = {
    tableName: 'states',
    timestamp: false
  };

  const states = sequelize.define(alias, cols, config);

  states.associate = function(models) {
    states.hasMany(models.cartProduct,{
      as: 'cartProducts',
      foreignKey: 'states_id'
    })
  };
  return states;
};