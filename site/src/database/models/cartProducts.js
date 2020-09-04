'use strict';
module.exports = (sequelize, DataTypes) => {

    let alias = 'cartProduct';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        products_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subtotal: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        carts_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        states_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: 'cartProduct',
        timestamp: false
    };

    const cartProduct = sequelize.define(alias, cols, config);

    cartProduct.associate = function (models) {
        cartProduct.belongsTo(models.products, {
            as: 'products',
            foreignKey: 'products_id'
        })
        cartProduct.belongsTo(models.carts, {
            as: 'carts',
            foreignKey: 'carts_id'
        })
        cartProduct.belongsTo(models.states, {
            as: 'states',
            foreignKey: 'states_id'
        })
    }

    return cartProduct;
};