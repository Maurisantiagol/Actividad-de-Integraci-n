const router = require('express').Router();

const Controller = require('../controller/controller');

router.get('/carrito', Controller.list);
router.post('/add', Controller.save);
router.get('/delete/:id', Controller.delete);

module.exports = router;