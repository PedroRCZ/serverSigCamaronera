const { Pool } = require('pg');
const conn = require('../dbConfig');


const getGastos = async (req, res) => {
  const response = await conn.query(`SELECT gasto_id, producto_proveedor_id, gasto_descripcion,
    gasto_cantidad, gastos_monto FROM public.gasto;`);
  res.status(200).json(response.rows);
};

const getGastosById =  async (req, res) =>{
  const response = await conn.query(`SELECT gasto_id, producto_proveedor_id, gasto_descripcion,
  gasto_cantidad, gastos_monto FROM public.gasto where gasto_id = $1;`, [req.params.id]);
  res.status(200).json(response.rows);
}

const createGastos = async(req, res) =>{
    const {gasto_id, producto_proveedor_id, gasto_descripcion, 
        gasto_cantidad, gastos_monto} = req.body;

    const response = await conn.query(`INSERT INTO public.gasto(
        producto_proveedor_id, gasto_descripcion, gasto_cantidad, gastos_monto)
        VALUES ($1, $2, $3, $4);`,[producto_proveedor_id, gasto_descripcion, 
            gasto_cantidad, gastos_monto]);
            console.log(response) 
        res.send(response);
}; 

const Prodcreate = async (req, res) => {
  const {producto_proveedor_id, proveedor_id, producto_id} = req.body;
  const response = await conn.query(`INSERT INTO public.producto_proveedor(
     proveedor_id, producto_id)
    VALUES ($1, $2); `,[proveedor_id, producto_id]);
  console.log(response)
  res.send(response);
};

module.exports = {
    getGastos, getGastosById, createGastos, Prodcreate
}
  
