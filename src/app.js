import express from 'express'
import routes from './routes'
const {sequelize, dono, animal} = require('./model')

const app = express()
app.use(express.json())
app.use('/', routes)

sequelize.sync().then(()=>{
    console.log('banco criado')
})
dono.hasMany(animal, {as: 'animal', foreignKey: 'dono_id'})

app.listen(3000, ()=> {
    console.log('App online')
})

