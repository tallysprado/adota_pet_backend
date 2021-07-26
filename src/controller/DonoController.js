import {dono} from '../model'
class DonoController{
    //Lista os donos
    index(req,res) {
        return res.json(dono)
    }

    create(req, res) {
        const {nome, contato} = req.body
        dono.create({
            nome: nome,
            contato: contato,
        })
        const obj = dono.findOne({
            where: {
                nome: nome
            }
        })
        const status = obj ? 200 : 404
        return res.status(status).json(obj)
    }



}

export default new DonoController()