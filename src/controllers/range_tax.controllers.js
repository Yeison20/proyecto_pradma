import Range_tax from "../models/Range_Tax";
import sequelize from 'sequelize';
import Product from "../models/Product";
import Tax from "../models/Tax";
import Sale from "../models/sale"

export async function createRange_tax(req, res) {
  const { taxId, start, final, value } = req.body;
  const Op = sequelize.Op;

  const minimo = await Range_tax.min('start');
  const maximo = await Range_tax.max('final');

  if(!(start >= maximo && final >= maximo)){
    const range = await Range_tax.findAll();
    res.json({
      data: range,
      message: "ESTA DENTRO"
    });
    
  }else{
    if(start < final){
      let newRange_tax = await Range_tax.create(
        {
          taxId,
          start,
          final,
          value,
        },
        {
          fiels: ["taxId", "start", "final", "value"],
        }
      );
      res.json({
        message: "New Range tax created", maximo, minimo,
        data: newRange_tax,
      });
    }else{
      res.json({
        message: "Datos invalidos"
      });
    }
    
  }

  //console.log(range_tax);
}

export async function create(req, res) {
  const { taxId, start, final, value } = req.body;
  const newRange_tax = await Range_tax.create(
    {
      taxId,
      start,
      final,
      value,
    },
    {
      fiels: ["taxId", "start", "final", "value"],
    }
  );
  res.json({
    message: "New Range tax created",
    data: newRange_tax,
  });
}

export async function getRange_tax(req, res) {
  try {
    const range_tax = await Range_tax.findAll();
    res.json({
      data: range_tax,
    });
  } catch (error) {
    console.log(error);
  }
}

