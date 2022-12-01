'use strict';


module.exports = (sequelizeDatabase, DataTypes) => sequelizeDatabase.define('food', {
    product: {
        type: DataTypes.STRING,
        allowNULL: FLOWBASEANNOTATION_TYPES,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
    foodId: {
        type: DataTypes.INTEGER,
        allowNull: true,
    }

});