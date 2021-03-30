
const { Pool } = require('pg');
const conn = require('../dbConfig');


const getProducto = async (req, res) => {
  const response = await conn.query(`SELECT producto_id, producto_nombre, producto_precio
  FROM public.producto;`);
  res.status(200).json(response.rows);
};

const getProductoById =  async (req, res) =>{
  const response = await conn.query(`SELECT producto_id, producto_nombre, producto_precio
  FROM public.producto where producto_id = $1;`, [req.params.id]);
  res.status(200).json(response.rows);
}

const createProducto = async(req, res) =>{
    const {producto_id, producto_nombre, producto_precio} = req.body;

    const response = await conn.query(`INSERT INTO public.producto(
        producto_id, producto_nombre, producto_precio)
        VALUES ($1, $2, $3);`,[producto_id, producto_nombre, producto_precio]);
            console.log(response)
        res.send(response);
};

const getProd = async (req, res) => {
  const response = await conn.query(`SELECT producto_proveedor_id, proveedor_id, producto_id
	FROM public.producto_proveedor `);
  res.status(200).json(response.rows);
};


const getProdExiste = async (req, res) => {
  const {producto_proveedor_id, proveedor_id, producto_id} = req.body;
  const response = await conn.query(`SELECT producto_proveedor_id, proveedor_id, producto_id
	FROM public.producto_proveedor where proveedor_id = $1 and producto_id = $2; `,[proveedor_id, producto_id]);
  res.status(200).json(response.rows);
};



module.exports = {
  getProducto, createProducto, getProductoById, getProd, getProdExiste
}
  
