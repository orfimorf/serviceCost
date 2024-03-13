const Router = require("express");
const costRouter = require('./CostRouter')

const router = new Router()

router.use('/cost', costRouter)

module.exports = router