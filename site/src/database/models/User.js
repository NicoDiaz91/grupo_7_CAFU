'use strict';
module.exports = (sequelize, DataTypes) => {

    let alias = 'users';

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        images: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roles_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        countrys_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        provinces_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    };

    let config = {
        tableName: 'users',
        timestamp: false
    };

    const users = sequelize.define(alias, cols, config);

    users.associate = function (models) {

        users.belongsTo(models.roles, {
            as:'roles',
            foreignKey: 'roles_id'
        })
        users.belongsTo(models.countrys, {
            as:'countrys',
            foreignKey: 'countrys_id'
        })
        users.belongsTo(models.provinces, {
            as:'provinces',
            foreignKey: 'provinces_id'
        })/*
        users.belongsTo(models.carts ,{
            as: 'carts',
            foreignKey: 'users_id'
        })*/
    }

    return users;
};