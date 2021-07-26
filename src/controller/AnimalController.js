import {animal} from '../model'
class AnimalController{
    create(req, res){
        const {nome, tipo, raca, sexo, idade, condicao} = req.body
        animal.create({
            nome: nome,
            tipo: tipo,
            raca: raca,
            sexo: sexo,
            idade: idade,
            condicao: condicao
        })
        const obj = animal.findOne({
            where: {
                nome: nome
            }
        })
        const status = obj ? 200 : 404
        return res.status(status).json(obj)
    }
    delete(req, res){
        const {nome} = req.body
        animal.destroy({
            where: {
                nome: nome
            }
        })
        return res.json('deleted '+nome)
    }
    read(req, res){
        animal.findAll().then((animal)=>{
            return res.json(animal)
        })
    }
    update(req, res){
        const {nome, novo_nome} = req.body
        const status = 404
        animal.update(
            { nome: novo_nome },
            { where: { nome: nome } }
        )
            
        return res.json('atualizado com nome '+novo_nome)
    }
}

export default new AnimalController()