
const { Pool } = require('pg');
const conn = require('../dbConfig');


const getProveedor = async (req, res) => {
  const response = await conn.query(`SELECT proveedor_id, proveedor_nombre, proveedor_ciudad, proveedor_direccion, proveedor_telefono
  FROM public.proveedor;`);
  res.status(200).json(response.rows);
};

const getProveedorById =  async (req, res) =>{
  const response = await conn.query(`SELECT proveedor_id, proveedor_nombre, proveedor_ciudad, proveedor_direccion, proveedor_telefono
	FROM public.proveedor where proveedor_id = $1;`, [req.params.id]);
  res.status(200).json(response.rows);
}

const createProveedor = async(req, res) =>{
    const {proveedor_id, proveedor_nombre, 
        proveedor_ciudad, proveedor_direccion, proveedor_telefono} = req.body;

    const response = await conn.query(`INSERT INTO public.proveedor(
        proveedor_id, proveedor_nombre, proveedor_ciudad, proveedor_direccion, proveedor_telefono)
        VALUES ($1, $2, $3, $4, $5);`,[proveedor_id, proveedor_nombre, 
            proveedor_ciudad, proveedor_direccion, proveedor_telefono]);
            console.log(response)
        res.send(response);
};

module.exports = {
  getProveedor, createProveedor, getProveedorById
}
  
