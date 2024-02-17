const {Router} = require('express');

const router = Router();

router.get('/getbyid/:id',(req,res)=>{
    console.log(req.params.id);
    res.status(200).send('<h1>HOLA USERS PROXY</h1>')
})

module.exports = router;