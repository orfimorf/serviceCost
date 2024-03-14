const Router = require('express')
const mainController = require('../controllers/MainController')

const router = new Router()

router.post('/reConfig', mainController.reConfig)

module.exports = router