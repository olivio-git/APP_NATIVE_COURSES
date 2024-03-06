const express = require('express');
const catchedAsync = require('../utils/catchedAsync');
const { registerUserController, loginUserController } = require('../controllers/usuarioController');

router = express();

router.post('/',catchedAsync(registerUserController));
router.post('/auth/login',catchedAsync(loginUserController));
module.exports = router;