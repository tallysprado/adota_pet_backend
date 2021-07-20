const Sequelize = require('sequelize')
//usuário e senha do banco
const sequelize = new Sequelize('adotar', 'root', 'teste', {
    dialect:'postgres',
    host: 'localhost', 
    port: 5432
})

module.exports = sequelize;