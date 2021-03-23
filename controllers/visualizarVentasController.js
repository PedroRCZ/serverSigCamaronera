

const conn = require('../dbConfig');


const getVenta = async (req, res) => {
  const response = await conn.query(`SELECT factura_id, factura_fecha, cliente_id, camaron_id, 
  factura_precio_camaron, factura_subtotal, factura_iva, factura_precio_final
	FROM public.factura;`);
  res.status(200).json(response.rows);
}

module.exports = {
  getVenta
}
  
