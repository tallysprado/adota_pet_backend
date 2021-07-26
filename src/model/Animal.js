const Dono = require('./Dono')
const animal = (sequelize, DataTypes) => {
    const Animal = sequelize.define('animal', {
        animal_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        raca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sexo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        condicao: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        }
    }, {
        tableName: 'animal'
    })
    /*
    Animal.associate = (models) => {
        Animal.belongsTo(models.dono, {foreignKey: 'id', as: 'animal'})
    }
    */
   //Animal.belongsTo(Dono)
    return Animal
}


module.exports = animal

