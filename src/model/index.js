const sequelize = require('../config/sequelize')
const Sequelize = require('sequelize')
const Dono = require('./Dono')
const Animal = require('./Animal')

const dono = Dono(sequelize,Sequelize.DataTypes)
const animal = Animal(sequelize, Sequelize.DataTypes)

const db = {
    dono,
    animal,
    sequelize
}

module.exports = db