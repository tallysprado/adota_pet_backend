const Animal = require('./Animal')
const dono = (sequelize, DataTypes) => {
    const Dono = sequelize.define('dono',{
        dono_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contato: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
        tableName: 'dono'
    })
    /*
     Dono.associate = (models) => {
        Dono.hasMany(models.animal)
    }
     */
    return Dono
}

module.exports = dono