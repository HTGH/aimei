const express = require("express");
const mysql = require("mysql");
const pool = require("./pool");
var app = express();
app.use(express.static(__dirname+"/public"));

//解决跨域问题
const cors=require("cors")
app.use(cors({
    origin:"*",
    credentials:true
}));
app.listen(5656);
console.log("商城app")
//商品详情
app.get("/products",(req,res)=>{
var lei=req.query.lei;	
var sql = "SELECT `img`, `title`, `price`, `num` FROM `products` ";
if(lei){
	sql+="where lei=? "
}
    pool.query(sql,lei,(err,result)=>{
         if(err)throw err;
         res.send(result);
    });
});
//表情
app.get("/emojis",(req,res)=>{
var sql = "SELECT `img` FROM `emojis` ";
pool.query(sql,(err,result)=>{
	 if(err)throw err;
	 res.send(result);
});
});