const mysql=require('mysql');
const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'simpledbb',
    port:5000
});

//check database connection

db.connect(err=>{
    if (err) {
    console.log('database connected...');}
})
module.exports=db;