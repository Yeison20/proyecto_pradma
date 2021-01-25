import { sequelize } from "../database/database";
import Product from "../models/Product";

export async function createProduct (req, res){
    const {name, value } = req.body;
    const product = await Product.findOne({
        where: {
            name: name,
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


