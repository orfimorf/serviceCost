const Router = require('express')
const mainController = require('../controllers/MainController')

const router = new Router()

router.put('/reConfig', mainController.reConfig)

module.exports = router