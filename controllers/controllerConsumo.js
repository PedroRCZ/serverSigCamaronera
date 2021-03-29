const conn = require('../dbConfig');

const getConsumo = async (req, res) => {
    const response = await conn.query(`SELECT consumo_id, corrida_id, producto_id, consumo_cantidad
	FROM public.consumo;`);
    res.status(200).json(response.rows);
  };

const createConsuno = async(req, res) =>{
    const {consumo_id, corrida_id, producto_id, consumo_cantidad} = req.body;

    const response = await conn.query(`INSERT INTO public.consumo(
        consumo_id, corrida_id, producto_id, consumo_cantidad)
        VALUES ($1, $2, $3, $4);`,[consumo_id, corrida_id, producto_id, consumo_cantidad]);
            console.log(response)
        res.send(response);
};

const getPiscinaById =  async (req, res) =>{
  const response = await conn.query(`SELECT piscina_id, piscina_estado
	FROM public.piscina where piscina_id = $1;`, [req.params.id]); 
  res.status(200).json(response.rows);
}

const getCorridaById =  async (req, res) =>{
  const response = await conn.query(`SELECT corrida_id, corrida_fecini, corrida_fecfin, piscina_id
	FROM public.corrida where corrida_id = $1;`, [req.params.id]); 
  res.status(200).json(response.rows);
}


  module.exports = {
    getConsumo, createConsuno, getPiscinaById, getCorridaById
  }