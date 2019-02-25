var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
//设置允许跨域访问该服务.
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  next();
});
app.get('/getList',function(req,res){
	MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db('people');
	    dbo.collection('site').find({}).toArray(function(err,result){
	    	if(err) throw err;
	    	res.send(result);
	    	db.close()
	    })
	});
});
app.post('/addItem',function(req,res){
	console.log(req.body);
	var iserItem = req.body;
	MongoClient.connect(url, function(err, db) {
	    if (err) throw err;
	    var dbo = db.db("people");
	    dbo.collection("site").insertOne(iserItem, function(err, data) {
	        if (err) throw err;
	        console.log('添加数据成功！');
	        res.send(JSON.stringify({code:1,message:'新建数据成功'}));
	        db.close();
	    });
	});
	
});
app.listen(3030);