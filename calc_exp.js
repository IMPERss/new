const express = require("express");
const fs = require("fs");
const module1 = require("./module");
const bodypraser = require("body-parser");

const app = express();

app.use(bodypraser.urlencoded({extended:false}));

app.get("/",function(req,resp){
	resp.sendFile("form.html",{root:__dirname});
	console.log("Form loaded");
});

app.post("/calulate",function(req,resp){
	if(req.body.operation == "add") res = module1.add(req.body.num1,req.body.num2);
	if(req.body.operation == "sub") res = module1.sub(req.body.num1,req.body.num2);
	if(req.body.operation == "mul") res = module1.mul(req.body.num1,req.body.num2);
	if(req.body.operation == "div") res = module1.div(req.body.num1,req.body.num2);
	
	data = req.body.num1+","+req.body.num2+"\n";

	fs.appendFile('sample.txt', data, 'utf8',
		function(err){
			if (err) throw err;
			console.log("data appended to file...");
		});
	resp.send(""+res);
	console.log("response send to browser");
});

app.listen(1337, function(){
	console.log("server started on port 1337");
})