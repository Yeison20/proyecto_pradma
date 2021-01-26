import Tax from '../models/Tax';
import Sequelize from 'sequelize';

export async  function createTax (req, res){
    const { name } = req.body;
    const Op = Sequelize.Op;
    const tax = await Tax.findOne({
        where: {
            name: {[ Op.iLike]: `%${name}%`}
        },
    });

    if(tax){
        res.json({
            message: "¡El impuesto ya existe",
            data: {}
        });
    }else{
        let newTax = await Tax.create({
            name,
        },{
            fields: ["name"],
        });

        if(newTax) {
            return res.json({
                message: "Impuesto creado correctamente",
                data: newTax,
            });
        }
    }
}

//Obtener todos los datos de Tax

export async function getTax(req, res){
    try{
        const taxs = await Tax.findAll();
        res.json({
            data: taxs,
        });
    } catch (error){
        console.log(error);
    }
}