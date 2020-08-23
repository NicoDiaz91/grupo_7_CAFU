'use strict';
module.exports = (sequelize, DataTypes) => {

    const State = sequelize.define('States', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        state: {
            type: DataTypes.INTEGER,
        }
  }, {});
  State.associate = function(models) {
    State.belongsTo(models.cartProducts,{
      as: 'cartProducts',
      foreignKey: 'state_id'
    });
  };
  return State;
};