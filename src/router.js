const express = require('express')
const PageController = require('./controllers/PageController')
const CalculateRateController = require('./controllers/CalculateRateController')

const router = express.Router()

// Controllers
const pageController = new PageController()
const calculateRateController = new CalculateRateController()

// Routes
router.get('/', pageController.renderHome)

router.get('/calculate-rate-form', calculateRateController.renderCalculateRateForm)
router.post('/calculate-rate-form', calculateRateController.renderRateValueTotal)

router.get('*', pageController.renderNotFound)

module.exports = router
