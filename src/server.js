var express = require('express');//请求(引入)一个express模块
var app = express();//使用模块
var bodyParser = require('body-parser');
// 解析json参数
app.use(bodyParser.json()); 
// 创建 application/x-www-form-urlencoded 编码解析
app.use(bodyParser.urlencoded({ extended: true })); 

//设置跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers",  '*');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


// 1.
var mysql = require('mysql');//加载mysql数据库管理模块
// 2.
var connection = mysql.createConnection({// 创建数据库连接
  host: 'localhost', //IP
  port: '3306',//端口
  user: 'root',//用户名
  password: '123123',//密码
  database: 'testt'//数据库
});

//提供 /article/list 服务, 获取文章列表
app.get('/article/list',function(req, res){
  //数据库操作
  var sql = 'select title, url, votes from articles where 1=1';//查询操作
  // error 报错 result 查询的结果
  connection.query(sql,function(error, result){
    if(error){
      console.error('出错了! ', error.message);
      return;
    }
    console.log('--------------------------');
    console.log(result);
    res.json(result);
    res.end();
  });
});

//提供 /article/add 服务, 添加文章
app.post('/article/add',function(req, res){
  //数据库操作
  var sql = 'insert into articles(title, url,votes, date) values(?,?,?,?)';//添加操作
  console.log(req.body);
  var params = [req.body.title, req.body.url, req.body.votes, new Date()];
  connection.query(sql,params,function(error, result){
    //0 失败 1 成功
    if(error){
      console.error('出错了! ', error.message);
      return;
    }
    console.log('--------------------------');
    console.log(result);
    res.end();
  });
});

//提供 /article/change 服务, 添加文章
app.post('/article/change',function(req, res){
  //数据库操作
  var sql="update articles set votes='?' where votes in select votes from articles where 1=1";
 // var sql = 'insert into articles(title, url,votes, date) values(?,?,?,?)';//添加操作
  // console.log(req.body);
  var params = [req.body.votes];
  connection.query(sql,params,function(error, result){
    //0 失败 1 成功
    if(error){
      console.error('出错了! ', error.message);
      return;
    }
    console.log('--------------------------');
    console.log(result);
    res.end();
  });
});

var server = app.listen(8088, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
});

// cnpm i --save mysql