const express = require('express'),
apiRouter = express.Router(),
curreny = require('./currency/currency')();

apiRouter.get('/api/currency', curreny.getCurrency)

module.exports = apiRouter