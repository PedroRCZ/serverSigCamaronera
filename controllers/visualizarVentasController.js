

const conn = require('../dbConfig');


const getVenta = async (req, res) => {
  const response = await conn.query(`SELECT factura_id, factura_fecha, c.cliente_id, ca.camaron_talla, monto_peso, factura_precio_final
  FROM public.factura as f inner join cliente as c on f.cliente_id = c.cliente_id
  inner join camaron as ca on f.camaron_id = ca.camaron_id;`);
  res.status(200).json(response.rows);
}

const createFactura = async(req, res) =>{
  const {factura_id, factura_fecha, cliente_id, camaron_id, 
    factura_precio_camaron, factura_subtotal, factura_iva, factura_precio_final, monto_peso} = req.body;

  const response = await conn.query(`INSERT INTO public.factura(
    factura_id, factura_fecha, cliente_id, camaron_id, factura_precio_camaron, factura_subtotal, 
    factura_iva, factura_precio_final, monto_peso)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,[ factura_id, factura_fecha, cliente_id, camaron_id, 
        factura_precio_camaron, factura_subtotal, factura_iva, factura_precio_final, monto_peso]);
          console.log(response)
      res.send(response);
}; 
 
module.exports = {
  getVenta, createFactura
}
  
