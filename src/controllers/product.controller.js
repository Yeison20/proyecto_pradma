import Product from "../models/Product";

export async function createProduct(req, res) {
  const { name, value } = req.body;

  try {
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
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error",
      data: {},
    });
  }
}

export async function getProducts(req, res) {
  try {
    const products = await Product.findAll();
    res.json({
      data: products
    });
  } catch (error) {
      console.log(error);
  }
}

export async function getOneProduct (req, res){
    const { id } = req.params;
    const product = await Product.findOne({
        where: {
            id
        }
    });
    res.json(product);
}
