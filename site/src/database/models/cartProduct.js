'use strict';
module.exports = (sequelize, DataTypes) => {

    const cartProduct = sequelize.define('cartProducts', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        product_id: {
            type: DataTypes.INTEGER,
        },
        subtotal: {
            type: DataTypes.INTEGER,
        },
        cart_id: {
            type: DataTypes.INTEGER,
        },
        state_id: {
            type: DataTypes.INTEGER,
        }
  }, {});
  cartProduct.associate = function(models) {
    // associations can be defined here
  };
  return cartProduct;
};