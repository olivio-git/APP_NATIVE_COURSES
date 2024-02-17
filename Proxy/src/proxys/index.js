const {Router} = require ('express');
const { proxyUsers } = require('./ProxyUsers');
const router = Router();
router.use("/users", proxyUsers("http://localhost:3002/getbyid"));
router.use("/cursos", proxyUsers("http://localhost:3003/getbyid"));
router.use("/suscripciones", proxyUsers("http://localhost:3004/getbyid"));
router.use("/multimedia", proxyUsers("http://localhost:3005/getbyid"));

module.exports = router;