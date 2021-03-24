
const { Pool } = require('pg');
const conn = require('../dbConfig');


const getCliente = async (req, res) => {
  const response = await conn.query(`SELECT cliente_id, cliente_nombre, cliente_ciudad,
    cliente_direccion, cliente_telefono
  FROM public.cliente;`);
  res.status(200).json(response.rows);
};

const getClienById =  async (req, res) =>{
  const response = await conn.query(`SELECT cliente_id, cliente_nombre, cliente_ciudad, cliente_direccion, cliente_telefono
	FROM public.cliente where cliente_id = $1;`, [req.params.id]);
  res.status(200).json(response.rows);
}

const createCliente = async(req, res) =>{
    const {cliente_id, cliente_nombre, 
        cliente_ciudad, cliente_direccion, cliente_telefono} = req.body;

    const response = await conn.query(`INSERT INTO public.cliente(
        cliente_id, cliente_nombre, cliente_ciudad, cliente_direccion, cliente_telefono)
        VALUES ($1, $2, $3, $4, $5);`,[cliente_id, cliente_nombre, 
            cliente_ciudad, cliente_direccion, cliente_telefono]);
            console.log(response)
        res.send(response);
};

const update = async(req, res) =>{

}



module.exports = {
  getCliente, createCliente, getClienById
}
  
