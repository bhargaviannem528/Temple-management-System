const express=require("express");
const connection=require("../connection");
const router=express.Router();
router.post('/registerapi',(req,res)=>{
    connection.query("insert into from users1 set?",[req.body],
    (err,result)=>{
        if(err) throw err;
        else{
            res.send({submit:true,})
        }
    });
});
module.exports=router;