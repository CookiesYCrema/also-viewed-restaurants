const router = require('express').Router();
const controller = require('./controller.js');

router.route('/also-viewed')
.get(controller.get);

router.route('/also-viewed')
.post(controller.post);

module.exports = router;
