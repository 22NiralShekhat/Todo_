var express=require('express')
let encodeUrl=express.urlencoded({extended:false});
var router=express.Router();
var app=express()
var con=require('./databse')

app.use(encodeUrl);
app.set('view engine', 'ejs');

var routes=require('./routes')

app.use('/', routes);
app.use('/pending', routes);
app.use('/customers', routes);

app.use(router);
app.listen(8080,(err)=>{
    if (err) throw err;
    console.log("server running at port 8080")
});
