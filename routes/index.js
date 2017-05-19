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

function composeTextMsg(to, from, time, content) {

    var ToUserName = '<ToUserName>' + to + '</ToUserName>'

    var FromUserName = '<FromUserName>' + from + '</FromUserName>'

    var CreateTime = '<CreateTime>' + time + '</CreateTime>'

    var Content = '<Content>' + content + '</Content>'

    var MsgType = '<MsgType>' + 'text' + '</MsgType>'

    var data = ToUserName + FromUserName + CreateTime + MsgType + Content

    return data
}

router.post('/wx', function(req, res, next) {

    var to = req.body.ToUserName

    var from = req.body.FromUserName

    var time = req.body.CreateTime

    var data = composeTextMsg(from, to, time, '你好')

    red.send(data)
})

module.exports = router;