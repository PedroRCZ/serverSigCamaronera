const conn = require('../dbConfig');

const getConsumo = async (req, res) => {
    const response = await conn.query(`SELECT consumo_id, corrida_id, producto_id, consumo_cantidad
	FROM public.consumo;`);
    res.status(200).json(response.rows);
  };

const createConsuno = async(req, res) =>{
    const {consumo_id, corrida_id, producto_id, consumo_cantidad} = req.body;

    const response = await conn.query(`INSERT INTO public.consumo(
        corrida_id, producto_id, consumo_cantidad)
        VALUES ($1, $2, $3);`,[corrida_id, producto_id, consumo_cantidad]);
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

const getConsumoSumado = async(req, res) =>{
  const response = await conn.query(`SELECT producto_id, SUM(consumo_cantidad) as Total
  FROM  public.consumo group by producto_id`);
    res.status(200).json(response.rows);
};

const getGastoSumado = async (req, res) => {
  const response = await conn.query(`SELECT p.producto_id, pr.producto_nombre, SUM(g.gasto_cantidad) as Total
  FROM   public.gasto as g inner join producto_proveedor p 
  on g.producto_proveedor_id = p.producto_proveedor_id
  inner join producto as pr on p.producto_id = pr.producto_id
  group by p.producto_id, pr.producto_nombre`);
  res.status(200).json(response.rows);
};


  module.exports = {
    getConsumo, createConsuno, getPiscinaById, getCorridaById, getConsumoSumado, getGastoSumado
  }