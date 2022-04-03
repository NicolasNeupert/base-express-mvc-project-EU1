const express = require('express')
const PageController = require('./controllers/PageController')
const CalculateRateController = require('./controllers/CalculateRateController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const calculateRateController = new CalculateRateController()

// Routes
router.get('/', calculateRateController.renderCalculateRateForm)
router.post('/', calculateRateController.renderRateValueTotal)

router.get('*', pageController.renderNotFound)

module.exports = router
