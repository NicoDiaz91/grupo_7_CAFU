'use strict';
module.exports = (sequelize, DataTypes) => {

    let alias = 'carts';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        total: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        users_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

   let config = {
       tableName: 'carts',
       timestamp: false
   };

   const carts = sequelize.define(alias, cols, config);

    carts.associate = function (models) {
        carts.belongsTo(models.users, {
            as: 'users',
            foreignKey: 'users_id'
        })
        carts.belongsToMany(models.products, {
            as: 'products',
            through: 'cartProduct',
            foreignKey: 'carts_id',
            otherKey: 'products_id'
        })
    };

    return carts;
};