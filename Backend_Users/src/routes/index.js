const {Router} = require('express'); 
const userRoutes = require('./usuarioRoutes');
const router = Router();

router.use('/user',userRoutes)

module.exports = router;