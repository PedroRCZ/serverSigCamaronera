const conn = require('../dbConfig');

const getCamaron = async (req, res) => {
    const response = await conn.query(`SELECT camaron_id, camaron_talla, camaron_peso
	FROM public.camaron;`);
    res.status(200).json(response.rows);
  };
  
  const getCamaronById =  async (req, res) =>{
    const response = await conn.query(`SELECT camaron_id, camaron_talla, camaron_peso
	FROM public.camaron where camaron_id = $1;`, [req.params.id]);
    res.status(200).json(response.rows);
  }
  
  const createCamaron = async(req, res) =>{
      const {camaron_id, camaron_talla, camaron_peso} = req.body;
  
      const response = await conn.query(`INSERT INTO public.camaron(
        camaron_id, camaron_talla, camaron_peso)
        VALUES ($1, $2, $3);`,[camaron_id, camaron_talla, camaron_peso]);
              console.log(response)
          res.send(response);
  };

  const decrementoCamaron = async(req, res) => {
      const id = req.params.id;
      const {camaron_id, camaron_talla, camaron_peso} = req.body;
      const response = await conn.query(`UPDATE public.camaron
                SET camaron_peso=$1 where camaron_id = $2`,[camaron_peso, id]);
              console.log(response)
          res.send(response);
  }

module.exports = {
    getCamaron, createCamaron, getCamaronById, decrementoCamaron
}