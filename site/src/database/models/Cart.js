'use strict';
module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define('Carts', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        total: {
            type: DataTypes.INTEGER,
        },
        user_id: {
            type: DataTypes.INTEGER,
        }
  }, {});
  Cart.associate = function(models) {
    Cart.hasOne(models.cartProducts,{
        as: 'cartProducts',
        foreignKey: 'cart_id'
      });
  };
  return Cart;
};