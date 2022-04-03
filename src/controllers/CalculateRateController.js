class CalculateRateController {
  constructor () {
    this.renderRateValueTotal = this.renderRateValueTotal.bind(this)
  }

  getCalculateRate (stock, interestRate, years) {
    return parseFloat(stock * (interestRate / 100) * years)
  }

  renderCalculateRateForm (req, res) {
    res.render('calculate-rate-form', {
      title: 'Simulador de interés'
    })
  }

  renderRateValueTotal (req, res) {
    const stockVal = parseFloat(req.body.stock)
    const rateVal = parseFloat(req.body.interestRate)
    const yearVal = parseFloat(req.body.years)

    res.render('calculate-rate-form', {
      stockVal,
      rateVal,
      yearVal,
      rateValueTotal: this.getCalculateRate(stockVal, rateVal, yearVal)
    })
  }
}

module.exports = CalculateRateController
