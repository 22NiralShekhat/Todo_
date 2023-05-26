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

// router.get('/',(req,res)=>{
//     res.sendFile(__dirname+"/static/index.html")
// })

// router.get("/pending", function(req, res, next){

// 	var sql = "SELECT * FROM tasks ORDER BY id DESC";
// 	con.query(sql, function(err, data){

// 		if(err) throw err;
// 		else res.render('file', {title:'Node.js MySQL CRUD Application', action:'list', sampleData:data});

// 	});
// });

// router.post('/',(req,res)=>{

// var task=req.body.task;
// var desp=req.body.desp;

//     var sql=`INSERT INTO tasks (task,des) VALUES  ('${task}', '${desp}') `;
//     con.query(sql,(err,data)=>{
//         if (err) throw err;
//     })
//     res.sendFile(__dirname+'/static/index.html')   

// })

// router.get('/delete/(:id)', function(req, res, next) {
//     var user = { id: req.params.id }
//     con.query('DELETE FROM tasks WHERE id = ' + req.params.id, user, function(err, result) {
//     //if(err) throw err
//     if (err) throw err; 
//     //req.flash('success', 'Customer deleted successfully! id = ' + req.params.id)
//     // redirect to users list page
//     res.redirect('/pending');
//     }
//     )
// })

app.use(router);
app.listen(8080,(err)=>{
    if (err) throw err;
    console.log("server running at port 8080")
});