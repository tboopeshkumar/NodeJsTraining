//level 1 : understanding EJS layout with express 
//routing

//load the module
var express=require('express');
// connect to express web server
var app=express();
// configure template engine used by express
app.set('view engine', 'ejs');
app.locals.pretty=true;// will display nicely formatted html in view page source of browser

app.get('/', function (req, res) {
    res.send("<h1>Welcome to Dashboard case study</h1>");
	//res.render('index.ejs');
});
app.get('/register',function(req,res){
	res.render('register.ejs');
});
app.get('/login',function(req,res){
	res.render('login.ejs');
});
app.get('/dashboard',function(req,res){
	res.render('dashboard.ejs');
});
app.get('/logout',function (req,res){
	res.redirect('/');
})
app.listen(3000);
console.log("server running on localhost:3000");
// node app.js

// run  now     > node app1.js
// open  browser and type localhost:3000/