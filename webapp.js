const express= require('express');
const hbs=require('hbs');

var app =express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine' ,'hbs');


//midleweare with 3 arguments
app.use((req,res,next)=>{
	var date =new Date();
	console.log( date +`${req.method}  ${req.url}`);
	next();
});

//midleweare without using next arguments
/*app.use((req,res,next)=>{
	res.render('willbbck.hbs');
});
*/
app.use(express.static(__dirname +'/public'));

hbs.registerHelper('getCurrentYear',()=>{
	return new Date().getFullYear();
});

hbs.registerHelper('getUppercase',(text)=>{
	return text.toUpperCase();
});

app.get('/',(req,res)=>{
	//res.send('Hello Express');
	res.render('home.hbs' ,{
		pagetitle:'HOME PAGE'
	});
});

app.get('/about',(req,res)=>{
	//res.send('Hello Express');
	res.render('about.hbs' ,{
		pagetitle:'ABOUT PAGE',
		wcmsg:'welcome to about page',
	copyright:new Date().getFullYear()
	});
});

app.get('/badreq',(error,res)=>{
	if(error){
		res.send('bad request');
	}else{
	res.send('Hello Express');}
});


app.listen(3000);