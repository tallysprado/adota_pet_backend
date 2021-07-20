const Sequelize = require('sequelize')
const database = require('./db')

const Animal = database.define('animal', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    idade: {
        type: Sequelize.STRING,
        allowNull: true,
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})