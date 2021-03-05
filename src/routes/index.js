const router = require('express').Router();

router.get('/', (req, res) =>{
    res.send('Práctica de cloud ');
})

//autores
router.get('/autores', (req, res) => {
    res.send({
        autor1: 'EBM',
        autor2: 'MESV'
    })
});

//Operacion suma
router.post('/suma', (req, res) => {
    const { nums } = req.body;
    let valor = 0;
    for(j=0; j<nums.length; j++)
        valor = valor+nums[j];

    res.send({ respuesta: valor});
});

/**OPERACION RESTA */
router.post('/resta', (req, res) => {
    const {nums,numToSubs}=req.body;
    let valor = 0;
    let valfinal = 0;
    for(j=0;j<nums.length;j++)
        valor=valor+nums[j];

    valfinal=numToSubs-valor;

    res.send( {respuesta:valfinal});
});


/**OPERACION MULTIPLICACION */
router.post('/multiplica',(req,res) => {
    const {nums} = req.body;
    let valor = 1;
    for(j=0;j<nums.length;j++)
    valor = valor*nums[j];
    res.send( {respuesta: valor});
});

/**OPERACION DIVISION */
router.post('/divide',(req,res )=> {
    const {nums,numToDiv}=req.body;
    let valor=numToDiv/nums[0];
    for(j=0;j<nums.length;j++){
        valor=valor / nums[j];
    }
    res.send( {respuesta:valor});
});

/**OPERACION free */
router.post('/free',(req,res) => {
    const {operation} = req.body;
    res.send( {respuesta: eval(operation)});
});

module.exports = router;