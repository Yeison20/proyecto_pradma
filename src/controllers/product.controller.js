import { sequelize } from "../database/database";
import Product from "../models/Product";
import Sequelize from 'sequelize';

export async function createProduct (req, res){
    const {name, value } = req.body;
    const Op = Sequelize.Op;
    const product = await Product.findOne({
        where: {
            name: { [Op.iLike]: `%${name}%`
            }
        },
    });

    if(product){
        res.json({
            message: "¡El producto ya existe!",
            data: {}
        });
    }else{
        let newProduct = await Product.create(
            {
              name,
              value,
            },
            {
              fields: ["name", "value"],
            }
          );
      
          if (newProduct) {
            return res.json({
              message: "Producto creado correctamente",
              data: newProduct,
            });
          }
    }
    
}



export async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json({
      data: products,
    });
  } catch (error) {
    console.log(error);
  }
}

export async function getOneProduct(req, res) {
  const { id } = req.params;
  const product = await Product.findOne({
    where: {
      id,
    },
  });
  res.json(product);
}


export async function calculo (req , res ){
  const { name } = req.body;
  const Op = Sequelize.Op;
  const total = await sequelize.query("select sum (coalesce((product.value * range_tax.value) / 100)) as total from range_tax inner join tax on range_tax.taxid = tax.id inner join sale on sale.taxid = tax.id inner join product on sale.productid = product.id  where product.value between range_tax.start and range_tax.final and product.name = \'" + name + "\'", {nest: true } );
 
  const totalVar = JSON.parse(JSON.stringify(total[0], null, 2)).total;

  console.log(typeof(totalVar));

  const product = await Product.findOne({
    where: {
        name: { [Op.iLike]: `%${name}%`
        }
    },
});

  const totalPrecio = parseInt(product.value) + parseInt(totalVar);

  console.log(totalPrecio);
}
