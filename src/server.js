const  express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('../routes/api');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
req.accepts('*/*');
req.acceptsEncodings(['gzip', 'deflate', 'sdch', 'br']);
next();
});

app.use(function(req, res, next) {
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Headers', '*');
res.header('Access-Control-Allow-Methods', '*');
next();
});

app.use(apiRouter);
const PORT = process.PORT || 5000;
app.listen(PORT, ()=> console.log(`Listnering on ${PORT}`))