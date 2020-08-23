'use strict';
module.exports = (sequelize, DataTypes) => {

    const Product = sequelize.define('Products', {
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
        },
        price:{
            type: DataTypes.INTEGER,
        },
        description:{
            type: DataTypes.STRING,
        },
        image:{
            type: DataTypes.STRING,
        },
        stock: {
            type: DataTypes.INTEGER,
        },
        brand_id: {
            type: DataTypes.INTEGER,
        },
        league_id: {
            type: DataTypes.INTEGER,
        }
    
  }, {});
  Product.associate = function(models) {
      Product.hasOne(models.cartProducts,{
          as: 'cartProduct',
          foreignKey: 'product_id'
        });
  };
  return Product;
};