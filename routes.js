const mysql=require('mysql')
var express=require('express')
var router=express.Router()
var con=require('./databse')

// getting homepage
router.get('/',(req,res)=>{
    res.sendFile(__dirname+"/static/index.html")
})

//getting tabuler display of pending task
router.get("/pending", function(req, res, next){

	var sql = "SELECT * FROM tasks ORDER BY id DESC";
	con.query(sql, function(err, data){

		if(err) throw err;
		else res.render('file', {title:'Node.js MySQL CRUD Application', action:'list', sampleData:data});

	});
});

//insert data into database
router.post('/',(req,res)=>{

var task=req.body.task;
var desp=req.body.desp;

    var sql=`INSERT INTO tasks (task,des) VALUES  ('${task}', '${desp}') `;
    con.query(sql,(err,data)=>{
        if (err) throw err;
    })
    res.sendFile(__dirname+'/static/index.html')   

})

//delete completed task
router.get('/delete/(:id)', function(req, res, next) {
    var user = { id: req.params.id }
    con.query('DELETE FROM tasks WHERE id = ' + req.params.id, user, function(err, result) {
    if (err) throw err; 
    res.redirect('/pending');
    }
    )
})

module.exports=router;