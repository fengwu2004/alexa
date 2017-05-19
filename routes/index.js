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

function composeTextMsg(to, from, time, msgid, content) {

    var ToUserName = '<ToUserName><![CDATA[' + to + ']]></ToUserName>'

    var FromUserName = '<FromUserName><![CDATA[' + from + ']]></FromUserName>'

    var CreateTime = '<CreateTime>' + time + '</CreateTime>'

    var Content = '<Content><![CDATA[' + content + ']]></Content>'

    var MsgType = '<MsgType><![CDATA[text]]></MsgType>'

    var data = '<xml>' + ToUserName + FromUserName + CreateTime + MsgType + Content + '</xml>'

    return data
}

router.post('/wx', function(req, res, next) {

    var to = req.body.xml.tousername[0]

    var from = req.body.xml.fromusername[0]

    var time = req.body.xml.createtime[0]

    var msgid = req.body.xml.msgid[0]

    var data = composeTextMsg(from, to, time, msgid, '你好')

    res.writeHead(200, {'Content-Type': 'application/xml'});

    red.send(data)
})

module.exports = router;