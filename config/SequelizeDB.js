const Sequelize = require('sequelize');

// Sequelize variables 
const sequelizedb = require('./main.js').sequelizedb;

const sequelize = new Sequelize(sequelizedb.name,sequelizedb.userName,sequelizedb.passWord,{
    host: sequelizedb.host,
    port: sequelizedb.port,
    dialect: sequelizedb.dialect
});


module.exports = sequelize;