const mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"password",
    database:"data"
})
con.connect((err)=>{
    if(err) throw err;
    else console.log("Databse created successfull");
})

module.exports=con;