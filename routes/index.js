var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('index', { title: 'Express' });
});

router.post('/findwordmean', function(req, res, next) {

    res.send("ok, let us move!")
});

router.get('/wx', function(req, res, next) {

    var signature = req.query.signature

    var timestamp = req.query.timestamp

    var nonce = req.query.nonce

    var echostr = req.query.echostr

    var token = 'yellfun123'

    res.send(echostr)
})

router.post('/wx', function(req, res, next) {

    console.log(req.body)

    red.send('what can i help you')
})

module.exports = router;