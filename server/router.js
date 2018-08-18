const router = require('express').Router();
const controller = require('./controller.js');

router.route('/also-viewed/:id')
.get(controller.id.get)
.delete(controller.id.delete)
.put(controller.id.put);

router.route('/also-viewed/:mainCategory?/:city?')
.get(controller.mainCategoryCity.get)
.post(controller.mainCategoryCity.post);

module.exports = router;