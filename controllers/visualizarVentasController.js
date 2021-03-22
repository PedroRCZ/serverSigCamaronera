

const conn = require('../dbConfig');


const getUsers = async (req, res) => {
  const response = await conn.query(`SELECT factura_id, factura_fecha, 
  cliente_id, camaron_id, factura_precio_camaron, factura_precio_final
  FROM public.factura;`);
  res.status(200).json(response.rows);
}

module.exports = {
  getUsers
}
  

/*
controller.list = (req, res) => {
        req.getConnection((err, conn) => {
          conn.query(`SELECT factura_id, factura_fecha, 
          cliente_id, camaron_id, factura_precio_camaron, factura_precio_final
          FROM public.factura;`, (err, customers) => {
           if (err) {
            res.json(err);
           }
           res.render('customers', {
              data: customers
           });
          });
        });
      };
      
module.exports = controller;
*/