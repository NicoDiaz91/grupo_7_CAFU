'use strict';
module.exports = (sequelize, DataTypes) => {

    let alias = 'products';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        brands_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        leagues_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        categorys_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        seasons_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: 'products',
        timestamp: false
    };

    const products = sequelize.define(alias, cols, config);

    products.associate = function (models) {
        products.belongsTo(models.brands, {
            as: 'brands',
            foreignKey: 'brands_id'
        })
        products.belongsTo(models.categorys, {
            as: 'categorys',
            foreignKey: 'categorys_id'
        })
        products.belongsTo(models.leagues, {
            as: 'leagues',
            foreignKey: 'leagues_id'
        })
        products.belongsTo(models.seasons, {
            as: 'seasons',
            foreignKey: 'seasons_id'
        })
        products.belongsToMany(models.carts, {
            as: 'carts',
            through: 'cartProduct',
            foreignKey: 'products_id',
            otherKey: 'carts_id'
        })
    }

    return products;
};