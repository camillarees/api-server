'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const foodSchema = require('./food.schema');
const ModelInterface = require('./modelInterface');
const orderSchema = require('./order.schema');

// 'postgres://localhost:5432/basic-api-server'
// will use a ternary here to set up sqlite for testing
const DATABASE_URL = process.env.NODE_ENV === 'test'
? 'sqlite::memory:'
: process.env.DATABASE_URL;

// instantiate our sequelize connection to our database

const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create a food model with our schema 

const FoodModel = foodSchema(sequelizeDatabase, DataTypes);
const OrderModel = orderSchema(sequelizeDatabase, DataTypes);

// relations added between customers and orders

FoodModel.hasMany(OrderModel);
OrderModel.belongsTo(FoodModel);

module.exports = {
    sequelizeDatabase,
    FoodModel,
    foodInterface: new ModelInterface(FoodModel),
    orderInterface: new ModelInterface(OrderModel),
};